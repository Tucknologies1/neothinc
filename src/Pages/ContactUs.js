import React, { Component } from "react";
import SubHeader from './Components/SubHeader.js';
class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className="contactInformation">
                    <div className="left">
                        <h1>Email </h1>
                        <h2>THiNC@THiNC.com</h2>
                        <h1>Phone </h1>
                        <h2>5179031239</h2>
                    </div>
                    <div className="right">
                        <h1>Address</h1>
                        <h2>Enter Address here</h2>
                        <h1>Message Us</h1>
                        <h2>Form Component here</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact
