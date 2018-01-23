import React, { Component } from 'react';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }

  onSend(event) {
    console.log("I'm a cute Kat");
  }

  render() {
    return (
      <div className="chat-room col-md-3">
        <div style={{ display: 'flex' }}>
          <video style={{ width: '50%' }} id="self-view" muted autoplay></video>
          <div style={{ width: '50%' }}>
            <audio id="remote-view-audio" autoplay></audio>
            <video id="remote-view-video" autoplay></video>
          </div>
        </div>

        <form id="chat-panel">
          <fieldset>
            <legend>Chat Panel</legend>
            <div>
              Kat: 123<br />Dan: 456
            </div>
            <input
              className="form-control"
              onKeyDown={event => {if (event.keyCode == 13) {event.preventDefault(); document.getElementById('btnSend').click()}}}>
            </input>
            <input
              type="button"
              id="btnSend"
              value="Send"
              className="btn btn-primary"
              onClick={event => { console.log("what is happening!!!" )}} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ChatRoom;
