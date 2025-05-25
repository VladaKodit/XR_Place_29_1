import type { TFunction } from 'i18next';
import type { FeatureData } from '@components';

export const buildFeaturesTabData = (
  t: TFunction<'translation', undefined>,
): FeatureData[] => {
  const features = t('widgetSection.features', {
    returnObjects: true,
  }) as string[];
  const descriptions = t('widgetSection.featuresDescription', {
    returnObjects: true,
  }) as string[];

  const images = import.meta.glob<{ default: string }>(
    '../../../assets/images/widgetDetails/*.png',
    { eager: true },
  );

  const imageList = Object.keys(images)
    .sort()
    .map((key) => images[key].default);

  return [
    {
      index: 0,
      imageUrl: imageList[0],
    },
    ...features.map((name, i) => ({
      index: i + 1,
      name,
      description: descriptions[i],
      imageUrl: imageList[i + 1],
    })),
  ];
};
