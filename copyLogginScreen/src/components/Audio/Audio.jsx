import React from 'react';
import music from '../../assets/musica.mp3';

export default function Audio(props){
    return(
        <audio autoPlay muted={props.muted} loop>
        <source alt="Seu navegador é ruim" src={music} type="audio/mpeg"/>
        </audio>
    );
}