import React from 'react';

export default function Footer(props){
    return(
        <footer>
            <p>Não tem uma conta? <a href="https://authenticate.riotgames.com/?client_id=prod-xsso-riotgames&code_challenge=vRo5INfmICrbefxJpTyV07Zi634Kmb6XImnfgIUuvMc&locale=pt_BR&method=riot_identity_signup&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-riotgames%26code_challenge%3DvRo5INfmICrbefxJpTyV07Zi634Kmb6XImnfgIUuvMc%26code_challenge_method%3DS256%26prompt%3Dsignup%26redirect_uri%3Dhttps%253A%252F%252Fxsso.riotgames.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%26state%3Dd0c606a6b9baa24274ce12d0f5%26ui_locales%3Dpt-BR" target="_blank">Crie uma agora!</a></p>
            <p>Esqueceu seu <a href="https://recovery.riotgames.com/pt-BR/forgot-username" target="_blank">usuário?</a></p>
            <p>Esqueceu sua <a href="https://recovery.riotgames.com/pt-BR/forgot-password" target="_blank">senha?</a></p>
        </footer>
    );
}