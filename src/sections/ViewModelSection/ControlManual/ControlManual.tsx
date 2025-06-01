import styles from './ControlManual.module.scss';

/*
  Компонент будет в дальнейшем переработан, пока что он
  сделан "чисто" что бы был
 */
export const ControlManual = () => (
  <>
    <div className={styles['control-manual']}>
      <div className={styles['control-manual__description']}>
        <p>Используйте клавиши WASD для перемещения</p>
        <div className={styles['control-manual__controls-keys']}>
          <span className={styles['control-manual__char']}>W</span>
          <span className={styles['control-manual__char']}>A</span>
          <span className={styles['control-manual__char']}>S</span>
          <span className={styles['control-manual__char']}>D</span>
        </div>
      </div>
    </div>
  </>
);
