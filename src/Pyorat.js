import React, { Component } from "react";
import data from "./data.json";

class Pyorat extends Component {
    render() {
        return (
            <div className="pyorat">
                <h2>Maastopyörät</h2>
                {
                    data.Pyorat.map((pyora) => {
                        return (
                            <div key={pyora.id}>
                                <div className="pyorat-kortti">
                                <h1>{pyora.name}</h1>
                                <img src={pyora.icon} alt={pyora.name}></img>
                                <p>{pyora.description}</p>
                                <a href={pyora.url} className="button1" target="_blank" rel="noreferrer">Tutustu</a>
                            </div></div>

                        );
                    })
                }
            </div>
        );

    }
}
export default Pyorat;
