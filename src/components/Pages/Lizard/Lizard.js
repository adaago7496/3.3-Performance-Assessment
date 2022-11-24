import React, {Component} from "react";
import lizard from "./lizard.jpg";
import "../animals.css";

class Lizard extends Component{
    render(){
        return (
            <div>
                <h2>Lizard</h2>
                <img alt="Bearded Dragon" src={lizard}/>
                <p>Lizards are one of my favorite animals so I included an image of one.</p>
            </div>
        );
    }
}

export default Lizard;