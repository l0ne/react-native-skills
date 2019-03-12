import {GET_SETTINGS_ERROR, GET_SETTINGS_PENDING, GET_SETTINGS_SUCCESS} from "../actions/SettingsActions";

const initialState = {
    isLoading: false,
    user: {}
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SETTINGS_PENDING: return {...state, isLoading: true}
        case GET_SETTINGS_SUCCESS: return {...state, user: action.payload, isLoading: false}
        case GET_SETTINGS_ERROR: return {...state, isLoading: false, error: action.error}
        default: return state
    }
}

export default settingsReducer;
