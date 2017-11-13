import React, {Component} from "react";
import { Container } from 'semantic-ui-react';

class QuestionAndAnswer extends React.Component {
    render(){
        return(
            <div className="questionAndAnswer">
                <div className="qaCard">
                    Q: 
                    <br/>
                    A:
                </div>
            </div>
        );
    }
}
export default QuestionAndAnswer