import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import QuestionAndAnswer from './Components/QuestionAndAnswer';
import SubHeader from './Components/SubHeader.js';

class Faq extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
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
