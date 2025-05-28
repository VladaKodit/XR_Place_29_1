import { Suspense, lazy, useEffect, useState } from 'react';

import { useBtnClickLoad } from '@hooks';
import imgViewSection from '@assets/images/imgViewSection.png';
import styles from './ViewModelSection.module.scss';

const LazyWrapperModelScale = lazy(
  () => import('./WrapperModelScale/WrapperModelScale'),
);

/**
 * main компонент для визуализации секции
 */
export const ViewModelSection = () => {
  const { isLoading, showScale, handleButtonClick } = useBtnClickLoad();
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (showScale) {
      const timer = setTimeout(() => setShowControls(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowControls(false);
    }
  }, [showScale]);

  return (
    <section
      className={styles['view-model-section']}
      style={{ backgroundImage: `url(${imgViewSection})` }}
    >
      <button
        className={styles['view-model-section__btn']}
        onClick={handleButtonClick}
        aria-label="Load 3D model"
        type="button"
        disabled={isLoading || showScale}
      ></button>

      {showScale && (
        <Suspense>
          <LazyWrapperModelScale />

          {showControls && (
            <div className={styles['controls-section']}>
              <div className={styles['controls-info']}>
                <p>Используйте клавиши WASD для перемещения</p>
                <div className={styles['controls-keys']}>
                  <span>W</span>
                  <span>A</span>
                  <span>S</span>
                  <span>D</span>
                </div>
              </div>
            </div>
          )}
        </Suspense>
      )}
    </section>
  );
};
