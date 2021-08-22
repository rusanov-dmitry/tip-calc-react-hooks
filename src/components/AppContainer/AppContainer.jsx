import React, { useState } from 'react';
import styles from './AppContainer.module.scss';
import AdjustmentSection from '../AdjustmentSection/AdjustmentSection';
import ResultSection from '../ResultSection/ResultSection';
import logo from '../../assets/logo.svg';

const AppContainer = () => {
    const [state, setState] = useState({
        bill: 0,
        tipPercent: 0,
        numberOfPeople: 0
    });

    function handleBillChange(bill) {
        let parsedBill = parseFloat(bill);
        if (isNaN(parsedBill)) parsedBill = 0;
        setState({...state, bill: parsedBill});
    }

    function handleTipChange(tip) {
        let parsedTip = parseInt(tip);
        setState({...state, tipPercent: parsedTip});
    }

    function handlePeopleChange(numOfPeople) {
        let parsedNumOfPeople = parseInt(numOfPeople);
        if (isNaN(parsedNumOfPeople)) parsedNumOfPeople = 0;
        setState({...state, numberOfPeople: parsedNumOfPeople});
    }

    function resetAll() {
        setState({
            bill: 0,
            tipPercent: 0,
            numberOfPeople: 0
        });
    }

    return (
        <div className={styles.appWrapper}>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <div className={styles.container}>
                <AdjustmentSection state={state}
                                   handleBillChange={handleBillChange}
                                   handleTipChange={handleTipChange}
                                   handlePeopleChange={handlePeopleChange} />
                <ResultSection state={state} resetAll={resetAll} />
            </div>
        </div>
  );
}

export default AppContainer;
