import { type CheckboxInputProps } from './type';
import styles from './CheckboxInput.module.scss';

export const CheckboxInput = ({
  description,
  textLink,
}: CheckboxInputProps) => {
  return (
    <div className={styles['checkbox-input']}>
      <input
        type="checkbox"
        className={styles['checkbox-input__body']}
        required
      />
      <p className={styles['checkbox-input__description']}>
        {description}{' '}
        <a href={`${textLink.url}`} className={styles['checkbox-input__link']}>
          {textLink.text}
        </a>
      </p>
    </div>
  );
};
