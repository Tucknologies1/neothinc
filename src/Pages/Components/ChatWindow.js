import React, { Component } from 'react';
import { Widget , addResponseMessage } from 'react-chat-widget';

import logo from '../Components/gear.svg';
import socketIOClient from 'socket.io-client';

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Endpoint for websocket connection local host
            endpoint: "http://192.168.1.11:9000",
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
        const socket = socketIOClient(this.state.endpoint);
        socket.on('news', function(data) {
            console.log(data);
        });
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