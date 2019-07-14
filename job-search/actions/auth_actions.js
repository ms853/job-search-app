import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import {AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook';

export const facebookLogin = () => async (dispatch) => {
    try{
        //method returns a promise.
        let token = await AsyncStorage.getItem('fb_token');
       
        if(token) {
            //action dispatch to say FB login is done.
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

        }else{
            //do the facebook login
            //add the dispatch argument so the method has access to it.
            initFacebookLogin(dispatch);
        }
    }catch(error) {
        console.error(error);
    }
};

const initFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('334449504175319', { 
        permissions: ['public_profile']
    });

    if(type === 'cancel') {
        //if the auth failed then we return early from the function with a dispatch.
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    //save the token
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});

}