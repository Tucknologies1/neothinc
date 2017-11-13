import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import QuestionAndAnswer from './Components/QuestionAndAnswer';
class Faq extends React.Component {
    render() {
        return (
            <div>
                <div className="yellowHeader">
                </div>
                {/* NOTE: THIS IS WHERE THE SUBHEADER GOES */}
                <div className="headerBanner">
                </div>
                <div className="questionAndAnswerContainer">
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                </div>
            </div>
        );
    }
}

export default Faq