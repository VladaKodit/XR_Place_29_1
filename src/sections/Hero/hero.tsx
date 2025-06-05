import { Button, Modal } from '@components';
import { useEffect, useRef, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Hero.module.scss';
import Arrow from '../../assets/images/arrow.svg?react';
import Cross from '../../assets/images/sectionHero/cross.svg?react';
import CornerArrow from '../../assets/images/sectionHero/corner_arrow.svg?react';
import Square from '../../assets/images/sectionHero/square.svg?react';
import Circle from '../../assets/images/sectionHero/circle.svg?react';
import image from '../../assets/images/sectionHero/Frame.jpg';
import { useModal } from '../../hooks/Modal/useModal';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { animateCollapseHero, animateHero } from './HeroAnimation';
import { Loader } from './Loader';

export const Hero: FC = () => {
  const { t } = useTranslation();
  const modalHook = useModal();

  const containerRef = useRef<HTMLDivElement>(null); // Контейнер Hero для GSAP-анимаций
  const overlayRef = useRef<HTMLDivElement>(null); // Overlay — перекрытие всей страницы

  const [collapseFinished, setCollapseFinished] = useState(false); // Завершена ли collapse-анимация
  const [overlayVisible, setOverlayVisible] = useState(true); // Показывать ли overlay + loader

  // Блокируем прокрутку, пока overlayVisible === true
  useEffect(() => {
    document.body.style.overflow = overlayVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = ''; // Очистка: возвращаем прокрутку
    };
  }, [overlayVisible]);

  // Когда loader завершился — запускаем collapse-анимацию
  const handleLoaderComplete = () => {
    const container = overlayRef.current; // overlay — тот, кто сжимается
    if (container) {
      animateCollapseHero(container).eventCallback('onComplete', () => {
        // После сжатия в круг и исчезновения — убираем overlay
        setCollapseFinished(true);
        setOverlayVisible(false);
      });
    }
  };

  // Запускаем анимацию Hero, когда он становится видимым
  useEffect(() => {
    if (collapseFinished && containerRef.current) {
      animateHero(containerRef.current);
    }
  }, [collapseFinished]);

  const openModal = () =>
    modalHook.openModal(() => {
      console.log('модалка закрыта');
    });

  return (
    <SectionBase>
      {/* Overlay перекрывает весь экран и содержит Loader — исчезает после collapse */}
      {overlayVisible && (
        <div className={style.overlay} ref={overlayRef}>
          <Loader onComplete={handleLoaderComplete} />
        </div>
      )}

      {/* Hero секция появляется под overlay, видна после его скрытия */}
      <div
        ref={containerRef}
        className={`${style.container} ${overlayVisible ? style.hidden : style.visible}`}
      >
        <span className={`${style.line} ${style.line1} line1`} />
        <span className={`${style.line} ${style.line2} line2`} />
        <span className={`${style.line} ${style.line3} line3`} />

        <Cross className={`${style.cross} cross`} aria-hidden="true" />
        <CornerArrow
          className={`${style.cornerArrow} cornerArrow`}
          aria-hidden="true"
        />
        <Square className={`${style.square} square`} aria-hidden="true" />
        <Circle className={`${style.circle} circle`} aria-hidden="true" />

        <h1 className={`${style.header} header`}>xr place</h1>
        <p className={`${style.subheader} subheader`} aria-hidden="true">
          place for business
        </p>

        <img className={`${style.image} image`} src={image} alt="3Д модель" />

        <p className={`${style.description} description`}>
          {t('hero.description.0')}
        </p>
        <Button
          className={`${style.button} button`}
          type={'button'}
          children={t('hero.cta')}
          Icon={Arrow}
          onClick={openModal}
        />
        <Modal modalHook={modalHook}>
          <p>Тут должна быть форма</p>
        </Modal>
      </div>
    </SectionBase>
  );
};
