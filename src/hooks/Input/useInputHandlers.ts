import { usePhoneMask } from './usePhoneMask';
import type { OnChangeType, PhoneMaskApiType, InputRestProps } from '@types';

// хук для обработки изменений phone input
export const useInputHandlers = (
  onChange: OnChangeType,
  rest: InputRestProps,
  phoneMaskApi: PhoneMaskApiType<typeof usePhoneMask>,
) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (phoneMaskApi.isPhoneType) {
      // очищаем ввод и прокидываем только цифры
      const digits = phoneMaskApi.handlePhoneChange(newValue);

      if (onChange) {
        // создание синтетическое событие с очищенным значением
        const event = {
          target: {
            value: digits,
            name: rest.name,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    } else {
      // Для обычных полей просто передаём значение
      phoneMaskApi.setInternalValue(newValue);
      phoneMaskApi.setDisplayValue(newValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  // разрешаем только цифры для телефонного поля
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!phoneMaskApi.isPhoneType) return;
    const key = e.key;

    // клавиши для редактирования поля
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }

    if (!/\d/.test(key)) e.preventDefault();
  };

  return {
    handleChange,
    handleKeyDown,
  };
};
