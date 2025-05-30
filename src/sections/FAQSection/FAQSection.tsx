import { LabeledTitle } from '@components';
import { useTranslation } from 'react-i18next';
import { AccordionList } from '../../components/Accordion';
import { SectionBase } from '../../components/SectionBase/SectionBase';

interface faqItems {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const { t } = useTranslation();

  const tag = t('faqSection.label');
  const title = t('faqSection.title');
  const highlights = t('faqSection.highlights');

  const faqItems = t('faqSection.items', {
    returnObjects: true,
  }) as faqItems[];

  return (
    <SectionBase>
      {
        <>
          <LabeledTitle text={title} highlights={[highlights]} tag={tag} />
          <div>
            <AccordionList
              data={faqItems.map((item) => ({
                title: item.question,
                content: item.answer,
                isOpen: false,
                onToggle: () => {},
              }))}
            />
          </div>
        </>
      }
    </SectionBase>
  );
};
