const spark = ciscospark.init({
  config: {
    credentials: {
      authorizationString: 'https://api.ciscospark.com/v1/authorize?client_id=Cc10a118c61537a4318aec92364ac632c76c7c2323b9d3214211dd1975ce59323&response_type=code&redirect_uri=localhost%3A3333&scope=spark%3Aall%20spark%3Akms&state=set_state_here',
      redircect_url: 'localhost:3333',
    }
  }
});

spark.once(`ready`, function() {
  if (spark.canAuthorize) {
    // your app logic goes here
  }
  else {
    spark.authorization.initiateLogin();
  }
});

function bindCallEvents(call) {
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


spark.once(`ready`, function() {

  document.getElementById(`connect`).addEventListener(`submit`, (event) => {
    event.preventDefault();

    // initiate the login sequence if not authenticated.
    spark.authorization.initiateLogin();
  });

  if (spark.canAuthorize) {
    // your app logic goes here
    spark.phone.register()
    .catch((err) => {
      console.error(err);
      alert(err);
      throw err;
    });
    document.getElementById(`dialer`).addEventListener(`submit`, (event) => {
      event.preventDefault();

      const call = spark.phone.dial(document.getElementById(`invitee`).value);

      bindCallEvents(call);
    });
  }
  else {
    document.getElementById(`dialer`).addEventListener(`submit`, (event) => {
      event.preventDefault();
      console.log('User not authorized.');
    });
  }
});

