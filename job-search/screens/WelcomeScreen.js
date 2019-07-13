import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Slides from '../components/slides';



//Data that will be displayed on the welcome page.
const SLIDE_DATA = [
{text: 'Welcome to Job Search!', color: '#03A9F4'},
{text: 'Number 1 Job Searching App', color: '#009688'},
{text: 'Set your location, then swipe away.', color: '#03A9F4'}
];

class WelcomeScreen extends Component {
 
    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            //data fed to component. 
            <View>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        );
    }
}

export default WelcomeScreen;
