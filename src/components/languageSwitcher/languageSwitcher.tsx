import { useTranslation } from 'react-i18next';
import styles from './languageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Получаем переводы и объект локализации

  const changeLanguage = (lng: string) => {
    if (!i18n.language.startsWith(lng)) {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    }
  };

  return (
    <div className={styles['language-switcher']}>
      {/* Кнопка EN */}
      <button
        className={`${styles['switch-button']} ${i18n.language.startsWith('en') && styles['switch-button-active']}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>

      <span className={styles['switch-divider']} />

      {/* Кнопка RU */}
      <button
        className={`${styles['switch-button']} ${i18n.language.startsWith('ru') && styles['switch-button-active']}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};
