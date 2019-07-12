import React, {Component} from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
   

   _renderSlidesData() {
        return this.props.data.map((slide) => {
            <View key={slide.text}> style={style.slideStyle}
                <Text style={style.textStyle}>{slide.text}</Text>
            </View>
        });
   }

    render() {
    return (
        <ScrollView
            horizontal
            style={{ flex: 1 }}
        >
            {this._renderSlidesData()}
        </ScrollView>    
    );
   }
}

const style = {
    textStyle: {
        fontSize: 30,
        color: 'black'
    }, 
    slideStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: WINDOW_WIDTH //so it covers the whole width of the screen. 
    }
}

export default Slides;