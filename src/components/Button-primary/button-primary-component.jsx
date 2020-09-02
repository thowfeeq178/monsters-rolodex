import React, { Component } from 'react';

import "./button-primary-component.css"

class ButtonPrimary extends Component {
  render() {
    return (
      <div className="buttonWrapper">
        <button 
        className="buttonPrimary" 
        onClick={()=>this.props.onclickHandler(this.props.lable)}
        >
        {this.props.lable}
        </button>
      </div>
    );
  }
}

export default ButtonPrimary;