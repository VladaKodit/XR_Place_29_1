import type { FeatureData } from './types.ts';
import styles from './TabSwitcher.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import type { AnimationParams } from '@types';

gsap.registerPlugin(ScrollTrigger);

interface TabCardProps {
  cardObj: FeatureData;
}

export interface ChildRef {
  onTabSwitch: () => void;
}

const renderTabIndex = (index: number) =>
  index !== 0 && `${index.toString().padStart(2, '0')}.`;

const animationParams: AnimationParams = {
  opacityFrom: 0.5,
  opacityTo: 1,
  yPositionFrom: 10,
  yPositionTo: 0,
  duration: 1,
};

const TabCard = forwardRef<ChildRef, TabCardProps>(
  ({ cardObj }: TabCardProps, ref) => {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgRef.current!,
            start: 'top 80%',
            end: 'top 80%',
            scrub: false,
          },
        })
        .fromTo(
          imgRef.current!,
          {
            opacity: 0,
          },
          {
            opacity: animationParams.opacityTo,
          },
        );
    });

    const onTabSwitch = () => {
      gsap
        .timeline()
        .fromTo(
          textRef.current!,
          {
            y: animationParams.yPositionFrom,
            opacity: animationParams.opacityFrom,
          },
          {
            y: animationParams.yPositionTo,
            opacity: animationParams.opacityTo,
            duration: animationParams.duration,
          },
          'start',
        )
        .fromTo(
          imgRef.current!,
          {
            y: -animationParams.yPositionFrom!,
            opacity: animationParams.opacityFrom,
          },
          {
            y: animationParams.yPositionTo,
            opacity: animationParams.opacityTo,
            duration: animationParams.duration,
          },
          'start',
        );
    };

    useImperativeHandle(ref, () => ({
      onTabSwitch,
    }));

    return (
      <div className={styles.cardContainer}>
        <img
          className={styles.cardImage}
          src={cardObj.imageUrl}
          alt={cardObj.name}
          ref={imgRef}
        />
        <div className={styles.cardContent} ref={textRef}>
          <span className={styles.cardIndex}>
            {renderTabIndex(cardObj.index)}
          </span>
          <p className={styles.cardDescription}>{cardObj.description}</p>
        </div>
      </div>
    );
  },
);

export default TabCard;
