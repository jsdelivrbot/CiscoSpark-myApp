import React, { Component } from 'react';

class VideoCall extends Component {
  constructor(props) {
    super(props);

    this.state = { called: false };
  }

  render() {
    return (
      <div className="video-call col-md-3">
        <input
          id="invitee"
          name="invitee"
          placeholder="Person ID or Email Address or SIP URI or Room ID"
          type="text">
        </input>

        <input
          title="dial"
          type="submit"
          value="dial"
          onClick={event => this.onCall(event)}>
        </input>

        <input
          id="hangup"
          title="hangup"
          type="submit"
          value="cancel/hangup">
        </input>
      </div>
    );
  }

  onCall(event) {
    const callee = document.getElementById(`invitee`).value;
    this.setState({ called: true });
  }
}

export default VideoCall;
