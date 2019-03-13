import axios from 'axios'
import {REST_END} from "../constants";
import {getItem} from "../utils/StorageService";

export const GET_SETTINGS_PENDING = 'GET_SETTINGS_PENDING';
export const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
export const GET_SETTINGS_ERROR = 'GET_SETTINGS_ERROR';

export const getSettings = () => {
    return async dispatch => {
        dispatch({
            type: GET_SETTINGS_PENDING
        });

        try {

            const userToken = await getItem('userToken');
            const userId = await getItem('userId');

            let res = await axios.get(REST_END.user + userId, {headers: { 'user-token': userToken }});

            dispatch({
                type: GET_SETTINGS_SUCCESS,
                payload: res.data
            });
        } catch (e) {
            dispatch({
                type: GET_SETTINGS_ERROR,
                error: e.message
            });
        }
    }
}
