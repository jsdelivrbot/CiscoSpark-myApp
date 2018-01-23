import React, { Component } from 'react';

const ChatPanel = (props) => {
  const messageSent = '';
  const messageReceived = '';

  let messages = props.messages.map((message) => {
    return (<div>{message}</div>);
  });

  console.log(messages);

  return (<div>{messages}</div>);
}

export default ChatPanel;
