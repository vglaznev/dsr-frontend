import {createStore} from "redux";
import {getUserInfo} from "../auth/auth";

const defaultState = false;

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'Login':
            return true;
        case 'Logout':
            return false;
        default:
            return state;
    }
}

export const store = createStore(reducer);