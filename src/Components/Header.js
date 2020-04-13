import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                  <div className="row brand-nav">
                    <img id="wiki-logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="Wikipedia Logo"></img>
                    <h4 className="brand-name">wikipedia</h4>
                </div>
            </div>
        );
    }
}

export default Header;