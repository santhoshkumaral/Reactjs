import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Textinput from './Camponents/Textinput';
import Button from './Camponents/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.heightChange=this.heightChange.bind(this);
    this.weightChange=this.weightChange.bind(this);
    this.state={}
  }
  weightChange(weightValue){
    console.log(weightValue)
    this.setState({weight : weightValue})
  }
  heightChange(heightValue){
    this.setState({height : heightValue})
  }
  computeBmi() {
    console.log('iggg')
    let bmiValue = ( this.state.weight / this.state.height) / this.state.height;
    // this.setState({ bmi : bmiValue });
    // let bmiClass = this.getBmi(bmiValue);
    // this.setState({ bmiClass : bmiClass });
}
getBmi=(bmi) =>{
  if(bmi < 18.5) {
      return "Underweight";
  }
  if(bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
  }
  if(bmi >= 25 && bmi < 29.9) {
      return "Overweight";
  }
  if(bmi >= 30) {
      return "Obesity";
  }
}

  render() {
    return (
      <div className="App">
    <div className="row">
                <Textinput label="Height" placeholder="Enter height in meters" onChange={this.heightChange} />
            </div>
            <div className="row">
                <Textinput label="Weight" placeholder="Enter weight in kg" onChange={this.weightChange}  />
            </div>
            <div className="row">
                <Button label="SUBMIT" onClick={ this.computeBmi } />
            </div>
            <div className="row">
    <h3>BMI = {this.state.bmiVaue}</h3>
</div>
<div className="row">
    <h3>{this.state.bmiClass}</h3>
</div>
      </div>
    );
  }
}

export default App;
