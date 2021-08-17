import React from 'react';
import styles from './InputField.module.scss';

const InputField = (props) => {
    return (
        <section className={styles.container}>
            <h2>{props.title}</h2>
            <div className={styles.inputContainer}>
                <input type="number" id={props.id} name={props.id} placeholder="0" />
                <img src={props.icon}/>
            </div>
        </section>
    );
}

export default InputField;