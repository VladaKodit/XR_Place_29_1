// import React from 'react'
import { CooperationCard } from '@components';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '@components';
import { useTranslation } from 'react-i18next';
import styles from './CooperationSection.module.scss';
import type { TСooperationCardProps } from '../../components/CooperationCard/type';

import IconDefault1 from '../../assets/images/cooperationImage1.svg?react';
import IconDefault2 from '../../assets/images/cooperationImage2.svg?react';
import IconDefault3 from '../../assets/images/cooperationImage3.svg?react';
import IconDefault4 from '../../assets/images/cooperationImage4.svg?react';
import IconDefault5 from '../../assets/images/cooperationImage5.svg?react';
import IconDefault6 from '../../assets/images/cooperationImage6.svg?react';

const iconArray = [
  IconDefault1,
  IconDefault2,
  IconDefault3,
  IconDefault4,
  IconDefault5,
  IconDefault6,
];

export const CooperationSection = () => {
  const { t } = useTranslation();

  // Извлекаем текст секции
  const text = t('cooperationSection.title');
  const highlights = t('cooperationSection.highlights');
  const tag = t('cooperationSection.label');
  const description = t('cooperationSection.description');

  // Извлекаем текст карточки, создаём из него массив объектов с данными, добавляем alt и ссылки на свг
  const textCard = t('cooperationSection.cards', {
    returnObjects: true,
  }) as Array<TСooperationCardProps>;

  const dataCards = textCard.map((item, index) => ({
    title: item.title,
    description: item.description,
    value: item.value,
    classCard: 'card',
    icon: iconArray[index],
  }));

  return (
    <SectionBase>
      {
        <>
          <LabeledTitle text={text} highlights={[highlights]} tag={tag} />

          <div className={styles.content}>
            <p className={styles.content__text}>{description}</p>
          </div>

          <div className={styles.list}>
            {dataCards.map((item, index) => (
              <CooperationCard
                key={index}
                title={item.title}
                description={item.description}
                value={item.value}
                icon={item.icon}
                classCard={styles[`${item.classCard + `${index + 1}`}`]}
              />
            ))}
          </div>
        </>
      }
    </SectionBase>
  );
};
