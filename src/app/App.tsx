import {
  CaseSection,
  CooperationSection,
  FAQSection,
  Footer,
  Header,
  Hero,
  HowItWorks,
  PhilosophySection,
  TeamSection,
  ViewModelSection,
  WidgetDetails,
} from '@sections';
import styles from './App.module.scss';
import { CustomMouse } from '@components';

function App() {
  return (
    <div className={styles.app}>
      <CustomMouse />
      <Header className={styles['high-priority']} />
      <Hero />
      <PhilosophySection />
      <WidgetDetails />
      <ViewModelSection />
      <CooperationSection />
      <CaseSection />
      <HowItWorks />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
