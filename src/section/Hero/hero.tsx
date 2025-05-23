import { Button } from '@components';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Hero.module.scss';
import Arrow from '../../assets/images/arrow.svg?react';
import Cross from '../../assets/images/sectionHero/cross.svg?react';
import CornerArrow from '../../assets/images/sectionHero/corner_arrow.svg?react';
import Square from '../../assets/images/sectionHero/square.svg?react';
import Circle from '../../assets/images/sectionHero/circle.svg?react';

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <span className={`${style.line} ${style.line1}`} aria-hidden="true" />
      <span className={`${style.line} ${style.line2}`} aria-hidden="true" />
      <span className={`${style.line} ${style.line3}`} aria-hidden="true" />

      <Cross className={style.cross} aria-hidden="true" />
      <CornerArrow className={style.cornerArrow} aria-hidden="true" />
      <Square className={style.square} aria-hidden="true" />
      <Circle className={style.circle} aria-hidden="true" />

      <h1 className={style.header}>xr place</h1>
      <p className={style.subheader} aria-hidden="true">
        place for business
      </p>

      <img
        className={style.image}
        src="src\assets\images\sectionHero\Frame.jpg"
        alt="3Д модель"
      />

      <p className={style.description}>{t('hero.description.0')}</p>
      <Button
        className={style.button}
        type={'button'}
        children={t('hero.cta')}
        Icon={Arrow}
      />
    </div>
  );
};
