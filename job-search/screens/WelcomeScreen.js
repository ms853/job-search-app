import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Slides from '../components/slides';

//Data that will be displayed on the welcome page.
const SLIDE_DATA = [
{text: 'Welcome to Job Search!'},
{text: 'Number 1 Job Searching App'},
{text: 'Set your location, then swipe away.'}
];

class WelcomeScreen extends Component {
 
    render() {
        return (
            //data fed to component. 
            <View>
                <Slides data={SLIDE_DATA} />
            </View>
        );
    }
}

export default WelcomeScreen;
