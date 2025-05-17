import ruFlag from '../../../assets/flags/ru.svg';
import type { AbstractInputType, InputData, PathFlags } from '../type';

export const PATH_FLAGS_SELECTOR: PathFlags<string> = {
  ru: ruFlag,
};

const INPUT_CONFIGS: Record<AbstractInputType, InputData> = {
  phone: {
    typeInput: 'tel',
    prefixInput: 'ru',
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

export const getInputData = (type: AbstractInputType): InputData =>
  INPUT_CONFIGS[type] || INPUT_CONFIGS.default;
