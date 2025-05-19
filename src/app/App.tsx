// function App() {
//   return <div></div>;
// }

// export default App;

import { CooperationCard } from '../components/cooperation/cooperation';
import iconDefault from '../assets/images/cooperationDefault1.svg';
import iconHover from '../assets/images/cooperationHover1.svg';

console.log(iconDefault);

function App() {
  return (
    <div>
      <CooperationCard
        title="повышение конверсии в сайт"
        iconDefault={iconDefault}
        iconHover={iconHover}
        alt="sdf"
        number={18}
        content="Средняя конверсия в звонок при подключении нашего виджета на сайт"
      />
    </div>
  );
}

export default App;
