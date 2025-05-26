import type { CaseProps } from '../../components/Case/type.ts';

export type CaseSectionProps = {
  cases: CaseProps[]; // массив карточек
  onSeeMoreClick?: () => void; // для ссылки
};
