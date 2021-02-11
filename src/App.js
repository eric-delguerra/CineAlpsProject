import './App.css';
import { useState } from "react";
import Vitrine from "./components/vitrine";
import LoginForm from "./components/Login";
import SignInForm from "./components/signIn";
import Home from "./components/Home/Home";


function App() {

    const [isAuth, setIsAuth] = useState(false)


    return (
        <div className="App">
            <Home/>
        </div>
    );

}

export default App;
