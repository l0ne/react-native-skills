import React from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios'
import {REST_END} from "../constants";
import NavigationService from "../utils/NavigationService";

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const URL = REST_END.login

export const doLogin = (email, password) => {
    return async dispatch => {
        dispatch({
            type: LOGIN_PENDING,
        });

        try {
            let request = {login: email, password: password};
            let res = await axios.post(URL, request);

            if (res.data && res.data['user-token']) {
                await AsyncStorage.setItem('userToken', res.data['user-token']);
            }

            NavigationService.navigate('Settings');

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

        } catch (e) {
            dispatch({
                type: LOGIN_ERROR,
                error: e.message
            });
        }
    }
}
