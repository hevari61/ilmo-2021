import React, { Component } from "react";
import AddTarina from "./AddTarina";
import TarinaLista from "./TarinaLista";

const tarinatData = ["Listan juttu 1" , "Listan juttu 2" , "Listan juttu 3" , "Listan juttu 4" , "Listan juttu 5"];


class Tarinat extends Component {
    state = {
        tarinat: tarinatData,

    };

    onAddTarina(uusiTarina) {
        this.setState({tarinat: [...this.state.tarinat, uusiTarina]});
    };

    onRemoveFromList(poistettavaindex) {
        this.setState ({
            tarinat: this.state.tarinat.tarinat.filter(
                (tarina, index) => index !== poistettavaIndex),   });

            }            
    

    render() {
        const {tarinat} = this.state;
        return (
            <div>
                <h2>Tarina</h2>
                <p>Tähämpä siutten voi säveltää omaa juttuaan ja sivun siältöä</p>
                <AddTarina onAddTarina={(uusiTarina) => this.onAddTarina(uusiTarina)} />
                <TarinaLista tarinat={tarinat} onRemoveFromList={(index) = this.onRemoveFromList(index)} />
                
            </div>
        );
    }
}

export default Tarinat;