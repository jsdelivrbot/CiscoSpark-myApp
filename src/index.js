var CiscoSpark = require('ciscospark');
var spark = CiscoSpark.init({
  config: {
    credentials: {
      authorizationString: "{my token}",
      // By setting `clientType` to `confidential`, initiateLogin will
      // know to ask for an auth code instead of an access token.
      clientType: 'confidential'
    }
  }
});

spark.once(`ready`, function() {
  if (spark.canAuthorize) {
    // your app logic goes here
  }
  else {
    spark.authorization.initiateLogin()
  }
});
