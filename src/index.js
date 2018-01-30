import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const CiscoSpark = require(`ciscospark`);

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoCall from './components/video_call';

const API_KEY = 'AIzaSyCmIDGCn6iZ3s2KH0MYhD7q1-pKnVvJmlI';

// Initialize Cisco spark
let redirect_uri = `${window.location.protocol}//${window.location.host}`;
if (window.location.pathname) {
  redirect_uri += window.location.pathname;
}
console.log(redirect_uri);

const spark = CiscoSpark.init({
  config: {
    credentials: {
      // access_token: 'OTExMDFiNWYtMWM4YS00ZmFiLWE0ZmQtOTZhN2Y3NDljMjFkNDYwYmI2N2ItNjk4'
      client_id: 'Cc10a118c61537a4318aec92364ac632c76c7c2323b9d3214211dd1975ce59323',
      redirect_uri,
      scope: 'spark:all spark:kms'
    }
  }
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
    this.setState({messages: [...this.state.messages, message]});
    console.log(this.state);
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <div className="row">
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
