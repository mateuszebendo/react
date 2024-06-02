import styles from "./Button.module.css"

function Button(){

     const handleCick = () => console.log("OUCH!");

    const handleCick2 = (name) => console.log(`${name} stop clicking me`);
    
    return(
        <button className={styles.botao} onClick={() => handleCick2("Bro")}>Clica nimin</button>
    );
}

export default Button