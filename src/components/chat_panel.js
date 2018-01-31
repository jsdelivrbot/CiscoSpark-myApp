import React, { Component } from 'react';

class ChatPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { messages: '' };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.messages);

    let messages = nextProps.messages.map((message) => {
      return (<div>{message}</div>);
    });

    this.setState({ messages: messages });
  }

  render() {
    return (
      <div>{this.state.messages}</div>
    );
  }
}

export default ChatPanel;
