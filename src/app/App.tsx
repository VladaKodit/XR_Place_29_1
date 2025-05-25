import { SectionBase } from '../components/SectionBase/SectionBase';
import { Hero } from '../sections/Hero/hero';
import style from './App.module.scss';

function App() {
  return (
    <div>
      <SectionBase containerClassName={style.class} children={<Hero />} />
    </div>
  );
}

export default App;
