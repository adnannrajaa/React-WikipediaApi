import React, { Component } from 'react';
import TableRow from './TableRow';

class BodyDiv extends Component {
    render() {
        let rows = [];
        this.props.data.forEach((dataObj) => {
            rows.push(
                <TableRow
                key={dataObj.pageid}
                titleUrl = {dataObj.titleUrl}
                    pageid={dataObj.pageid}
                    title={dataObj.title}
                    snippet={dataObj.snippet}
                    timestamp={dataObj.timestamp}
                />
            );
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default BodyDiv;