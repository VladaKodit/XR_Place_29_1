import { SectionBase } from '../../components/SectionBase/SectionBase';
import styles from './HowItWorks.module.scss';
import Circles from '../../assets/images/HowItWorks/element.svg?react';
import { Button, Modal } from '@components';
import { useTranslation } from 'react-i18next';
import ArrowIcon from '../../assets/arrow.svg?react';
import { useModal } from '../../hooks/Modal/useModal';

export const HowItWorks = () => {
  const { t } = useTranslation();
  const modalHook = useModal();
  const openModal = () =>
    modalHook.openModal(() => {
      console.log('модалка исчезла с экрана');
    });

  return (
    <SectionBase>
      <div className={styles.howItWorks}>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-1`]}`}
        >
          {t('howItWorksIntro.title.0')}
        </h2>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-2`]}`}
        >
          {t('howItWorksIntro.title.1')}
        </h2>
        <h2
          className={`${styles.howItWorks__title} ${styles[`howItWorks__title--spacing-3`]}`}
        >
          {t('howItWorksIntro.title.2')}
        </h2>

        <span className={styles.howItWorks__decor}>
          <Circles aria-hidden="true" />
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
        <p>Тут былл Денис</p>
      </Modal>
    </SectionBase>
  );
};
