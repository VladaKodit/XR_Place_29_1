import { lazy, Suspense } from 'react';
import type { InputProps } from './type';
import { getInputData } from './helpers/inputConfig';
import styles from './input.module.css';

const PhoneInputLogic = lazy(() => import('./PhoneInput/PhoneInput'));

/**
 * Компонент Input
 * @param type - тип imput (абстрактные типы: phone, tg, name, email)
 * @param className - дополнительные классы для стилизации (по умолчанию не используется)
 * @param placeholder - текст placeholder-а (по умолчанию не используется)
 * @param onChange - метод изменения состояния (если его не передать, изменить поле будет невозможно)
 * @param value - уже вписанные текст в input (по умолчанию не используется)
 * @returns в зависимости от типа возращает нужный input
 */
export const Input = ({
  type = 'default',
  className = '',
  placeholder,
  value = '',
  onChange,
  ...rest
}: InputProps) => {
  const { typeInput, prefixInput } = getInputData(type);

  const showPrefixBlock = () =>
    prefixInput ? (
      <div className={styles.input__placeholder}>{prefixInput}</div>
    ) : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={`${styles.input} ${styles[type] || ''}`}>
      <div className={styles.input__wrapper}>
        {showPrefixBlock()}

        {type === 'phone' ? (
          <Suspense
            fallback={
              <input
                type="tel"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`${styles.input__content} ${className}`}
                {...rest}
              />
            }
          >
            <PhoneInputLogic
              value={value}
              onChange={onChange}
              rest={rest}
              className={className}
            />
          </Suspense>
        ) : (
          <input
            type={typeInput}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`${styles.input__content} ${className}`}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};
