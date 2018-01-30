import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import CiscoSpark from 'ciscospark';
import io from 'socket.io-client';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ChatInput from './components/chat_input';
import ChatPanel from './components/chat_panel';
import VideoCall from './components/video_call';

const API_KEY = 'AIzaSyCmIDGCn6iZ3s2KH0MYhD7q1-pKnVvJmlI';

// Initialize Cisco spark
let redirect_uri = `${window.location.protocol}//${window.location.host}`;
if (window.location.pathname) {
  redirect_uri += window.location.pathname;
}

const spark = CiscoSpark.init({
  credentials: {
    access_token: 'OTExMDFiNWYtMWM4YS00ZmFiLWE0ZmQtOTZhN2Y3NDljMjFkNDYwYmI2N2ItNjk4'
  }
  // config: {
    // credentials: {
      // client_id: 'Cc10a118c61537a4318aec92364ac632c76c7c2323b9d3214211dd1975ce59323',
      // redirect_uri,
      // scope: 'spark:all spark:kms'
  // }
});

spark.once(`ready`, function() {
  if (!spark.canAuthorize) {
    // initiate the login sequence if not authenticated.
    spark.authorization.initiateLogin();
  }
});

spark.phone.register()
  .catch((err) => {
    console.error(err);
    alert(err);
    throw err;
  });

// Initialize webhook
const wh = spark.webhooks.create({
  resource: 'messages',
  event: 'created',
  targetUrl: 'http://2608e18f.ngrok.io',
  name: 'Test Webhook'
});

// Initialize socket.io
var socket = io();


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      messages: []
    };

    // Set default video search
    this.videoSearch('surfboards');
  }

  componentDidMount() {
    // Initialize socket.io
    let msg = "";
    socket.on('messageReceived', function(messageId, personId){
      console.log("We received a message here!");
      let message = spark.messages.get(messageId);
      let person = spark.people.get(personId);
      person.then(result => {
        console.log(result.displayName);
        msg += result.displayName + ": ";
      });
      message.then(result => {
        console.log(result.text);
        msg += result.text;
      });
    });

    this.setState({messages: [...this.state.messages, msg]});
  }

  componentWillUnmount() {
    wh.then((result => {
      spark.webhooks.remove(result.id);
    }));
  }

  bindCallEvents(call) {
    call.on(`error`, (err) => {
      console.error(err);
      alert(err);
    });

    call.once(`localMediaStream:change`, () => {
      document.getElementById(`self-view`).srcObject = call.localMediaStream;
    });

    call.once(`remoteMediaStream:change`, () => {
      document.getElementById(`remote-view`).srcObject = call.remoteMediaStream;
    });

    call.on(`disconnected`, () => {
      document.getElementById(`self-view`).srcObject = document.getElementById(`remote-view`).srcObject = undefined;
      call = undefined;
    });

    document.getElementById(`hangup`).addEventListener(`click`, () => {
      call.hangup();
    });
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  sendMessage(message) {
    spark.messages.create({
      text: message,
      toPersonEmail: "yche720@student.monash.edu"
    });
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <div className="row">
          <ChatPanel messages={this.state.messages}/>
          <ChatInput onMessageSent={message => this.sendMessage(message)}/>
          <VideoCall onDial={callee => {
              const call = spark.phone.dial(callee);
              this.bindCallEvents(call);
              console.log("dan is bass");
            }}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
