import React, { Component } from 'react';

import '../App.css';


class Button extends Component {
   

  render() {
return (
      <div className="App">
      <div onClick={this.props.onClick}>
            {this.props.label}
        </div>
</div>
    
    );
  }
 }
export default Button;