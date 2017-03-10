import React, {Component} from 'react';

class Message extends Component {
  render() {
  console.log("Rendering <Message/>");
  console.log(this.props.colors);
    return (
      <div>
        <div className="message">
          <span className="message-username" style={{color: this.props.colors}}>{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>

      </div>
    );
  }
}


export default Message;