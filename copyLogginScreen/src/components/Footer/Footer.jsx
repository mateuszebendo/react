import React, { useEffect, useState } from 'react';
import Input from '../Inputs/Input.jsx';
import riotLogo from '../../assets/riotGames.png';
import styles from './Footer.module.css';
import Audio from '../Audio/Audio.jsx';

export default function Footer(props){
    const [audio, setAudio] = useState(true);

    function habilitaAudio(){
        setAudio(!audio);
    }

    return(
        <footer className={styles.footer}>
            <img alt="Logo da Riot Games" src={riotLogo} className={styles.logo}/>
            <section className={styles.checks}>
            <a href="https://www.riotgames.com/pt-br/terms-of-service-BR" target="_blank">Termos de uso</a>
            <Input name="Desligar música" type="checkbox" onClick={() => habilitaAudio()}/>
            <Audio muted={!audio}/>
            <Input name="Desligar animação de fundo" type="checkbox" onClick={props.onClick}/>
            </section>
        </footer>
    );
}