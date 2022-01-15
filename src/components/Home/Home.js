import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../store/Home/home.action'
import Header from '../Header/Header';

class Home extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            showName: ''
        }
        this.handleClickMe= this.handleClickMe.bind(this)
    }

    handleClickMe(e){
        const clickValue = e.target.getAttribute('name');
        this.setState({
            showName: clickValue
        });
    };
    
    render() {
        const { showName } = this.state;
        return (
            <>
                <Header 
                    info={this.props.info}
                    showName={showName}
                    handleClickMe={this.handleClickMe}>
                </Header>
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