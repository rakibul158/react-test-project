import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../store/Home/home.action'
import Header from '../Header/Header';

class Home extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {

        }
    }
    render() {
        const { info } = this.props; 
        return (
            <>
                <Header info={ info }></Header>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = {
    getData: getData
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);