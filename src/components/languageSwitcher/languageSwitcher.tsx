import { useTranslation } from 'react-i18next';
import styles from './languageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Получаем переводы и объект локализации

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className={styles['language-switcher']}>
      {/* Кнопка EN */}
      <button
        className={`${styles['switch-button']} ${i18n.language === 'en' && styles['switch-button-active']}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      {/* Кнопка RU */}
      <button
        className={`${styles['switch-button']} ${i18n.language === 'ru' && styles['switch-button-active']}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};
