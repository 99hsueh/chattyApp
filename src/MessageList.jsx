import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx'

class MessageList extends Component {

  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div>
        <div>
          {
            this.props.messages.map((msg, id) => {
              if(msg.type === "incomingNotification"){
              return (<Notification key={id} type={msg.type} content={msg.content}/>);
              }
              if(msg.type === "incomingMessage"){
              return (<Message key={id} username={msg.username} content={msg.content} />);
              }
            })
          }
        </div>
      </div>
    );
  }
}


export default MessageList;
