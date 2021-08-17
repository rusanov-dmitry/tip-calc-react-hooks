import React from 'react';
import styles from './TipOptions.module.scss';

const TipOptions = (props) => {
    return (
        <section className={styles.container}>
                <h2>Select Tip %</h2>
                <div className={styles.gridButtons}>
                        <div className={styles.button}>
                                <input type="radio" id="5" name="tip-percent" />
                                <label htmlFor="5">5%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="10" name="tip-percent"/>
                                <label htmlFor="10">10%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="15" name="tip-percent"/>
                                <label htmlFor="15">15%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="25" name="tip-percent"/>
                                <label htmlFor="25">25%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="50" name="tip-percent"/>
                                <label htmlFor="50">50%</label>
                        </div>
                        <div className={styles.buttonInput}>
                                <input type="number" id="custom" name="custom-percent" placeholder="Custom"/>
                        </div>
                </div>
        </section>

    );
}

export default TipOptions;