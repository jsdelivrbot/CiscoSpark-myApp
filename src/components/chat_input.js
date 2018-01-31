import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="chat-room col-md-3">
        <input
          className="form-control"
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
    this.setState({term: event.target.value});
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
    this.props.onMessageSent(message);
  }
}

export default ChatInput;
