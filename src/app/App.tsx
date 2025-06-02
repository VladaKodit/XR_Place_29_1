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

function App() {
  return (
    <div className={styles.app}>
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
