import React from 'react';
import styles from './AppContainer.module.scss';
import AdjustmentSection from '../AdjustmentSection/AdjustmentSection';
import ResultSection from '../ResultSection/ResultSection';

const AppContainer = () => {
  return (
      <div className={styles.container}>
        <AdjustmentSection />
        <ResultSection />
      </div>
  );
}

export default AppContainer;
