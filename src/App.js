import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  updatePicture(value){
    this.setState({
      picture: value
    })
  }
  updateName(value){
    this.setState({
      name: value
    })
  }
  addFriend(value){
    let newFriends = this.state.friends.slice()
    newFriends.push({
      name: this.state.name,
      picture: this.state.picture
    })
    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    })
  }
  render() {
    let formattedFriends = this.state.friends.map((e, i) => {
      return (
        <div key={i}>
          <img src={ e.picture } alt=""/>
          <h3> { e.name } </h3>
        </div>
      )
    })
    return (
      <div className="App">
      <span>Picture URL:</span>
        <input type="text" 
        onChange={(e) => this.updatePicture(e.target.value)}
        value={this.state.picture}/>
        <span>Name:</span>
        <input type="text" 
        onChange={(e) => this.updateName(e.target.value)}
        value={this.state.name}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        { formattedFriends }
      </div>
    );
  }
}

export default App;
