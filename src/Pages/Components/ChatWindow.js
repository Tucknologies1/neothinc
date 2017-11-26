import React, { Component } from 'react';
import { Widget , addResponseMessage } from 'react-chat-widget';

import logo from '../Components/gear.svg';
class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList : null
        }
    }

    componentDidMount() {
        addResponseMessage("Hi there!");
    }
 // NOTE: Message logic controlled here
    _handleNewUserMessage = (newMessage) => {
        console.log(newMessage);
    }
    render() {
        return (<div>
            <Widget
                    handleNewUserMessage={this._handleNewUserMessage}
                    profileAvatar={logo}
                    title="THiNC Support"
                    subtitle="We're here to help"
             />
        </div>)
      }
}

export default ChatWindow