import React from 'react';
import styles from './InputBill.module.scss';

const InputBill = (props) => {
    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    return (
        <section className={styles.container}>
            <h2>Bill</h2>
            <div className={styles.inputContainer}>
                <input type="number" id="bill" name="bill" placeholder="0"
                       onChange={event => {props.handleBillChange(event.target.value)}}
                       onKeyDown={blockInvalidChar}/>
                <img src={props.icon}/>
            </div>
        </section>
    );
}

export default InputBill;