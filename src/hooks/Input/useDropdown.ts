import { useState, useRef, useEffect } from 'react';

// хук дропа селектора для выбора номера страны
export const useDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ловим клики вне области дропдауна
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // переключатель состояния с гарантией актуального предыдущего значения
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return {
    isDropdownOpen,
    setDropdownOpen,
    dropdownRef,
    toggleDropdown,
  };
};
