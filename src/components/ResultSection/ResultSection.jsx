import React from 'react';
import styles from './ResultSection.module.scss';

const ResultSection = (props) => {
    return (
        <section className={styles.container}>
            <div className={styles.results}>
                <div className={styles.resultPrice}>
                    <div className={styles.info}>
                        <h2>Tip amount</h2>
                        <p>/ person</p>
                    </div>
                    <div className={styles.cost}>
                        <span className={styles.priceNumber}>$0.00</span>
                    </div>
                </div>
                <div className={styles.resultPrice}>
                    <div className={styles.info}>
                        <h2>Total</h2>
                        <p>/ person</p>
                    </div>
                    <div className={styles.cost}>
                        <span className={styles.priceNumber}>$0.00</span>
                    </div>
                </div>
            </div>
            <button>RESET</button>
        </section>
    );
}

export default ResultSection;