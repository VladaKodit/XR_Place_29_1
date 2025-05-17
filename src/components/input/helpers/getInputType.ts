import type { AbstractInputType, InputData } from '../type';

const INPUT_CONFIGS: Record<AbstractInputType, InputData> = {
  phone: {
    typeInput: 'tel',
    prefixInput: '🇷🇺',
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
