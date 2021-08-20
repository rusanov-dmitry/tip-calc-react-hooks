import React from 'react';
import styles from './InputBill.module.scss';

const InputBill = (props) => {
    return (
        <section className={styles.container}>
            <h2>Bill</h2>
            <div className={styles.inputContainer}>
                <input type="number" id="bill" name="bill" placeholder="0" onChange={event => {props.handleBillChange(event.target.value)}} />
                <img src={props.icon}/>
            </div>
        </section>
    );
}

export default InputBill;