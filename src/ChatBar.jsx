import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.currentUser.name,
      content: ''
    };
    this.inputEnter = this.inputEnter.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  inputEnter(event) {
    if(event.key === "Enter") {
      this.props.addNewMsg(this.state.username, this.state.content);
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
      <footer className="chatbar" onKeyDown={this.inputEnter}>
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onChange={this.onChangeUsername}
          value={this.state.username}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onChange={this.onChangeContent}
          value={this.state.content}
        />
      </footer>
    );
  }
}

export default ChatBar;