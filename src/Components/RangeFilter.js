import React, { Component } from 'react';

class RangeFilter extends Component {
    handleRangeChange = (e) => {
        this.props.handleRangeEvents(e.target.value, e.target.name);
      };
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h6 className="text-center">Search on Wikipedia.
            </h6>
                    </div>
                </div>
                <div className="slidecontainer text-center">
                    <input type="range" min="1" max="10" className="slider" name="range"
                        value={this.props.range}
                        onChange={this.handleRangeChange}
                    ></input>
                  <p> Value : {this.props.rangeValue} </p>
                </div>
            </div>
        );
    }
}

export default RangeFilter;