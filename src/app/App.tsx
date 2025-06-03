import { LanguageSwitcher } from '../components/languageSwitcher';
import { HowItWorks } from '../sections/HowItWorksSection/HowItWorks';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <LanguageSwitcher />
      <HowItWorks />
    </div>
  );
}

export default App;
