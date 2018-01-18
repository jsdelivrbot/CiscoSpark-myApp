// This is one way you might programattically determine your redirect_uri
// depending on where you've deployed your app, but you're probably better off
// having development/staging/production builds and injecting directly from the
// environment.
let redirect_uri = `${window.location.protocol}//${window.location.host}`;
if (window.location.pathname) {
  redirect_uri += window.location.pathname;
}
console.log(redirect_uri)

// Inititate the SDK
// IN A PRODUCTION APP YOU SHOULD NOT HARDCODE THESE VALUES BUT INSTEAD LOAD
// THEM FROM THE ENVIRONMENT AT BUILD TIME. SECRETS AND OTHER CREDENTIALS SHOULD
// NOT BE COMMITTED TO THE CODEBASE.
const spark = ciscospark.init({
  config: {
    credentials: {
      client_id: 'Cc10a118c61537a4318aec92364ac632c76c7c2323b9d3214211dd1975ce59323',
      redirect_uri,
      scope: 'spark:all spark:kms'
    }
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

