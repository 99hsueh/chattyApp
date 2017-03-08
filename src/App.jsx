import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ''}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    this.addNewMsg = this.addNewMsg.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    console.log("Connected to server");
    console.log("componentDidMount <App />");
    // this.socket.onmessage = function(event) {
    //   console.log(event);
    //   // const newMessage = {id: Date.now(), username: username, content: content};
    //   // const messages = this.state.messages.concat(newMessage);
    //   // this.socket.send(JSON.stringify(newMessage));
    //   // this.setState({messages: messages});

    // }
  }

  addNewMsg(username, content) {
    const message = {id: Date.now(), username: username, content: content};
    const messages = this.state.messages.concat(message);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
    // this.setState({messages: messages});
    this.socket.send(JSON.stringify(message));

  }

  render() {
  console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} addNewMsg={this.addNewMsg}/>
      </div>

    );
  }
}
export default App;
