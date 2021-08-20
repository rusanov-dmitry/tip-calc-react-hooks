import React from 'react';
import styles from './AdjustmentSection.module.scss';
import dollarIcon from '../../assets/dollar-icon.svg';
import humanIcon from '../../assets/human-icon.svg';
import InputBill from '../InputBill/InputBill';
import TipOptions from '../TipOptions/TipOptions';
import InputPeople from '../InputPeople/InputPeople';

const AdjustmentSection = ({state, handleBillChange, handleTipChange, handlePeopleChange}) => {
    return (
      <main className={styles.container}>
          <InputBill icon={dollarIcon} handleBillChange={handleBillChange} bill={state.bill} />
          <TipOptions handleTipChange={handleTipChange} />
          <InputPeople icon={humanIcon} handlePeopleChange={handlePeopleChange} numberOfPeople={state.numberOfPeople} />
      </main>
  );
}

export default AdjustmentSection;
