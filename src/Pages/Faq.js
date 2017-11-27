import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import QuestionAndAnswer from './Components/QuestionAndAnswer';
import SubHeader from './Components/SubHeader.js';
import Footer from './Components/Footer';
class Faq extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
               <div className="headerBanner">
                    <div>
                        <h1 id="bannerFont">Q&A</h1>
                    </div>
                </div>
                <div className="questionAndAnswerContainer">
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                    <QuestionAndAnswer/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Faq
