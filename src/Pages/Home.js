import React, { Component } from "react";
import Header from './Components/Header';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <h1>This is the home component</h1>
            </div>
        );
    }
}

export default Home
