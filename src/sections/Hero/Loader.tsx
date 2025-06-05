// Прелоадер, отображающий счётчик от 0 до 100%, затем сжимается в круг и «падает»
import { useEffect, useState } from 'react';
import './Loader.scss';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0); // percent — число от 0 до 100, отображаемое как загрузочный счётчик

  // запускается один раз при монтировании компонента
  useEffect(() => {
    // Создаём интервал, который увеличивает percent на 1 каждые 10 мс
    const interval = setInterval(() => {
      setPercent((prev) => {
        // Если ещё не достигли 100, увеличиваем percent
        if (prev < 100) return prev + 1;
        clearInterval(interval); // Если достигли 100 — останавливаем интервал

        // Через 400 мс запускаем анимацию сворачивания
        setTimeout(onComplete, 400);
        return prev;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader-number counter">{percent}</div>
    </div>
  );
};
