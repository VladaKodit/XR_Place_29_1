import { SectionBase } from '../../components/SectionBase/SectionBase';
import styles from './HowItWorks.module.scss';
import Circles from '../../assets/images/HowItWorks/element.svg?react';
import { Button, ContactFormModal, Modal, SuccessModal } from '@components';
import { useTranslation } from 'react-i18next';
import ArrowIcon from '../../assets/arrow.svg?react';
import { useModal } from '../../hooks/Modal/useModal';
import type { ContactFormData } from '../../components/Modals/ContactFormModal/type';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type HowItWorksProps = {
  id?: string;
};

const ANIMATION_CONFIG = {
  autoAlpha: 1,
  duration: 2,
  easing: 'power3.out',
  clearProps: 'all',
};

export const HowItWorks = ({ id }: HowItWorksProps) => {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const modalHook = useModal();

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleFormSubmit = async (formData: ContactFormData) => {
    try {
      console.log('отправка удалась', formData);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      throw error;
    }
  };

  const handleGoToHome = () => {
    modalHook.closeModal();
  };

  const openModal = () => modalHook.openModal(() => console.log());

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.howItWorks}`,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    gsap.set(
      [
        `.${styles.anim_title}`,
        `.${styles.anim_decor}`,
        `.${styles.howItWorks}`,
        `.${styles.howItWorks__decor_line}`,
        `.${styles.howItWorks__description}`,
        `.${styles.howItWorks__link}`,
      ],
      {
        autoAlpha: 0,
      },
    );

    gsap.set(`.${styles.anim_title}`, { y: '100%' });
    gsap.set(`.${styles.anim_decor}`, { y: '200%' });
    gsap.set(`.${styles.howItWorks}`, { '--scale': 0 });
    gsap.set(`.${styles.howItWorks__decor_line}`, { scaleX: 0 });

    tl.to([`.${styles.anim_title}`, `.${styles.anim_decor}`], {
      y: 0,
      autoAlpha: 1,
      duration: ANIMATION_CONFIG.duration,
      ease: ANIMATION_CONFIG.easing,
    })

      .to(
        `.${styles.howItWorks}`,
        {
          '--scale': 1,
          autoAlpha: 1,
          duration: ANIMATION_CONFIG.duration,
          ease: ANIMATION_CONFIG.easing,
        },
        '<0.1',
      )

      .to(
        `.${styles.howItWorks__decor_line}`,
        {
          scaleX: 1,
          autoAlpha: 1,
          transformOrigin: 'left center',
          duration: ANIMATION_CONFIG.duration * 0.8,
          ease: 'power2.out',
        },
        '<0.3',
      )

      .to(
        [`.${styles.howItWorks__description}`, `.${styles.howItWorks__link}`],
        {
          autoAlpha: 1,
          duration: ANIMATION_CONFIG.duration * 0.7,
          ease: 'power1.out',
          stagger: 0.1,
        },
        '>0.2',
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <SectionBase id={id} containerClassName={styles['howItWorks-container']}>
      <div className={styles.howItWorks}>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-1`]}`}
        >
          <span className={styles.anim_title}>
            {t('howItWorksIntro.title.0')}
          </span>
        </h2>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-2`]} ${isRu ? styles[`howItWorks__title--spacing-2-ru`] : styles[`howItWorks__title--spacing-2-en`]}`}
        >
          <span className={styles.anim_title}>
            {t('howItWorksIntro.title.1')}
          </span>
        </h2>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-3`]}`}
        >
          <span className={styles.anim_title}>
            {t('howItWorksIntro.title.2')}
          </span>
        </h2>

        <span
          className={`${styles[`howItWorks__decor`]} ${isRu ? styles[`howItWorks__decor-ru`] : styles[`howItWorks__decor-en`]}`}
        >
          <span className={styles.anim_decor}>
            <Circles aria-hidden="true" />
          </span>
        </span>
        <span className={styles.howItWorks__decor_line} aria-hidden="true" />

        <a href="#0" className={styles.howItWorks__link}>
          {t('howItWorksIntro.link')}
        </a>

        <p
          className={`${styles.howItWorks__description} ${styles[`howItWorks__description--variant-1`]}`}
        >
          {t('howItWorksIntro.description.0')}
        </p>
        <p
          className={`${styles.howItWorks__description} ${styles[`howItWorks__description--variant-2`]}`}
        >
          {t('howItWorksIntro.description.1')}
        </p>

        <Button
          type="button"
          id={styles.howItWorks__button}
          variant="secondary"
          Icon={ArrowIcon}
          IconClassName={styles.howItWorks__icon}
          onClick={openModal}
        >
          {t('howItWorksIntro.cta')}
        </Button>
      </div>
      <Modal modalHook={modalHook}>
        {showSuccessModal ? (
          <SuccessModal onGoToHomeClick={handleGoToHome}></SuccessModal>
        ) : (
          <ContactFormModal
            onSubmit={handleFormSubmit}
            onClose={modalHook.closeModal}
          ></ContactFormModal>
        )}
      </Modal>
    </SectionBase>
  );
};
