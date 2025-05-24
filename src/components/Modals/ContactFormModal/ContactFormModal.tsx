import type { FC } from 'react';
import type { ContactFormModalProps } from './type';
import { useTranslation } from 'react-i18next';
import { Button } from '../../button';
import { CheckboxInput, Input } from '../../Input';
import style from './ContactFormModal.module.scss';
import Arrow from '../../../assets/images/arrow.svg?react';
import CloseIcon from '../../../assets/images/closeIcon.svg?react';

// Компонент модального окна с формой
export const ContactFormModal: FC<ContactFormModalProps> = ({
  onSubmit,
  onClose,
  contactFormHook,
}) => {
  const { t } = useTranslation();

  return (
    <div className={style.contactFormModal}>
      {/* Крестик - кнопка закрытия модального окна */}
      <button type="button" className={style.close} onClick={onClose}>
        <CloseIcon />
      </button>

      {/* Заголовок модального окна */}
      <h5 className={style.title} children={t('ctaModal.title')} />

      {/* Текст модального окна */}
      <p className={style.description} children={t('ctaModal.description.0')} />

      {/* Форма */}
      <form
        onSubmit={() => {
          // Вызываем колбэк отправки с данными формы
          onSubmit({
            phone: contactFormHook.phone,
            tg: contactFormHook.tg,
            email: contactFormHook.email,
            name: contactFormHook.name,
          });
        }}
        className={style.form}
      >
        <div className={style.firstLine}>
          {/* Поле ввода телефона (обязательное) */}
          <Input
            required
            type="phone"
            value={contactFormHook.phone}
            onChange={(e) => {
              contactFormHook.setPhone(e.target.value);
            }}
          />

          {/* Поле ввода Telegram (необязательное, тк у клиента может не быть tg) */}
          <Input
            type="tg"
            value={contactFormHook.tg}
            onChange={(e) => {
              contactFormHook.setTg(e.target.value);
            }}
          />
        </div>

        {/* Поле ввода email (обязательное) */}
        <Input
          required
          type="email"
          value={contactFormHook.email}
          onChange={(e) => {
            contactFormHook.setEmail(e.target.value);
          }}
        />

        {/* Поле ввода имени (обязательное) */}
        <Input
          required
          type="name"
          value={contactFormHook.name}
          onChange={(e) => {
            contactFormHook.setName(e.target.value);
          }}
        />

        {/* Чекбокс согласия с политикой */}
        <div className={style.checkbox}>
          <CheckboxInput
            description={t('ctaModal.form.agreement')}
            textLink={{ url: '#', text: t('ctaModal.form.policy') }}
          />
        </div>

        {/* Кнопка отправки формы */}
        <Button
          type={'submit'}
          className={style.button}
          children={t('ctaModal.form.submit')}
          Icon={Arrow}
        />
      </form>
    </div>
  );
};
