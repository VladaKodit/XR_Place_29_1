import React from 'react';
import { useTranslation } from 'react-i18next';

import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components/LabeledTitle';
import CaseList from '../../components/Case/CaseList';
import type { CaseProps } from '../../components/Case/types.ts';

import mira from '../../assets/images/CaseSection/picture-mira.png';
import emaar from '../../assets/images/CaseSection/picture-emaar.png';
//import northport from '../../assets/images/CaseSection/picture-northport.png';
import airplane from '../../assets/images/CaseSection/picture-airplane.png';
import styles from './CaseSection.module.scss';

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
  const { t } = useTranslation();

  const mockCases: CaseProps[] = [
    {
      image: emaar,
      title: t('projectsSection.projects.0.title'),
      description: [t('projectsSection.projects.0.description')],
      imageAlt: t('projectsSection.projects.0.title') + ' проект',
    },
    {
      image: mira,
      title: t('projectsSection.projects.1.title'),
      description: [t('projectsSection.projects.1.description')],
      imageAlt: t('projectsSection.projects.1.title') + ' проект',
    },
    {
      image: airplane,
      title: t('projectsSection.projects.2.title'),
      description: [t('projectsSection.projects.2.description')],
      imageAlt: t('projectsSection.projects.2.title') + ' проект',
    },
    //{
    //image: northport,
    // title: t('projectsSection.projects.3.title'),
    // description: [t('projectsSection.projects.3.description')],
    // imageAlt: t('projectsSection.projects.3.title') + ' проект',
    //},
  ];

  return (
    <SectionBase containerClassName={styles['custom-paddings']}>
      <LabeledTitle
        tag={t('projectsSection.label')}
        text={t('projectsSection.title')}
        highlights={
          t('projectsSection.highlights', { returnObjects: true }) as string[]
        }
      />
      <CaseList
        cases={mockCases}
        onSeeMoreClick={() => {
          console.log('Переход к списку всех проектов');
        }}
        seeAllText={t('projectsSection.seeAll')}
      />
    </SectionBase>
  );
};
