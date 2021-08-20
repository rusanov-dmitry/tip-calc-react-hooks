import React from 'react';
import styles from './InputPeople.module.scss';

const InputPeople = (props) => {
    return (
        <section className={styles.container}>
            <h2>Number of People</h2>
            <div className={styles.inputContainer}>
                <input type="number" id="amount" name="amount" placeholder="0" onChange={event => {props.handlePeopleChange(event.target.value)}} />
                <img src={props.icon}/>
            </div>
        </section>
    );
}

export default InputPeople;