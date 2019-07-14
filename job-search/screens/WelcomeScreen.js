import _ from 'lodash';
import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
//import Slides from '../components/slides';
import Slides from "../components/Slides";
import { AppLoading } from 'expo';

//Data that will be displayed on the welcome page.
const SLIDE_DATA = [
{text: 'Welcome to Job Search!', color: '#03A9F4'},
{text: 'Number 1 Job Searching App', color: '#009688'},
{text: 'Set your location, then swipe away.', color: '#03A9F4'}
];

class WelcomeScreen extends Component {
 
    state = {
        token: null
    };

    //before component renders get the token.
    async componentWillMount() {
       let token = await AsyncStorage.getItem('fb_token');
        
       if(token) {
            this.props.navigation.navigate('Map');
            this.setState({ token });
       }else{
            //updaete tokem value if we don't have one.
            this.setState({ token: false });
       }
       
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        if(_.isNull(this.state.token)) {
            return <AppLoading />;
        }

        return (
            //data fed to component
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} /> 
        );
    }
}

export default WelcomeScreen;
