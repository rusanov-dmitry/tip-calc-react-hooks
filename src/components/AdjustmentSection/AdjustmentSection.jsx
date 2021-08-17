import React from 'react';
import styles from './AdjustmentSection.module.scss';
import dollarIcon from '../../assets/dollar-icon.svg';
import humanIcon from '../../assets/human-icon.svg';
import InputField from '../InputField/InputField';
import TipOptions from '../TipOptions/TipOptions';

const AdjustmentSection = () => {
  return (
      <main className={styles.container}>
          <InputField id="bill" title="Bill" icon={dollarIcon} />
          <TipOptions />
          <InputField id="amount" title="Number of People" icon={humanIcon} />
      </main>
  );
}

export default AdjustmentSection;
