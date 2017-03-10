import React, {Component} from 'react';

class Showusers extends Component {
  render() {
  console.log("Rendering <Showusers/>");
    return (
          <div className="show-users">
            {this.props.content}
          </div>
    );
  }
}


export default Showusers;