import styles from "./Student.module.css";
import PropTypes from "prop-types";

function Student(props){
    return(
        <div className={styles.student}>
        <p>
        Nome do Condenado: {props.name}
        </p>
        <p>
        Idade: {props.idade}
        </p>
        <p>
        É estudante: {props.isStudent ? "Sim" : "Não"}    
        </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    idade: PropTypes.number, 
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Desconhecido", 
    idade: 0, 
    isStudent: false
}

export default Student;