import * as constants from './constants';

/*Saga*/

//auth
function login(user) {
    return {
        type: constants.LOGIN,
        user,
    }
}

function register(user) {
    return {
        type: constants.REGISTER,
        user,
    }
}

//profile
function profilePost(user) {
    return {
        type: constants.PROFILE_POST,
        user,
    }
}

function profileGet() {
    return {
        type: constants.PROFILE_GET,
    }
}

//workout
function workoutPost(workouts) {
    return {
        type: constants.WORKOUT_POST,
        workouts,
    }
}

function workoutGet() {
    return {
        type: constants.WORKOUT_GET,
    }
}

//history
function historyGet() {
    return {
        type: constants.HISTORY_GET,
    }
}

/*Reducer*/

//auth
function loginSuccess(token) {
    return {
        type: constants.LOGIN_SUCCESS,
        token,
    }
}

function loginFail() {
    return {
        type: constants.LOGIN_FAIL,
    }
}

function logout() {
    return {
        type: constants.LOGOUT,
    }
}

//input
function inputLoginEmail(email) {
    return {
        type: constants.INPUT_LOGIN_EMAIL,
        email,
    }
}

function inputLoginPassword(password) {
    return {
        type: constants.INPUT_LOGIN_PASSWORD,
        password,
    }
}

function inputRegisterEmail(email) {
    return {
        type: constants.INPUT_REGISTER_EMAIL,
        email,
    }
}

function inputRegisterPassword1(password1) {
    return {
        type: constants.INPUT_REGISTER_PASSWORD1,
        password1,
    }
}

function inputRegisterPassword2(password2) {
    return {
        type: constants.INPUT_REGISTER_PASSWORD2,
        password2,
    }
}

function inputProfileWeight(weight) {
    return {
        type: constants.INPUT_PROFILE_WEIGHT,
        weight,
    }
}

function inputProfileHeight(height) {
    return {
        type: constants.INPUT_PROFILE_HEIGHT,
        height,
    }
}

function inputProfileBf(bf) {
    return {
        type: constants.INPUT_PROFILE_BF,
        bf,
    }
}

function inputProfileSex(sex) {
    return {
        type: constants.INPUT_PROFILE_SEX,
        sex,
    }
}

//profile
function profileRefresh(user) {
    return {
        type: constants.PROFILE_REFRESH,
        user,
    }
}

//workout
function workoutRefresh(workouts) {
    return {
        type: constants.WORKOUT_REFRESH,
        workouts,
    }
}

//history
function historyRefresh(history) {
    return {
        type: constants.HISTORY_REFRESH,
        history,
    }
}


export default {
    login,
    register,
    profilePost,
    profileGet,
    workoutPost,
    workoutGet,
    historyGet,
    loginSuccess,
    loginFail,
    logout,
    inputLoginEmail,
    inputLoginPassword,
    inputRegisterEmail,
    inputRegisterPassword1,
    inputRegisterPassword2,
    inputProfileWeight,
    inputProfileHeight,
    inputProfileBf,
    inputProfileSex,
    profileRefresh,
    workoutRefresh,
    historyRefresh,
};
