import React, {useEffect, useState} from 'react';
import styles from './ResultSection.module.scss';

const ResultSection = (props) => {
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    function calculateTipAmountAndTotal() {
        let calculatedTipAmount = props.state.bill / 100 * props.state.tipPercent / props.state.numberOfPeople;
        setTipAmount(calculatedTipAmount.toFixed(2));
        let calculatedTotal = props.state.bill / props.state.numberOfPeople + calculatedTipAmount;
        setTotal(calculatedTotal.toFixed(2));
    }

    useEffect(() => {
        if (props.state.bill !== 0 && props.state.tipPercent !== 0 && props.state.numberOfPeople !== 0) {
            calculateTipAmountAndTotal();
        }
    });

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
            <button>RESET</button>
        </section>
    );
}

export default ResultSection;