import styles from './TabSwitcher.module.scss';
import { forwardRef } from 'react';

interface TabButtonProps {
  index: number;
  activeTab: number | null;
  handleTabClick: (index: number) => void;
  name: string;
  setRef?: (el: HTMLDivElement | null) => void;
}

const TabButton = forwardRef<HTMLDivElement, TabButtonProps>(
  ({ index, activeTab, handleTabClick, name }, ref) => {
    const isActive = activeTab === index;

    return (
      <div className={styles.tabItem} ref={ref}>
        {index > 0 && (
          <span
            className={isActive ? styles.markerActive : styles.marker}
            aria-hidden={true}
          ></span>
        )}
        <button
          className={isActive ? styles.tabButtonActive : styles.tabButton}
          onMouseEnter={() => handleTabClick(index)}
        >
          {name}
        </button>
      </div>
    );
  },
);

export default TabButton;
