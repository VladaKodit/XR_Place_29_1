import { useEffect, useRef } from 'react';

export const useKeyboardControls = (onExit: () => void) => {
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit();

      // TODO: вынести в хелпер
      if (e.key.toLowerCase() === 'w') keys.current.w = true;
      if (e.key.toLowerCase() === 'a') keys.current.a = true;
      if (e.key.toLowerCase() === 's') keys.current.s = true;
      if (e.key.toLowerCase() === 'd') keys.current.d = true;

      // TODO: вынести в хелпер
      if (e.key.toLowerCase() === 'ц') keys.current.w = true;
      if (e.key.toLowerCase() === 'ф') keys.current.a = true;
      if (e.key.toLowerCase() === 'ы') keys.current.s = true;
      if (e.key.toLowerCase() === 'в') keys.current.d = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // TODO: вынести в хелпер
      if (e.key.toLowerCase() === 'w') keys.current.w = false;
      if (e.key.toLowerCase() === 'a') keys.current.a = false;
      if (e.key.toLowerCase() === 's') keys.current.s = false;
      if (e.key.toLowerCase() === 'd') keys.current.d = false;

      // TODO: вынести в хелпер
      if (e.key.toLowerCase() === 'ц') keys.current.w = false;
      if (e.key.toLowerCase() === 'ф') keys.current.a = false;
      if (e.key.toLowerCase() === 'ы') keys.current.s = false;
      if (e.key.toLowerCase() === 'в') keys.current.d = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onExit]);

  return keys;
};
