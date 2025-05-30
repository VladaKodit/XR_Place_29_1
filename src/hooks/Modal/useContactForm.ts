import { useState } from 'react';
import type { TContactFormHook } from '@types';

// хук для хранения данных контактной формы
export const useContactForm: () => TContactFormHook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tg, setTg] = useState('');
  const [email, setEmail] = useState('');

  // очищение полей формы
  const clear = () => {
    setName('');
    setTg('');
    setEmail('');
    setPhone('');
  };

  return {
    phone,
    tg,
    email,
    name,
    setPhone,
    setTg,
    setEmail,
    setName,
    clear,
  };
};
