import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      search: '',
      range:3,
      isLoading: true,
    };
  }
  handleSearchEvents = (title, name) => {
    this.setState({ [name]: title },()=>{
      console.log("Search Value  " + this.state.search)
      console.log("Search Value  " + this.state.range)

    });
   
    
}

  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="row brand-nav">
            <img id="wiki-logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="Wikipedia Logo"></img>
            <h4 className="brand-name">wikipedia</h4>
          </div>
        </div>
     

        <SearchBar
          search={this.state.search}
          range = {this.state.range}
          handleSearchEvents={this.handleSearchEvents}
        />
      </div>
    )
  };
}

export default App;
