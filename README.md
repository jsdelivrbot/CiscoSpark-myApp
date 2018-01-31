# myApp
Just like the name, this is a learning project to get myself famaliar with React and Cisco Spark SDK.

## Run
```
npm install
npm run build
node server
go to `localhost:3000`
```

## Implementation
* Backend was implemented using `Node.js`.
* Frontend was implemented using `React`.
* The connection between backend and frontend was hanlded using `socket.io`.
* Use `ngrok` to build a tunnel between `localhost` and a real ip address.
* Use `CiscoSpark` SDK to implement the chat, message and video call functions.


## Remark
1. `delete.js` file is for deleting redundant webhooks. (See `How to use `delete.js` section)

 ##### How to use `delete.js`:

  * Download Postman.
  * Open a new tab, enter: https://api.ciscospark.com/v1/webhooks with `GET` request.
  * Go to `Header`, set `Content-type` to `application/json; charset=utf-8enter` and `Authorization` to `Bearer {your access token}`.
  (Note there is a space between `Bearer` and the token)
  * Click `Send`.
  * Copy the json output to `fuck` variable in `delete.js`.
  (Forgive the variable name :p)
  * Save file and go to terminal, `node delete`.
