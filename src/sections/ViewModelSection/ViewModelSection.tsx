import { Suspense, lazy } from 'react';

import { useBtnClickLoad } from '@hooks';
import imgViewSection from '@assets/images/imgViewSection.png';
import styles from './ViewModelSection.module.scss';
import { ControlManual } from './ControlManual';

const LazyWrapperModelScale = lazy(
  () => import('./WrapperModelScale/WrapperModelScale'),
);

/**
 * main компонент для визуализации секции
 */
export const ViewModelSection = () => {
  const { isLoading, showScale, handleButtonClick } = useBtnClickLoad();

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
          <ControlManual />
        </Suspense>
      )}
    </section>
  );
};
