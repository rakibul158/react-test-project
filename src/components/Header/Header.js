import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {

        }
    }
    render() {
        const {yeah} = this.props.info;
        return (
            <div>
                <h3>{yeah}</h3>
            </div>
        );
    }
}

export default Header;