import { useState, useRef, useEffect, type ChangeEvent } from 'react';
import type { InputProps, CountryCode } from './type';
import {
  getInputData,
  DATA_FLAGS_SELECTOR,
  PHONE_MASKS,
} from './helpers/inputConfig';
import {
  applyMask,
  getDigits,
  getMaskDigitsCount,
} from './helpers/maskPhoneHelper';
import styles from './input.module.css';

export const Input = ({
  type = 'default',
  className = '',
  placeholder,
  value: externalValue,
  onChange: externalOnChange,
  ...rest
}: InputProps) => {
  const { typeInput } = getInputData(type);
  const [selectedFlag, setSelectedFlag] = useState<CountryCode>('ru');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [internalValue, setInternalValue] = useState('');
  const [displayValue, setDisplayValue] = useState(
    type === 'phone' ? applyMask(PHONE_MASKS['ru'], '', styles) : '',
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isPhoneType = type === 'phone';
  const flagData = isPhoneType ? DATA_FLAGS_SELECTOR[selectedFlag] : null;

  useEffect(() => {
    if (externalValue !== undefined) {
      if (isPhoneType) {
        const digits = getDigits(String(externalValue));
        setInternalValue(digits);
        setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));
      } else {
        setInternalValue(String(externalValue));
        setDisplayValue(String(externalValue));
      }
    }
  }, [externalValue, isPhoneType, selectedFlag]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFlagClick = () => {
    if (!isPhoneType) return;
    setDropdownOpen((prev) => !prev);
  };

  const handleSelect = (key: CountryCode) => {
    if (!isPhoneType) return;

    const currentDigits = getDigits(internalValue);
    const newMask = PHONE_MASKS[key];
    const staticPart = newMask.split('_')[0].replace(/\D/g, '');
    let relevantDigits = '';

    if (currentDigits.startsWith(staticPart)) {
      relevantDigits = currentDigits.slice(staticPart.length);
    }

    const maxDigits = getMaskDigitsCount(newMask);
    relevantDigits = relevantDigits.slice(0, maxDigits);

    setSelectedFlag(key);
    setInternalValue(staticPart + relevantDigits);
    setDisplayValue(applyMask(newMask, relevantDigits, styles));
    setDropdownOpen(false);

    if (externalOnChange) {
      const event = {
        target: {
          value: staticPart + relevantDigits,
          name: rest.name,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      externalOnChange(event);
    }

    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const digits = getDigits(newValue);

    if (isPhoneType) {
      setInternalValue(digits);
      setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));

      if (externalOnChange) {
        const event = {
          target: {
            value: digits,
            name: rest.name,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        externalOnChange(event);
      }
    } else {
      setInternalValue(newValue);
      setDisplayValue(newValue);
      if (externalOnChange) {
        externalOnChange(e);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isPhoneType) return;
    const key = e.key;

    if (
      [
        'Backspace',
        'Delete',
        'Tab',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
      ].includes(key)
    ) {
      return;
    }

    if (!/\d/.test(key)) {
      e.preventDefault();
    }
  };

  const showPrefixBlock = () => {
    switch (type) {
      case 'phone':
        return (
          <div className={styles.input__placeholder}>
            <div
              className={styles['input__tel-selector']}
              onClick={handleFlagClick}
            >
              {flagData && (
                <img
                  src={flagData.path}
                  alt={flagData.alt}
                  className={styles['input__flag-country']}
                />
              )}
              <span className={styles['input__selector-arrow']}>▼</span>
            </div>
          </div>
        );
      case 'tg':
        return <div className={styles.input__placeholder}>https://t.me/</div>;
      case 'email':
        return <div className={styles.input__placeholder}>email</div>;
      case 'name':
        return <div className={styles.input__placeholder}>Как вас зовут</div>;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.input} ${styles[type] || ''}`} ref={dropdownRef}>
      <div className={styles.input__wrapper}>
        {showPrefixBlock()}

        {isPhoneType ? (
          <>
            <div
              className={`${styles.input__content} ${styles.phoneInputDisplay} ${className}`}
              dangerouslySetInnerHTML={{ __html: displayValue }}
              onClick={() => hiddenInputRef.current?.focus()}
            />
            <input
              type="tel"
              ref={hiddenInputRef}
              value={internalValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className={styles.visuallyHidden}
              maxLength={11}
              {...rest}
            />
          </>
        ) : (
          <input
            type={typeInput}
            ref={inputRef}
            value={internalValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${styles.input__content} ${className}`}
            {...rest}
          />
        )}
      </div>

      {isPhoneType && isDropdownOpen && (
        <div className={styles.dropdown}>
          {Object.entries(DATA_FLAGS_SELECTOR).map(([key, flag]) => (
            <div
              key={key}
              className={styles.dropdown__item}
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
    </div>
  );
};
