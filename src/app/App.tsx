import { useEffect, useRef, useState } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.app}>
      <CustomMouse />
      {isHeroVisible && <Header className={styles.stickyHeader} />}
      <div ref={heroRef}>
        <Hero />
      </div>
      <PhilosophySection id="philosophy" />
      <WidgetDetails id="features" />
      <ViewModelSection />
      <CooperationSection />
      <CaseSection />
      <HowItWorks id="howItWorks" />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
