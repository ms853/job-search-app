import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ReviewScreen extends Component {
    
    //definied a class property
    static navigationOptions = ({navigation}) => {
        return {
            title: "Review Jobs",
            headerRight: <Button icon={<Icon name="arrow-right" size={15} color="white" />} iconRight title="Settings "
                            onPress={() => navigation.navigate('settings')}
                            type="clear"
                            color="rgba(0, 122, 255, 1)"                            
                        />,
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        };
       
    }


    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
               
            </View>
        );
    }
}

const style = {
    customBtnStyle: {
        backgroundColor: "rgba(0,0,0,0)", 
        color: 'rgba(0,122,225,1)'
    },
    
}

export default ReviewScreen;
