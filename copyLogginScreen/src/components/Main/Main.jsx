import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Input from '../Inputs/Input.jsx';
import Button from '../Button/Button.jsx';
import Links from '../Links/Links.jsx';

export default function Main(){
    const [user, setUser] = useState("Desconhecido");
    const [password, setPassword] = useState("Desconhecida");
    const [check, setCheck] = useState(false);
    const [verificaUsuario, setVerificaUsuario] = useState(true);
    const [dadosInseridos, setDadosInseridos] = useState(0);
    const usuariosRegistrados = [
        { user: "AlbertoGamer", password: "jonas1212" },
        { user: "KhezacApelao0909", password: "apelao1212" }
    ];

    function lembrarUsuario(){
        setCheck(!check);
    }

    function entraDados(){
        setDadosInseridos(dadosInseridos+1);
    }

    useEffect(() => {
        console.log(check);
        const usuarioEncontrado = usuariosRegistrados.find((usuario) => usuario.user === user && usuario.password === password);
        if(usuarioEncontrado !== undefined) {
            alert("Usuário logado com sucesso");
            setVerificaUsuario(true);
        } else if(dadosInseridos > 0) {
           setVerificaUsuario(false);
        }
    }, [dadosInseridos]);
    
    return(
        <section className={styles.main}>
            <h2>Login de Conta</h2>
            <div  className={styles.linha}></div>
            <Input name="Nome de Usuário" type="text"
            onChange={(event) => setUser(event.target.value)} isCorrect = {verificaUsuario}/>
            <Input name="Senha" type="password"
            onChange={(event) => setPassword(event.target.value)} isCorrect = {verificaUsuario}/>
            <div className={styles.login}>
            <Input name="Lembrar usuário" type="checkbox"
            onClick={() => setCheck(lembrarUsuario)}/>
            <Button name="Entrar" onClick={entraDados}/>
            </div>
            <div  className={styles.linha}></div>
            <Links />
        </section>
    );
}
