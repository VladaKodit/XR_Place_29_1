import { type AbstractInputType } from '../../utils/types/Input';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: AbstractInputType;
  className?: string;
}
