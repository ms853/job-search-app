import React, {Component} from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import { Button } from "react-native-elements";

const WINDOW_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
   
    //Method to render a button for the last slide
    renderButtonForLastSlide(index) {
    
        //-1 for the last index.
        if(index === this.props.data.length -1) {
            return (
            <Button 
                title="I am ready" 
                raised 
                buttonStyle={style.buttonStyle}
                onPress={() => this.props.onComplete}
            />
            );
        }
    }

   _renderSlidesData() {
        return this.props.data.map((slide, index) => {
            <View 
            key={slide.text}
            style={[style.slideStyle, {backgroundColor: slide.color}]}> 
                <Text style={style.textStyle}>{slide.text}</Text>
                {this.renderButtonForLastSlide(index)}
            </View>
        });
   }

  

    render() {
    return (
        <ScrollView
            horizontal
            style={{ flex: 1 }}
            pagingEnabled
        >
            {this._renderSlidesData()}
        </ScrollView>    
    );
   }
}

const style = {
    textStyle: {
        fontSize: 30,
        color: 'white',
        alignItems: 'center'
    }, 
    slideStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: WINDOW_WIDTH //so it covers the whole width of the screen. 
    },
    buttonStyle: {
        marginTop: 15,
        backgroundColor: '#288D1'
    }
}

export default Slides;