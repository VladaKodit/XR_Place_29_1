import ruFlag from '@assets/flags/ru.svg';
import enFlag from '@assets/flags/en.svg';
import type {
  AbstractInputType,
  InputData,
  DataFlags,
  CountryCode,
  PhoneDataType,
} from '@types';

// шаблоны для маски в phone type input
export const PHONE_MASKS: Record<CountryCode, PhoneDataType> = {
  ru: '+_ (___) ___ __-__',
  en: '+__ ____ ______',
};

// данные для флагов в phone type input
export const DATA_FLAGS_SELECTOR: DataFlags = {
  ru: {
    path: ruFlag,
    alt: 'russian flag',
  },
  en: {
    path: enFlag,
    alt: 'british  flag',
  },
} as const;

// конфиг для inputs
export const INPUT_CONFIGS: Record<AbstractInputType, InputData> = {
  phone: {
    typeInput: 'tel',
    prefixInput: null,
  },
  tg: {
    typeInput: 'url',
    prefixInput: 'https://t.me/',
  },
  email: {
    typeInput: 'email',
    prefixInput: 'email',
  },
  name: {
    typeInput: 'text',
    prefixInput: 'Как вас зовут',
  },
  default: {
    typeInput: 'text',
    prefixInput: null,
  },
} as const;

// выделяет из конфига данные
export const getInputData = (type: AbstractInputType): InputData =>
  INPUT_CONFIGS[type] || INPUT_CONFIGS.default;
