import React, { Component } from 'react';

class SearchBar extends Component {
    handleOnChange = (e) => {
        this.props.handleSearchEvents(e.target.value, e.target.name);
      };
     
    render() {
        return (
            <div>


                <div className="row search-row">
                    <div className="input-group" style={{ border: `1px solid black` }}>
                        <input id="search" type="text" className="form-control"
                          name='search'
                          value={this.props.search}
                          onChange={this.handleOnChange}
                        ></input>
                        <span className="input-group-addon"><i className="fa fa-search"></i> </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 className="text-center">Search on Wikipedia.
            </h6>
                    </div>
                </div>
                <div className="slidecontainer text-center">
                    <input type="range" min="1" max="10" className="slider" name="range"
                     value={this.props.range}
                     onChange={this.handleOnChange}
                    ></input>
                    <p>Value: <span id="demo"></span></p>
                </div>
            </div>
        );
    }
}

export default SearchBar;