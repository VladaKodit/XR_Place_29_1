import { useState, type FC } from 'react';
import type { ContactFormData, ContactFormModalProps } from './type';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import { CheckboxInput, Input } from '../../Input';
import style from './ContactFormModal.module.scss';
import Arrow from '../../../assets/images/arrow.svg?react';
import CloseIcon from '../../../assets/images/closeIcon.svg?react';

// Компонент модального окна с формой
export const ContactFormModal: FC<ContactFormModalProps> = ({
  onSubmit,
  onClose,
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    phone: '',
    tg: '',
    email: '',
    name: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!formData.phone || !formData.email || !formData.name) {
        throw new Error('Please fill all required fields');
      }

      await onSubmit(formData);

      setFormData({
        phone: '',
        tg: '',
        email: '',
        name: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={style.contactFormModal}>
      <button
        type="button"
        className={style.close}
        aria-label="Закрыть модальное окно"
        onClick={onClose}
      >
        <CloseIcon />
      </button>

      <h5 className={style.title}>{t('ctaModal.title')}</h5>
      <p className={style.description}>{t('ctaModal.description.0')}</p>

      {error && <div className={style.error}>{error}</div>}

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.firstLine}>
          <Input
            required
            name="phone"
            type="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            name="tg"
            type="tg"
            value={formData.tg}
            onChange={handleChange}
          />
        </div>

        <Input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          required
          name="name"
          type="name"
          value={formData.name}
          onChange={handleChange}
        />

        <div className={style.checkbox}>
          <CheckboxInput
            description={t('ctaModal.form.agreement')}
            textLink={{ url: '#', text: t('ctaModal.form.policy') }}
          />
        </div>

        <Button
          type="submit"
          className={style.button}
          Icon={Arrow}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t('ctaModal.form.submitting')
            : t('ctaModal.form.submit')}
        </Button>
      </form>
    </div>
  );
};
