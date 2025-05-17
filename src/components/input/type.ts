import type { HTMLInputTypeAttribute } from 'react';

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

export type InputData = {
  typeInput: HTMLInputTypeAttribute;
  prefixInput: InputPrefix;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: AbstractInputType;
  className?: string;
}
