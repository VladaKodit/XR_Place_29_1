import type { HTMLInputTypeAttribute } from 'react';

export type AbstractInputType = 'phone' | 'tg' | 'email' | 'name' | 'default';

export type PathFlags<T> = {
  ru: T;
  en?: T;
};

export type InputPrefix =
  | 'ru'
  | 'https://t.me/'
  | 'email'
  | 'Как вас зовут'
  | null;

export type InputData = {
  typeInput: HTMLInputTypeAttribute;
  prefixInput: InputPrefix;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: AbstractInputType;
  className?: string;
}
