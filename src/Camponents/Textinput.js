import React, { Component } from 'react';

import '../App.css';


class Textinput extends Component {
   constructor(props){
       super(props);
       this.state={value:''};
       this.handleChange=this.handleChange.bind(this);
   }
   handleChange(event){
       let inputValue=event.target.value;
       this.setState({value:inputValue});
       this.props.onChange(inputValue);
   }

  render() {
return (
      <div className="App">
      <label>{this.props.label}</label>
                <input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
</div>
    
    );
  }
 }
export default Textinput;