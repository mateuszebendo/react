import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage = <h2>Bem vindo, meu cria {props.name}</h2>

    const loginPrompt = <h2>Por favor, se logue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool, 
    name: PropTypes.string
}
UserGreeting.default = {
    isLoggedIn: false, 
    name: "Desconhecido"
}

export default UserGreeting