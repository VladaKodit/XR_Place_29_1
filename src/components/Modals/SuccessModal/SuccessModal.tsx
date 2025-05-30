import type { FC } from 'react';
import type { SuccessModalProps } from './type';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import style from './SuccessModal.module.scss';
import Arrow from '../../../assets/images/arrow.svg?react';
import CheckIcon from '../../../assets/images/checkIcon.svg?react';

// Компонент модального окна успешной отправки данных
export const SuccessModal: FC<SuccessModalProps> = ({ onGoToHomeClick }) => {
  const { t } = useTranslation();

  return (
    <div className={style.successModal}>
      {/* Иконка */}
      <CheckIcon />

      <div className={style.heading}>
        {/* Заголовок модального окна */}
        <h5 className={style.title}>{t('feedbackModal.title')}</h5>

        {/* Текст модального окна */}
        <div className={style.paragraphs}>
          <p className={style.description}>
            {t('feedbackModal.description.0')}
          </p>
          <p className={style.description}>
            {t('feedbackModal.description.1')}
          </p>
        </div>
      </div>

      {/* Кнопка для перехода на главную страницу */}
      <Button
        className={style.button}
        type={'button'}
        Icon={Arrow}
        onClick={onGoToHomeClick}
      >
        {t('feedbackModal.button')}
      </Button>
    </div>
  );
};
