import {combineReducers} from 'redux';
import * as constants from './constants';

//auth
const initialAuthState = {
    login: false,
    token: '',
};

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                token: action.token,
            };
        case constants.LOGIN_FAIL:
            return state;
        case constants.LOGOUT:
            return {
                ...state,
                login: false,
                token: '',
            };
        default:
            return state;
    }
}

//input
const initialInputState = {
    inputLoginEmail: '',
    inputLoginPassword: '',
    inputRegisterEmail: '',
    inputRegisterPassword1: '',
    inputRegisterPassword2: '',
    inputProfileWeight: '',
    inputProfileHeight: '',
    inputProfileBf: '',
    inputProfileSex: '',
};

function input(state = initialAuthState, action) {
    switch (action.type) {
        case constants.INPUT_LOGIN_EMAIL:
            return {
                ...state,
                inputLoginEmail: action.email,
            };
        case constants.INPUT_LOGIN_PASSWORD:
            return {
                ...state,
                inputLoginPassword: action.password,
            };
        case constants.INPUT_REGISTER_EMAIL:
            return {
                ...state,
                inputRegisterEmail: action.email,
            };
        case constants.INPUT_REGISTER_PASSWORD1:
            return {
                ...state,
                inputRegisterPassword1: action.password1,
            };
        case constants.INPUT_REGISTER_PASSWORD2:
            return {
                ...state,
                inputRegisterPassword2: action.password2,
            };
        case constants.INPUT_PROFILE_WEIGHT:
            return {
                ...state,
                inputProfileWeight: action.weight,
            };
        case constants.INPUT_PROFILE_HEIGHT:
            return {
                ...state,
                inputProfileHeight: action.height,
            };
        case constants.INPUT_PROFILE_BF:
            return {
                ...state,
                inputProfileBf: action.bf,
            };
        case constants.INPUT_PROFILE_SEX:
            return {
                ...state,
                inputProfileSex: action.sex,
            };
        default:
            return state;
    }
}

//profile
const initialProfileState = {
    user: {}
};

function profile(state = initialProfileState, action) {
    switch (action.type) {
        case constants.PROFILE_REFRESH:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

//workout
const initialWorkoutState = {
    workouts: [
    ]
};

function workout(state = initialWorkoutState, action) {
    switch (action.type) {
        case constants.WORKOUT_REFRESH:
            return {
                ...state,
                workouts: action.workouts,
            };
        default:
            return state;
    }
}

//history
const initialHistoryState = {
    history: [
    ]
};

function history(state = initialHistoryState, action) {
    switch (action.type) {
        case constants.HISTORY_REFRESH:
            return {
                ...state,
                history: action.history,
            };
        default:
            return state;
    }
}

export default combineReducers({
    auth,
    input,
    profile,
    workout,
    history,
})
