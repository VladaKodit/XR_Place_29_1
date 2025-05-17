import type { InputRestProps } from '../../../utils/types/Input';
import { type InputProps } from '../type';

// расширение базового интерфейса input
export interface PhoneInputLogicProps extends InputProps {
  value: string | number | readonly string[];
  rest: InputRestProps;
  className: string;
}
