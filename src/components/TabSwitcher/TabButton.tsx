import styles from './TabSwitcher.module.scss';

interface TabButtonProps {
  index: number;
  activeTab: number | null;
  handleTabClick: (index: number) => void;
  name: string;
}

const TabButton = ({
  activeTab,
  handleTabClick,
  name,
  index,
}: TabButtonProps) => {
  const isActive = activeTab === index;

  return (
    <div className={styles.tabItem}>
      {index > 0 && (
        <span
          className={isActive ? styles.markerActive : styles.marker}
          aria-hidden={true}
        ></span>
      )}
      <button
        className={isActive ? styles.tabButtonActive : styles.tabButton}
        onClick={() => handleTabClick(index)}
      >
        {name}
      </button>
    </div>
  );
};

export default TabButton;
