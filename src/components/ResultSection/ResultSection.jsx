import React, {useEffect, useState} from 'react';
import styles from './ResultSection.module.scss';

const ResultSection = (props) => {
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (props.state.bill !== 0 && props.state.tipPercent !== 0 && props.state.numberOfPeople !== 0) {
            let calculatedTipAmount = props.state.bill / 100 * props.state.tipPercent / props.state.numberOfPeople;
            let calculatedTotal = props.state.bill / props.state.numberOfPeople + calculatedTipAmount;
            setTipAmount(calculatedTipAmount.toFixed(2));
            setTotal(calculatedTotal.toFixed(2));
        } else {
            let defaultTipAmount = 0;
            let defaultTotal = 0;
            setTipAmount(defaultTipAmount.toFixed(2));
            setTotal(defaultTotal.toFixed(2));
        }
    }, [props.state.bill, props.state.tipPercent, props.state.numberOfPeople]);

    return (
        <section className={styles.container}>
            <div className={styles.results}>
                <div className={styles.resultPrice}>
                    <div className={styles.info}>
                        <h2>Tip amount</h2>
                        <p>/ person</p>
                    </div>
                    <div className={styles.cost}>
                        <span className={styles.priceNumber}>${tipAmount}</span>
                    </div>
                </div>
                <div className={styles.resultPrice}>
                    <div className={styles.info}>
                        <h2>Total</h2>
                        <p>/ person</p>
                    </div>
                    <div className={styles.cost}>
                        <span className={styles.priceNumber}>${total}</span>
                    </div>
                </div>
            </div>
            <button onClick={props.resetAll}>RESET</button>
        </section>
    );
}

export default ResultSection;