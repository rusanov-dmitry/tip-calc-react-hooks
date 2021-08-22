import React from 'react';
import styles from './InputPeople.module.scss';

const InputPeople = (props) => {
    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    let num = 0;
    if (props.numberOfPeople === 0) {
        num = '';
    } else {
        num = props.numberOfPeople;
    }

    return (
        <section className={styles.container}>
            <h2>Number of People</h2>
            <div className={styles.inputContainer}>
                <input type="text" pattern="[0-9]" id="amount" name="amount" placeholder="0" value={num}
                       onChange={event => {props.handlePeopleChange(event.target.value)}}
                       onKeyDown={blockInvalidChar} />
                <img src={props.icon} alt="people"/>
            </div>
        </section>
    );
}

export default InputPeople;