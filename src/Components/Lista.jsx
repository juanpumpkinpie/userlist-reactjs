import React, { Component } from "react";

export default class Lista extends Component {
  //curriying Function
  handleClick = (id) => (e) => {
    const { handleClick } = this.props;
    handleClick(id);
  };

  //another way to HandleClick:
  // handleClick = e => {
  //   console.log(e.target.getAttribute('data-id'))
  // }
  //<button data-id={x.id} onClick={handleClick}

  render() {
    const { data } = this.props;
    return (
      <div>
        <ul>
          {data.map((x) => (
            <li key={x.id}>
              {x.name} <button onClick={this.handleClick(x.id)}>Edit</button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
