import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import { connect} from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
        //AsyncStorage.removeItem('fb_token');
        this.onAuthComplete(this.props);
    }


    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps); //cause method to receive the next set of props. 
    }
    /* 
    This function will check if a token exists. 
    If it exists then the user will be navigated to the map. 
    */
    onAuthComplete(props) {
        if(props.token) {
            this.props.navigation.navigate('Map');
        }
    }

    render() {
        
        return (
            <View />
        );
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
