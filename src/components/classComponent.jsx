"use client";

import { Component } from "react";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log(this.state);
  };
  
  // handleClick = () => {
  //     alert(`kamu menekan tombol! Pesan: ${this.props.nama}`)
  // }

  render() {
    return (
        <div>
            <button
            className="bg-green-500 rounded-3xl font-bold"
            onClick={this.handleClick}>
            Click Me
            </button>
            <p>Jumlah klik: {this.state.count}</p>
        </div>
      
        
    );
  }
}

export { ButtonComponent };
