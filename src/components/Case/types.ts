export type CaseProps = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string[];
  style?: React.CSSProperties;
};

export type CaseListProps = {
  cases: CaseProps[]; // массив карточек
  onSeeMoreClick?: () => void; //  обработчик клика по ссылке
  seeAllText?: string; //текст для ссылки
};
