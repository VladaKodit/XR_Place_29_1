import type { CaseProps } from '../../components/Case/type.ts';

export type CaseListProps = {
  cases: CaseProps[]; // массив карточек
  onSeeMoreClick?: () => void; // для ссылки
};
