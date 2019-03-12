import { combineReducers } from 'redux'
import settingsReducer from "./settings";
import loginReducer from "./login";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    login: loginReducer,
})
