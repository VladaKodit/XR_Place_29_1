import type { InputProps, InputData } from './type';
import { getInputData } from './helpers/getInputType';
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
          <span className={styles.input__placeholder}>{prefixInput}</span>
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
