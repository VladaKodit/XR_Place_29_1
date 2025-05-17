import type { InputProps, InputData } from './type';
import { getInputData, PATH_FLAGS_SELECTOR } from './helpers/getInputType';
import styles from './input.module.css';

export const Input = ({
  type = 'default',
  className = '',
  placeholder,
  ...rest
}: InputProps) => {
  const { typeInput, prefixInput }: InputData = getInputData(type);

  return (
    <div className={`${styles.input} ${styles[type] || ''}`}>
      <div className={styles.input__wrapper}>
        {prefixInput && (
          <div className={styles.input__placeholder}>
            {type === 'phone' ? (
              <div className={styles['input__tel-selector']}>
                <img
                  src={
                    PATH_FLAGS_SELECTOR[
                      prefixInput as keyof typeof PATH_FLAGS_SELECTOR
                    ]
                  }
                  className={styles['input__flag-country']}
                  alt="flag"
                />
                <span className={styles['input__selector-arrow']}>▼</span>
              </div>
            ) : (
              prefixInput
            )}
          </div>
        )}

        <input
          type={typeInput}
          placeholder={placeholder}
          className={`${styles.input__content} ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
};
