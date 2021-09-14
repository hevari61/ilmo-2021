import React, { Component } from "react";

const url = "https://api.guildwars2.com/v2/pets/33";
export default class Json extends Component {
    state = {
        loading: true,
        pet: null,
    };

    async componentDidMount (){
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pet: data, loading: false})
    }

    render() {
        return(
        <div>
            {this.state.loading || this.state.pet ? (
                <div>Loading...</div>
            ) : (<div>Pet</div>)}
        </div>
    );
            }
}