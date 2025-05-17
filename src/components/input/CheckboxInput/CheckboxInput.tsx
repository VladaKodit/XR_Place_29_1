import { type CheckboxInputProps } from './type';
import styles from './CheckboxInput.module.css';

export const CheckboxInput = ({
  description,
  textLink,
}: CheckboxInputProps) => {
  return (
    <div className={styles['checkbox-input']}>
      <input type="checkbox" className={styles['checkbox-input__body']} />
      <p className={styles['checkbox-input__description']}>
        {description}{' '}
        <a href={`${textLink.url}`} className={styles['checkbox-input__link']}>
          {textLink.text}
        </a>
      </p>
    </div>
  );
};
