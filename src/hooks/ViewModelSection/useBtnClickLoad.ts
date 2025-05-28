import { useState } from 'react';

export const useBtnClickLoad = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showScale, setShowScale] = useState(false);

  const handleButtonClick = () => {
    if (!showScale) {
      setIsLoading(true);
      setShowScale(true);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    showScale,
    handleButtonClick,
  };
};
