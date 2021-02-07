import './App.css';
import {Component} from "react/cjs/react.production.min";
import Vitrine from "./components/vitrine";



class App extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        isAuth: false,
    }



    render(){
        return (
            <div className="App">
                <Vitrine/>
            </div>
        );
    }
}

export default App;
