import styles from './TabSwitcher.module.scss';
import type { FeatureData } from './types';
import { useState, useRef } from 'react';
import TabCard, { type ChildRef } from './TabCard';
import TabButton from './TabButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { AnimationParams } from '@types';

gsap.registerPlugin(ScrollTrigger);

interface TabSwitcherProps {
  tabsData: FeatureData[];
}

/**
 * Переключатель табов, принимающий массив элементов FeatureData.
 * Первый элемент массива играет роль изображения-заглушки, для остальных элементов отрисовываются соответствующие кнопки
 */

const animationParams: AnimationParams = {
  opacityFrom: 0,
  opacityTo: 1,
  yPositionFrom: 30,
  yPositionTo: 0,
  duration: 0.1,
  easing: 'power2.out',
};

const TabSwitcher = ({ tabsData }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const lineRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<ChildRef>(null);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    cardRef.current?.onTabSwitch();
  };

  useGSAP(
    () => {
      const el = lineRef.current!;

      tabRefs.current.forEach((tab: HTMLDivElement | null, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: tab,
              start: `top ${95 - index * 2}%`,
              end: `top ${95 - index * 2}%`,
              scrub: false,
            },
          })
          .to(el, {
            height: 44 * (index + 1),
            duration: animationParams.duration,
            ease: animationParams.easing,
          })
          .fromTo(
            tab,
            {
              opacity: animationParams.opacityFrom,
              y: animationParams.yPositionFrom,
              ease: animationParams.easing,
            },
            {
              opacity: animationParams.opacityTo,
              y: animationParams.yPositionTo,
              duration: 1,
              ease: animationParams.easing,
            },
          );
      });
    },
    { scope: lineRef, dependencies: [tabRefs] },
  );

  return (
    <div className={styles.tabsContainer}>
      <span
        className={styles.tabMarkersVerticalLine}
        aria-hidden={true}
        ref={lineRef}
      ></span>
      <div className={styles.tabButtons}>
        {tabsData.slice(1).map((tab, i) => (
          <TabButton
            key={tab.index}
            index={tab.index}
            activeTab={activeTab}
            handleTabClick={() => handleTabClick(tab.index)}
            name={tab.name ?? ''}
            ref={(el: HTMLDivElement) => (tabRefs.current[i] = el)}
          />
        ))}
      </div>
      <TabCard
        cardObj={activeTab === null ? tabsData[0] : tabsData[activeTab]}
        ref={cardRef}
      />
    </div>
  );
};

export default TabSwitcher;
