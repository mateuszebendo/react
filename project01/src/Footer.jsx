import Food from "./Food.jsx"

function Footer(){
    return (
        <footer>
            <Food/>
            <p>&copy; {new Date().getFullYear()} Briloscas</p>
        </footer>
    );
}

export default Footer