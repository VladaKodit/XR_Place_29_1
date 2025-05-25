import React from 'react';
import { CaseSection } from '../sections/CaseSection/CaseSection';
import type { CaseSectionProps } from '../sections/CaseSection/type';
import MIRA from '../assets/images/CaseSection/picture-MIRA.png';
import EMAAR from '../assets/images/CaseSection/picture-EMAAR.png';
import NORTHPORT from '../assets/images/CaseSection/picture-NORTH_PORT.png';
import airplane from '../assets/images/CaseSection/picture-AIRPLANE.png';

const caseSectionProps: CaseSectionProps = {
  sectionTitle: {
    text: 'реализованные проекты',
    highlights: ['проекты'],
    tag: 'сотрудничество',
  },
  cases: [
    {
      imageUrl: EMAAR,
      title: 'NORTHPORT',
      description: ['real estate agency'],
    },
    {
      imageUrl: MIRA,
      title: 'mira',
      description: ['real estate agency'],
    },
    {
      imageUrl: airplane,
      title: 'emaar',
      description: ['real estate agency'],
    },
    {
      imageUrl: NORTHPORT,
      title: 'emaar',
      description: ['real estate agency'],
    },
  ],
  onSeeMoreClick: () => {
    console.warn('[Заглушка] Функция "Смотреть все проекты". ');
  },
};

const App: React.FC = () => {
  return <CaseSection {...caseSectionProps} />;
};

export default App;
