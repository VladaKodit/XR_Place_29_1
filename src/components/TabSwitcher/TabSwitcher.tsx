import styles from './TabSwitcher.module.scss';
import type { FeatureData } from './types';
import { useState } from 'react';
import TabCard from './TabCard';
import TabButton from './TabButton';

interface TabSwitcherProps {
  tabsData: FeatureData[];
}

/**
 * Переключатель табов, принимающий массив элементов FeatureData.
 * Первый элемент массива играет роль изображения-заглушки, для остальных элементов отрисовываются соответствующие кнопки
 */

const TabSwitcher = ({ tabsData }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.tabsContainer}>
      <span className={styles.tabMarkersVerticalLine} aria-hidden={true}></span>
      <div className={styles.tabButtons}>
        {tabsData.slice(1).map((tab) => (
          <TabButton
            index={tab.index}
            key={tab.index}
            activeTab={activeTab}
            handleTabClick={() => handleTabClick(tab.index)}
            name={tab.name ?? ''}
          />
        ))}
      </div>
      <TabCard
        cardObj={activeTab === null ? tabsData[0] : tabsData[activeTab]}
      />
    </div>
  );
};

export default TabSwitcher;
