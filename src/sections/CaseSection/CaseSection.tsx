import React from 'react';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components/LabeledTitle';
import { CaseList } from '../../components/CaseList';
//import styles from './CaseSection.module.scss';
import type { CaseListProps } from '../../components/CaseList/type.ts';

/**
 * Компонент секции с кейсами.
 *
 * Отображает заголовок с пометкой и список кейсов.
 * Использует обертку SectionBase для общей стилизации секции.
 *
 * @param {CaseListProps} props:
 *   - cases: Массив объектов с данными для кейсов.
 *   - onSeeMoreClick: Функция-обработчик клика по ссылке "Смотреть все проекты".
 *
 * @returns {JSX.Element} JSX-разметка секции с заголовком и списком кейсов.
 */

export const CaseSection: React.FC<CaseListProps> = ({
  cases,
  onSeeMoreClick,
}) => {
  const sectionTitle = {
    text: 'реализованные проекты',
    tag: 'сотрудничество',
    highlights: ['проекты'],
  };

  return (
    <SectionBase>
      <LabeledTitle {...sectionTitle} />
      <CaseList cases={cases} onSeeMoreClick={onSeeMoreClick} />
    </SectionBase>
  );
};
