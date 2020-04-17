import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import RangeFilter from './Components/RangeFilter.js';
import './App.css';
import BodyDiv from './Components/BodyDiv.js';

export class App extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      search: '',
      range: 3,
      rangeValue: 3,
      title:'',
      pageid:'',
      timestamp:'',
      snippet:'',
      titleUrl:'',
    };
  }
  handleSearchEvents = (title, e) => {
    if (e.which === 13 && title !== '') {
      this.setState({ search: title }, () => {
        this.searchFromWikipediaApi(this.state.search, this.state.range);
      });
    }else{
      this.setState({ search: title });
    }

  }

  handleRangeEvents = (title, name) => {
    this.setState({ [name]: title }, () => {
      this.setState({ rangeValue: this.state.range })
      if(this.state.search !=='')
      {
        this.searchFromWikipediaApi(this.state.search, this.state.range);
      }else{
        this.data = [];
        console.log("No input")
      }

    });
  }

  searchFromWikipediaApi = (inputValue, noOfRecords) => {

    const value = inputValue; const len = noOfRecords;
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: 'query',
      list: 'search',
      srsearch: value,
      format: 'json'
    };

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });


    fetch(url)
      .then((response) => { return response.json(); })
      .then((result) => {
        let array = [];
        var record = result.query.search
        for (var i = 0; i < len; i++) {
          let entry = {};
           
          entry.titleUrl = `https://en.wikipedia.org/wiki/${record[i].title.replace(" ", "%20")}`
          entry.pageid = record[i].pageid;
          entry.snippet = record[i].snippet;
          entry.title = record[i].title;
          entry.timestamp = record[i].timestamp;
          array[i] = entry;
        }
        this.data = array;
        this.setState({
          isLoading: false,
        });

      }).catch(error => console.log('error', error));
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

          handleSearchEvents={this.handleSearchEvents}
        />
        <RangeFilter
          range={this.state.range}
          rangeValue={this.state.rangeValue}
          handleRangeEvents={this.handleRangeEvents}
        />

        <BodyDiv 
        titleUrl = {this.state.titleUrl}
        title = {this.state.title}
        snippet={this.state.snippet}
        timestamp={this.state.timestamp}
        pageid={this.state.pageid}
        data={this.data}
        />
      </div>
    )
  };
}

export default App;

