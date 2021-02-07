import './App.css';
import {useState} from "react";
import Vitrine from "./components/vitrine";
import LoginForm from "./components/login";
import SignInForm from "./components/signIn";
import routes from "./routes/routes";


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
