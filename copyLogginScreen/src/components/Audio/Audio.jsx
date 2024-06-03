import React from 'react';
import music from '../../assets/musica.mp3';

export default function Audio(){
    return(
        <audio autoPlay loop>
        <source alt="Seu navegador é ruim" src={music} type="audio/mpeg"/>
        </audio>
    );
}