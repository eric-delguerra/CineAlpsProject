import {Component} from "react/cjs/react.production.min";

class Vitrine extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="ui stackable menu">
                    <div className="item">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/4/42/Logo_Ville_Grenoble.svg"/>
                    </div>
                    <a className="item">Features</a>
                    <a className="item">Testimonials</a>
                    <div className="right menu">
                        <a className="item">Sign-in</a>
                    </div>
                </div>

                <div className="ui container">

                    <div className="ui items">
                        <div className="item">
                            <div className="image"><img
                                src="https://upload.wikimedia.org/wikipedia/fr/4/42/Logo_Ville_Grenoble.svg"/></div>
                            <div className="content">
                                <div className="header">Header</div>
                                <div className="meta">Metadata</div>
                                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Dolorum unde velit voluptate. Accusamus blanditiis cum doloribus, id, laborum magnam
                                    natus nulla officiis pariatur perspiciatis quas quasi quo rem soluta voluptate?
                                </div>
                                <div className="extra">Extra</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"><img
                                src="https://upload.wikimedia.org/wikipedia/fr/4/42/Logo_Ville_Grenoble.svg"/></div>
                            <div className="content">
                                <div className="header">Header</div>
                                <div className="meta">Metadata</div>
                                <div className="description">Description</div>
                                <div className="extra">Extra</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Vitrine;
