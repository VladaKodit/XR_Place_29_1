export const getMaskDigitsCount = (mask: string) =>
  (mask.match(/_/g) || []).length;

export const getDigits = (str: string) => str.replace(/\D/g, '');

export const applyMask = (
  mask: string,
  digits: string,
  styles: CSSModuleClasses,
) => {
  let result = '';
  let digitIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    const maskChar = mask[i];

    if (maskChar === '_') {
      if (digitIndex < digits.length) {
        result += `<span class="${styles.inputDigit}">${digits[digitIndex]}</span>`;
        digitIndex++;
      } else {
        result += `<span class="${styles.inputPlaceholder}">_</span>`;
      }
    } else {
      result += `<span class="${styles.inputStatic}">${maskChar}</span>`;
      if (digitIndex < digits.length && digits[digitIndex] === maskChar) {
        digitIndex++;
      }
    }
  }

  return result;
};
