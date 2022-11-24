import React, {Component} from "react";
import frog from "./frog.jpg";
import "../animals.css";

class Frog extends Component{
    render(){
        return(
            <div>
                <h2>Frog</h2>
                <img alt="Frog" src={frog}/>
                <p>This is the frog page, just a page with a frog.</p>
            </div>
        );
    }
}

export default Frog;