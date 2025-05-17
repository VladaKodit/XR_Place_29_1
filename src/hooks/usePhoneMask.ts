// import { useState, useEffect } from 'react';
// // import { PHONE_MASKS } from '../helpers/inputConfig';
// // import { applyMask, getDigits, getMaskDigitsCount } from '../helpers/maskPhoneHelper';
// // import type { CountryCode } from '../type';

// export const usePhoneMask = (
//   type: string,
//   externalValue: string | undefined,
//   styles: any
// ) => {
//   const [selectedFlag, setSelectedFlag] = useState<CountryCode>('ru');
//   const [internalValue, setInternalValue] = useState('');
//   const [displayValue, setDisplayValue] = useState('');

//   const isPhoneType = type === 'phone';

//   useEffect(() => {
//     if (externalValue !== undefined) {
//       if (isPhoneType) {
//         const digits = getDigits(String(externalValue));
//         setInternalValue(digits);
//         setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));
//       } else {
//         setInternalValue(String(externalValue));
//         setDisplayValue(String(externalValue));
//       }
//     }
//   }, [externalValue, isPhoneType, selectedFlag, styles]);

//   const handleCountryChange = (key: CountryCode) => {
//     if (!isPhoneType) return;

//     const currentDigits = getDigits(internalValue);
//     const newMask = PHONE_MASKS[key];
//     const staticPart = newMask.split('_')[0].replace(/\D/g, '');
//     let relevantDigits = '';

//     if (currentDigits.startsWith(staticPart)) {
//       relevantDigits = currentDigits.slice(staticPart.length);
//     }

//     const maxDigits = getMaskDigitsCount(newMask);
//     relevantDigits = relevantDigits.slice(0, maxDigits);

//     setSelectedFlag(key);
//     setInternalValue(staticPart + relevantDigits);
//     setDisplayValue(applyMask(newMask, relevantDigits, styles));

//     return staticPart + relevantDigits;
//   };

//   const handlePhoneChange = (value: string) => {
//     const digits = getDigits(value);
//     setInternalValue(digits);
//     setDisplayValue(applyMask(PHONE_MASKS[selectedFlag], digits, styles));
//     return digits;
//   };

//   return {
//     selectedFlag,
//     internalValue,
//     displayValue,
//     isPhoneType,
//     handleCountryChange,
//     handlePhoneChange,
//     setSelectedFlag
//   };
// };
