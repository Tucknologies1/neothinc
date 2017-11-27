import React, {Component} from "react";
import { Container, Reveal} from 'semantic-ui-react';


class QuestionAndAnswer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="revealContainer">
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <div className="questionVisible qaCard">
                            <p>{this.props.question}</p>
                        </div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <div className="answerHidden">
                            <p>{this.props.answer}</p>
                        </div>
                    </Reveal.Content>
                </Reveal>
            </div>
        );
    }
}
export default QuestionAndAnswer