import type { CaseProps } from '../../components/Case/type.ts';
import type { LabeledTitleProps } from '../../components/LabeledTitle/type.ts';

export type CaseSectionProps = {
  sectionTitle: LabeledTitleProps; // заголовок и тег секции
  cases: CaseProps[]; // массив карточек
  onSeeMoreClick?: () => void; // для ссылки
};
