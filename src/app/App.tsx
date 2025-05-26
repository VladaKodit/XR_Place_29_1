import React from 'react';
import { CaseSection } from '../sections/CaseSection/CaseSection';
import type { CaseSectionProps } from '../sections/CaseSection/type';
//import mira from '../assets/images/CaseSection/picture-mira.png';
import emaar from '../assets/images/CaseSection/picture-emaar.png';
//import northport from '../assets/images/CaseSection/picture-northport.png';
//import airplane from '../assets/images/CaseSection/picture-airplane.png';

const caseSectionProps: CaseSectionProps = {
  cases: [
    {
      image: emaar,
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
