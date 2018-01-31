import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      toPersonEmail: ''
    };
  }

  personEmail = "";

  render() {
    return (
      <div className="chat-room col-md-3">
        <input
          className="to-person-email"
          id='toPersonEmail' />
        <input
          type="button"
          id="btnSubmit"
          value="Submit"
          className="btn btn-primary"
          onClick={event => this.onPersonEmailEntered(event)} />
        <input
          className="message-input"
          id='messageInput'
          onKeyDown={event => this.onKeyPressed(event)}
          onChange={event => this.onInputChange(event)} />
        <input
          type="button"
          id="btnSend"
          value="Send"
          className="btn btn-primary"
          onClick={event => this.onSend(event)} />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({message: event.target.value});
  }

  onKeyPressed(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('btnSend').click();
    }
  }

  onSend(event) {
    const message = document.getElementById('messageInput').value;
    document.getElementById('messageInput').value = '';
    this.props.onMessageSent(message, this.state.toPersonEmail);
  }

  onPersonEmailEntered(event) {
    let email = document.getElementById('toPersonEmail').value;
    this.setState({toPersonEmail: email});
    document.getElementById('toPersonEmail').value = '';
  }
}

export default ChatInput;
