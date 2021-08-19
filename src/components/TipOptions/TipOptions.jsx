import React, {useEffect, useState} from 'react';
import styles from './TipOptions.module.scss';

const TipOptions = (props) => {
    const [tipPercent, setTipPercent] = useState(0);
    useEffect(() => {
        console.log(tipPercent);
    });

    return (
        <section className={styles.container}>
                <h2>Select Tip %</h2>
                <div className={styles.gridButtons}>
                        <div className={styles.button}>
                                <input type="radio" id="5" name="tip-percent" value="5" onChange={event => {setTipPercent(event.target.value)}} />
                                <label htmlFor="5">5%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="10" name="tip-percent" value="10" onChange={event => {setTipPercent(event.target.value)}}/>
                                <label htmlFor="10">10%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="15" name="tip-percent" value="15" onChange={event => {setTipPercent(event.target.value)}}/>
                                <label htmlFor="15">15%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="20" name="tip-percent" value="20" onChange={event => {setTipPercent(event.target.value)}}/>
                                <label htmlFor="20">20%</label>
                        </div>
                        <div className={styles.button}>
                                <input type="radio" id="25" name="tip-percent" value="25" onChange={event => {setTipPercent(event.target.value)}}/>
                                <label htmlFor="25">25%</label>
                        </div>
                        <div className={styles.button}>
                            <input type="radio" id="50" name="tip-percent" value="50" onChange={event => {setTipPercent(event.target.value)}}/>
                            <label htmlFor="50">50%</label>
                        </div>
                </div>
        </section>

    );
}

export default TipOptions;