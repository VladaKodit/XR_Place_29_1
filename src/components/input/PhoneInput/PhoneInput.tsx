import { useRef } from 'react';
import { usePhoneMask } from '../../../hooks';
import { useDropdown } from '../../../hooks';
import { useInputHandlers } from '../../../hooks';
import { DATA_FLAGS_SELECTOR, PHONE_MASKS } from '../helpers/inputConfig';
import type { CountryCode } from '../../../utils/types/Input';
import { getMaskDigitsCount } from '../helpers/maskPhoneHelper';
import { type PhoneInputLogicProps } from './type';
import styles from './PhoneInput.module.css';

export const PhoneInputLogic = ({
  value,
  onChange,
  rest,
  className,
}: PhoneInputLogicProps) => {
  const phoneMaskApi = usePhoneMask('phone', value, styles);
  const dropdownApi = useDropdown();
  const inputHandlers = useInputHandlers(onChange, rest, phoneMaskApi);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  // Обработчик выбора страны
  const handleSelect = (key: CountryCode) => {
    const newValue = phoneMaskApi.handleCountryChange(key);
    dropdownApi.setDropdownOpen(false);

    if (onChange) {
      const event = {
        target: {
          value: newValue,
          name: rest.name,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }

    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 0);
  };

  // Получаем данные текущего флага
  const flagData = DATA_FLAGS_SELECTOR[phoneMaskApi.selectedFlag];
  if (!flagData) return null;

  return (
    <>
      {/* Блок с выбором страны */}
      <div className={styles.input__placeholder}>
        <div
          className={styles['input__tel-selector']}
          onClick={dropdownApi.toggleDropdown}
        >
          <img
            src={flagData.path}
            alt={flagData.alt}
            className={styles['input__flag-country']}
          />
          <span className={styles['input__selector-arrow']}>▼</span>
        </div>
      </div>

      {/* Отображаемое поле с маской (нужно для красивого ввода номера) */}
      <div
        className={`${styles.input__content} ${styles['input__phone-display']} ${className}`}
        dangerouslySetInnerHTML={{ __html: phoneMaskApi.displayValue }}
        onClick={() => hiddenInputRef.current?.focus()}
      />

      {/* Скрытое поле для реального ввода (использован паттерн visually-hidden) */}
      <input
        type="tel"
        ref={hiddenInputRef}
        value={phoneMaskApi.internalValue}
        onChange={inputHandlers.handleChange}
        onKeyDown={inputHandlers.handleKeyDown}
        className={styles.visuallyHidden}
        maxLength={
          getMaskDigitsCount(PHONE_MASKS[phoneMaskApi.selectedFlag]) + 3
        }
        {...rest}
      />

      {/* Выпадающий список стран */}
      {dropdownApi.isDropdownOpen && (
        <div className={styles.input__dropdown} ref={dropdownApi.dropdownRef}>
          {Object.entries(DATA_FLAGS_SELECTOR).map(([key, flag]) => (
            <div
              key={key}
              className={styles['input__dropdown-item']}
              onClick={() => handleSelect(key as CountryCode)}
            >
              <img
                src={flag.path}
                alt={flag.alt}
                className={styles['input__flag-country']}
              />
              <span>{key.toUpperCase()}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PhoneInputLogic;
