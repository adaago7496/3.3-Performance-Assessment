import React, {Component} from "react";
import dog from "./dog.jpg";
import "../animals.css";

class Dog extends Component{
    render(){
        return(
            <div>
                <h2>Dog</h2>
                <img alt="Puppy" src={dog}/>
                <p>Here is an image of a dog that was found online.</p>
            </div>
        );
    }
}

export default Dog;