import styles from './App.module.scss';

import { CustomMouse } from '@components';

function App() {
  return (
    <div className={styles.app}>
      <CustomMouse />
    </div>
  );
}

export default App;
