import axios from 'axios'
import {REST_END} from "../constants";

export const GET_SETTINGS_PENDING = 'GET_SETTINGS_PENDING';
export const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
export const GET_SETTINGS_ERROR = 'GET_SETTINGS_ERROR';

const URL = REST_END.user + '/52530D6C-1184-5E69-FFAB-F2DC9369D800'

export const getSettings = () => {
    return async dispatch => {
        dispatch({
            type: GET_SETTINGS_PENDING
        });

        try {
            let res = await axios.get(URL);

            dispatch({
                type: GET_SETTINGS_SUCCESS,
                payload: res.data
            });
        } catch (e) {
            dispatch({
                type: GET_SETTINGS_ERROR,
                payload: {error: e}
            });
        }
    }
}
