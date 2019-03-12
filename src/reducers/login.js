import {LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR} from "../actions/LoginActions";

const initialState = {
    isLoading: false,
    error: '',
    user: {}
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING: return {...state, isLoading: true, error: ''}
        case LOGIN_SUCCESS: return {...state, user: action.payload, isLoading: false, error: ''}
        case LOGIN_ERROR: return {...state, isLoading: false, error: action.error}
        default: return state
    }
}

export default loginReducer;
