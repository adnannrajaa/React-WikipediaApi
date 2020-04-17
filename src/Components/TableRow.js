import React, { Component } from 'react';

export class TableRow extends Component {
    render() {
        return (
            <div className='row item'>
                <div className='col-1 item-head'></div>
                <div className='col-11 item-body'>
                    {/* <a target='_blank' href='https://en.wikipedia.org/wiki/" + data.query.search[i].title.replace(" ", "%20") + "'> */}
                        <h2>{this.props.title}</h2>
                    {/* </a> */}
                    <h6>{this.props.timestamp}</h6>
                    <p>{this.props.snippet}</p>

                </div>
            </div>

        )
    }
}
export default TableRow
