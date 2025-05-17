import { useState } from 'react';
import { Input, CheckboxInput } from '../components/input';

function App() {
  const [phoneValue, setPhoneValue] = useState('');
  const [tgValue, setTgValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input
        type="phone"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      />
      <Input
        type="tg"
        value={tgValue}
        onChange={(e) => setTgValue(e.target.value)}
      />
      <Input
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Input
        type="name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <CheckboxInput
        description="Я принимаю условия"
        textLink={{
          url: '#',
          text: 'Политики обработки персональных данных',
        }}
      />
    </div>
  );
}

export default App;
