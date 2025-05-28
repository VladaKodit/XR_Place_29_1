import React from 'react';

import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components/LabeledTitle';
import CaseList from '../../components/Case/CaseList';
import type { CaseProps } from '../../components/Case/types.ts';

import mira from '../../assets/images/CaseSection/picture-mira.png';
import emaar from '../../assets/images/CaseSection/picture-emaar.png';
import northport from '../../assets/images/CaseSection/picture-northport.png';
import airplane from '../../assets/images/CaseSection/picture-airplane.png';

/**
 * Компонент секции с кейсами.
 *
 * Отображает заголовок с пометкой и список кейсов.
 * Использует обертку SectionBase для общей стилизации секции.
 * Для демонстрации используется моковый набор данных (`mockCases`)
 * Данные кейсов передаются в CaseList.
 * Содержит обработчик клика для перехода к полному списку проектов.
 *
 * @returns {JSX.Element} JSX-разметка секции с заголовком и списком кейсов.
 */

export const CaseSection: React.FC = () => {
  const sectionTitle = {
    text: 'Реализованные проекты',
    tag: 'Сотрудничество',
    highlights: ['проекты'],
  };

  const mockCases: CaseProps[] = [
    {
      image: northport,
      title: 'северный порт',
      description: ['real estate agency'],
      imageAlt: 'Северный порт',
    },
    {
      image: mira,
      title: 'mira',
      description: ['real estate agency'],
      imageAlt: 'Mira project',
    },
    {
      image: emaar,
      title: 'emaar',
      description: ['real estate agency'],
      imageAlt: 'Emaar project',
    },
    {
      image: airplane,
      title: 'самолеты',
      description: ['real estate agency'],
      imageAlt: 'Airplane project',
    },
  ];

  return (
    <SectionBase>
      <LabeledTitle {...sectionTitle} />
      <CaseList
        cases={mockCases}
        onSeeMoreClick={() => {
          console.log('Переход к списку всех проектов');
        }}
      />
    </SectionBase>
  );
};
