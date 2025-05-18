import type { HTMLInputTypeAttribute } from 'react';

// основные типы для input
export type AbstractInputType = 'phone' | 'tg' | 'email' | 'name' | 'default';

export type FlagImg = {
  path: string;
  alt: string;
};
export type DataFlags = {
  ru: FlagImg;
  en?: FlagImg;
};

export type CountryCode = 'ru' | 'en';
export type PhoneDataType = string;

export type InputPrefix = 'https://t.me/' | 'email' | 'Как вас зовут' | null;

export type InputValue = React.InputHTMLAttributes<HTMLInputElement>['value'];

// типы для хуков компонента Input и PhoneInput
export type OnChangeType =
  | ((event: React.ChangeEvent<HTMLInputElement>) => void)
  | undefined;
export type InputRestProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'className' | 'placeholder' | 'value' | 'onChange'
> & {
  // если нужно тут можно добаить кастомные пропсы
  // (но вроде на макете больше нет input, так что оставлю
  // это как бест практис)
  someCustomProp?: string; // чисто как пример
};
export type PhoneMaskApiType<T extends (...args: never[]) => unknown> =
  ReturnType<T>;

// основной тип для Input
export type InputData = {
  typeInput: HTMLInputTypeAttribute;
  prefixInput: InputPrefix;
};
