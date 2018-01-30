import React, { Component } from 'react';

class VideoCall extends Component {
  constructor(props) {
    super(props);

    this.state = { called: false };
  }

  render() {
    return (
      <div className="video-call col-md-3">
        <video style={{ width: '100%' }} id="self-view" muted autoPlay></video>
        <video style={{ width: '100%' }} id="remote-view" autoPlay></video>

        <input
          className="form-control"
          id="invitee"
          name="invitee"
          placeholder="Person ID or Email Address or SIP URI or Room ID"
          type="text">
        </input>

        <input
          className="btn btn-primary"
          title="dial"
          type="submit"
          value="dial"
          onClick={event => this.onCall(event)}>
        </input>

        <input
          className="btn btn-primary"
          id="hangup"
          title="hangup"
          type="submit"
          value="cancel/hangup">
        </input>
      </div>
    );
  }

  onCall(event) {
    console.log("kat is cute");
    const callee = document.getElementById(`invitee`).value;
    this.setState({ called: true });
    this.props.onDial(callee);
  }
}

export default VideoCall;
