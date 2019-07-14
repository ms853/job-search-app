import React, {Component} from 'react';
import {Text, View, ActivityIndicator } from 'react-native';
import MapView  from 'react-native-maps';


class MapScreen extends Component {
    
    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    };

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    //keep track of the users change on the map
    onRegionChangeComplete = (region) => {
        console.log(region);
        this.setState({ region });
    }

    render() {
        if(!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator color="blue" size="large" />
                </View>
            );
        }

        return (
            <View style={{ flex: 1}}>
                <MapView 
                region={this.state.region}
                style={{flex: 1}} 
                onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        );
    }
}

export default MapScreen;
