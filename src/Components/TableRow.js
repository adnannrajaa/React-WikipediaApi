import React, { Component } from 'react';

export class TableRow extends Component {
    render() {
        return (
            <div className='row item'>
                <div className='col-1 item-head'></div>
                <div className='col-11 item-body'>
                    <a target='_blank' rel="noopener noreferrer" href={this.props.titleUrl}>
                        <h2>{this.props.title}</h2>
                    </a>
                    <h6>{this.props.timestamp}</h6>
                    <p>{this.props.snippet}</p>

                </div>
            </div>

        )
    }
}
export default TableRow
