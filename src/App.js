import './App.css';
import { useState } from "react";
import Vitrine from "./components/vitrine";
import LoginForm from "./components/Login";
import SignInForm from "./components/signIn";


function App() {

    const [isAuth, setIsAuth] = useState(false)


    return (
        <div className="App">
            {isAuth ? <LoginForm/> : <Vitrine/>}
            {/*<SignInForm/>*/}
        </div>
    );

}

export default App;
