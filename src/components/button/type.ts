import type { FunctionComponent, SVGProps } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  IconClassName?: string;
}
