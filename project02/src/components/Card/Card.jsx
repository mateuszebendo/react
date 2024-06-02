import styles from "./Card.module.css"

function Card(){
    return (
        <figure className={styles.card}>
            <img alt="Nosso amigo Lorax" src="https://64.media.tumblr.com/c9b0b2d86e8fc8811841de0814ef5d8b/tumblr_pfwbjcgDzW1xheyrqo1_500.png"/>
            <h1>Lorax</h1>
            <p>Eu sou o Lorax, eu falo pelas árvores, e por algum motivo elas estão falando vietnamita</p>
        </figure>
    );
}

export default Card