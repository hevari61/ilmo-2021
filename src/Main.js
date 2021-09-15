import React, { Component } from "react";
import data from "./data.json";
import {
  Route,
  NavLink,
  HashRouter
} 
from "react-router-dom";

import Koti from "./Koti";

import Tulokset from "./Tulokset";

import Yhteys from "./Yhteys";
import Pyorat from "./Pyorat";
import Api from "./Api";
// import Tarinat from "./Tarinat";


 

class Main extends Component {

    render() {

      return (

        <HashRouter>

          <div>

            <h1>Puulaaki 2021-2022</h1>

            <ul className="header">

              <li><NavLink exact to="/">Koti</NavLink></li>

              <li><NavLink to="/tulokset">Tuloksia</NavLink></li>

              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
              <li><NavLink to="/pyorat">Pyörät</NavLink></li>
              <li><NavLink to="/api">Api</NavLink></li>
              <li><NavLink to="/tarinat">Tarinat</NavLink></li>
            </ul>

            <div className="content">

              <Route exact path="/" component={Koti}/>

              <Route path="/tulokset" component={Tulokset}/>

              <Route path="/yhteys" component={Yhteys}/>
              <Route path="/pyorat" component={Pyorat}/>
              <Route path="/api" component={Api}/>
              
            </div>

          </div>

        </HashRouter>

      );

    }

  }

 

export default Main;