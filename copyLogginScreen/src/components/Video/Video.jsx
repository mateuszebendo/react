import React, { useEffect, useState } from 'react';
import style from './Video.module.css';

export default function Video(){
    return(
        <video autoplay muted loop id="background-video" className={style.video}>
            <source src="../assets/video.mp3" type="video/mp4"/>
        </video>
    );
}