import React, { Component } from 'react';

class SearchBar extends Component {
    handleKeyUp = (e) => {
        this.props.handleSearchEvents(e.target.value, e);
      };
     
    render() {
        return (
            <div>


                <div className="row search-row">
                    <div className="input-group" style={{ border: `1px solid black` }}>
                        <input id="search" type="text" className="form-control"
                          name='search'
                          onKeyUp={this.handleKeyUp}
                        ></input>
                        <span className="input-group-addon"><i className="fa fa-search"></i> </span>
                    </div>
                </div>
              
            </div>
        );
    }
}

export default SearchBar;