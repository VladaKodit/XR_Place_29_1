import { useState, useEffect } from 'react';
import { PHONE_MASKS } from '../../components/Input/helpers/inputConfig';
import {
  applyMask,
  getDigits,
  getMaskDigitsCount,
} from '../../components/Input/helpers/maskPhoneHelper';
import type { CountryCode, InputValue, AbstractInputType } from '@types';

// хук для использования маски ввода номера в компоненте PhoneInput
export const usePhoneMask = (
  type: AbstractInputType,
  externalValue: InputValue,
  styles: CSSModuleClasses,
) => {
  const [selectedFlag, setSelectedFlag] = useState<CountryCode>('ru');
  const [internalValue, setInternalValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  // кешируем проверку типа для избежания повторных вычислений
  const isPhoneType = type === 'phone';

  useEffect(() => {
    if (externalValue !== undefined) {
      const stringValue = String(externalValue);
      if (isPhoneType) {
        // преобразования с учётом текущей маски страны
        const digits = getDigits(stringValue);
        setInternalValue(digits);
        setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));
      } else {
        setInternalValue(stringValue);
        setDisplayValue(stringValue);
      }
    }
  }, [externalValue, isPhoneType, selectedFlag, styles]);

  // обработчик смены страны с сохранением частично введённого номера
  const handleCountryChange = (key: CountryCode) => {
    if (!isPhoneType) return '';

    const currentDigits = getDigits(internalValue);
    const newMask = PHONE_MASKS[key];

    // отделяем код страны от остальных цифр для корректного переноса
    const staticPart = newMask.split('_')[0].replace(/\D/g, '');
    let relevantDigits = '';

    if (currentDigits.startsWith(staticPart)) {
      relevantDigits = currentDigits.slice(staticPart.length);
    }

    // обрезаем цифры по длине новой маски
    const maxDigits = getMaskDigitsCount(newMask);
    relevantDigits = relevantDigits.slice(0, maxDigits);

    setSelectedFlag(key);
    const newValue = staticPart + relevantDigits;
    setInternalValue(newValue);
    setDisplayValue(applyMask(newMask, relevantDigits, styles));

    return newValue;
  };

  const handlePhoneChange = (value: string) => {
    const digits = getDigits(value);
    setInternalValue(digits);
    setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));
    return digits;
  };

  return {
    selectedFlag,
    internalValue,
    displayValue,
    isPhoneType,
    handleCountryChange,
    handlePhoneChange,
    setSelectedFlag,
    setInternalValue,
    setDisplayValue,
  };
};
