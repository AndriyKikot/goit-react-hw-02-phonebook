import './App.css';
import { Component } from 'react';

// import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleNameChange}
            />
          </label>

          <button type="submit">Add contact</button>

          <label htmlFor="">
            Number
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
