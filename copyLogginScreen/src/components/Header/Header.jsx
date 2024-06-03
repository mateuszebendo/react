import React from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
            <a href="https://www.leagueoflegends.com/pt-br/" target="_blank">
            <img alt="Logo League of Legends" src={logo}/>
            </a>
        </header>
    );
}