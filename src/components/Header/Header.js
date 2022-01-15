import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {

        }
    }
    render() {
        const {name} = this.props.info;
        const { showName, handleClickMe } = this.props;
        // console.log("Header---->>", showName);
        return (
            <div>
                <button name={name} onClick={handleClickMe}>Click Me!</button>
                <h2>{showName}</h2>
            </div>
        );
    }
}

export default Header;