import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import TeamSection from '../sections/TeamSection/TeamSection';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <TeamSection />
      </div>
    </I18nextProvider>
  );
}

export default App;
