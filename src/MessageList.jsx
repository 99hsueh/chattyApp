import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div>
        {
          this.props.messages.map((msg, index) => {
            return (<Message key={index} username={msg.username} content={msg.content} />);
          })
        }
      </div>
    );
  }
}


export default MessageList;