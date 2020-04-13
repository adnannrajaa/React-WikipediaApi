import React, { Component } from 'react';

class bodyDiv extends Component {
    render() {
        return (
            <div>
                <div id="searchResults">
                    <div className="row">
                        <div className="col">
                            <a target="_blank" id="randomLink" href="#">
                                <h2 className="text-center" id="randomTitle"></h2>
                            </a>
                            <p className="text-center" id="randomExtract"></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default bodyDiv;