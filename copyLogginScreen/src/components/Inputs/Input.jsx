import React, { useState } from 'react'; 
import styles from './Input.module.css';

export default function Input(props) {
    if(props.type != "checkbox"){
    return(
        <section className={styles.input}>
        <div className={styles.label}>
        <label htmlFor="input">{props.name}</label>{!props.isCorrect && <p>({props.name} incorreto!)</p>}
        </div>
        <input id="input" type={props.type} onChange={props.onChange}/>
        </section>
    );}
    else 
    return(
        <section>
        <label htmlFor="input">{props.name}</label>
        <input id="input" type={props.type} onClick={props.onClick}/>
        </section>
    );
}