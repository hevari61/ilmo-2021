import React, { Component } from "react";

const url = "https://api.guildwars2.com/v2/pets/33";
const wikiUrl = "https://wiki.guildwars2.com/wiki/";

export default class Json extends Component {
    state = {
        loading: true,
        pet: false,
    };

    async componentDidMount (){
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pet: data, loading: false})
    }

    render() {
        return(
        <div className="pyorat-kortti">
            {this.state.loading || !this.state.pet ? (
                <div>Loading...</div>
            ) : (
            <div className="pyorat h1">
                <h1>{this.state.pet.name}</h1> 
                <img src={this.state.pet.icon} alt={this.state.pet.name}  />
                <div>{this.state.pet.description}</div>
                <div>{this.petAdr}</div>
                <p><a className="button1" href={wikiUrl + this.state.pet.name.replace(/\s+/g, '_')} target="_blank" rel="noreferrer">Go to Wiki</a></p>
                
                </div>)}
        </div>
    );
            }
}