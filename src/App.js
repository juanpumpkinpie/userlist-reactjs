import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import UserForm from "./Components/Userform";
import ViewList from "./Components/ViewList";
import Counter from "./Components/props/counter";

class App extends Component {
  state = {
    data: [],
    ruta: "lista",
  };
  constructor() {
    super();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => this.setState({ data }));
  }

  selectUsers = (id) => {
    this.setState({
      ruta: "formulario",
      usuarioSeleccionado: id,
    });
  };

  render() {
    console.log(this.state.data);
    const { ruta, data } = this.state;
    return (
      <div className="App">
        {ruta === "lista" && (
          <ViewList data={data} handleClick={this.selectUsers} />
        )}
        {ruta === "formulario" && <UserForm />}
        <Counter />
      </div>
    );
  }
}

export default App;
