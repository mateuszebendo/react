import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button.jsx";
import Student from "./components/Student/Student.jsx"
import UserGreeting from "./components/UserGreetings/UserGreetins.jsx";

function App() {
  return(
    <>    
    <Card/>
    <br/>
    <Button/>
    <br/>
    <Student name="Pedro Luiz Steinbruck" idade={45} isStudent={true}/>
    <Student name="Arthur Freiman" idade={23} isStudent={false}/>
    <Student name="Edson Consendey" idade={65} isStudent={true}/>
    <Student/>
    <br/>
    <UserGreeting isLoggedIn={true} name="Carlos Alberto"/>
    <UserGreeting/>
    </>
  );
}

export default App
