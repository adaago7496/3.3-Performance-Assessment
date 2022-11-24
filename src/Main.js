import React, {Component} from "react";
import {
    Route, Routes,
    NavLink, HashRouter
} from "react-router-dom";
import Home from "./components/Pages/Home";
import Frog from "./components/Pages/Frog/Frog";
import Dog from "./components/Pages/Dog/Dog";
import Lizard from "./components/Pages/Lizard/Lizard";

class Main extends Component{
    render(){
        return(
            <HashRouter>
              <div>
                    <h1>Animals</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/components/Pages/Frog/Frog">Frog</NavLink></li>
                        <li><NavLink to="/components/Pages/Dog/Dog">Dog</NavLink></li>
                        <li><NavLink to="/components/Pages/Lizard/Lizard">Lizard</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/components/Pages/Frog/Frog" element={<Frog />} />
                        <Route path="/components/Pages/Dog/Dog" element={<Dog/>}/>
                        <Route path="/components/Pages/Lizard/Lizard" element={<Lizard/>}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;