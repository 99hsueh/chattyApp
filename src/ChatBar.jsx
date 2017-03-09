import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.currentUser.name,
      content: ''
    };
    this.inputContent = this.inputContent.bind(this);
    this.inputUsername = this.inputUsername.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  inputUsername(event) {
    if(event.key === "Enter") {
      this.props.sendNotification(this.state.username);
    }
  }

  inputContent(event) {
    if(event.key === "Enter") {
      this.props.addNewMsg(this.state.content);
      this.setState({content: ''});
    }
  }

  onChangeUsername (event) {
    this.setState({username: event.target.value});
  }

  onChangeContent (event) {
    this.setState({content: event.target.value});
  }

  render() {
  console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onChange={this.onChangeUsername}
          onKeyDown={this.inputUsername}
          value={this.state.username}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onChange={this.onChangeContent}
          onKeyDown={this.inputContent}
          value={this.state.content}
        />
      </footer>
    );
  }
}

export default ChatBar;