import {
    all,
    call,
    put,
    takeLatest,
    select,
    takeEvery,
} from 'redux-saga/effects';
import actions from './actions';
import * as constants from './constants';


//auth
function* loginSaga(action) {
    let responseBody;
    const option = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    option.body = JSON.stringify(action.user);
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/login/', option);
        responseBody = yield response.json();
        if (!response.ok) {
            alert("로그인 실패");
            return;
        }
    } catch (e) {
        alert('login failed because ' + e);
        return;
    }
    yield put(actions.loginSuccess(responseBody.key));
}

function* registerSaga(action) {
    let responseBody;
    const option = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    option.body = JSON.stringify(action.user);
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/register/', option);
        responseBody = yield response.json();
        if (!response.ok) {
            alert("회원가입 실패");
            return;
        }
    } catch (e) {
        alert('register failed because ' + e);
        return;
    }
    yield put(actions.loginSuccess(responseBody.key));
}

//profile
function* profileGetSaga() {
    const state = yield select();
    let profileData;
    const option = {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Token ${state.auth.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/profile/', option);
        if (!response.ok) {
            alert('profile 불러오기 실패');
            return;
        }
        profileData = yield response.json();
    } catch (e) {
        alert('profile 불러오기 실패 : ' + e);
        return;
    }
    yield put(actions.profileRefresh(profileData));
}

function* profilePostSaga(action) {
    const state = yield select();
    const option = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Token ${state.auth.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    option.body = JSON.stringify(action.user);
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/profile/', option);
        if (!response.ok) {
            alert('post failed!');
            return;
        }
    } catch (e) {
        alert('post failed ' + e);
        return;
    }
    //yield call(profileGetSaga);
}

//workout
function* workoutGetSaga() {
    const state = yield select();
    let workoutData;
    const option = {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Token ${state.auth.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/workout/', option);
        if (!response.ok) {
            alert('workout 불러오기 실패');
            return;
        }
        workoutData = yield response.json();
    } catch (e) {
        alert('workout 불러오기 실패 : ' + e);
        return;
    }
    yield put(actions.workoutRefresh(workoutData));
}

function* workoutPostSaga(action) {
    const state = yield select();
    let workoutData;
    const option = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Token ${state.auth.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    option.body = JSON.stringify(action.workouts);
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/workout/', option);
        if (!response.ok) {
            alert('post failed!');
            return;
        }
        workoutData = yield response.json();
    } catch (e) {
        alert('post failed ' + e);
        return;
    }
    yield put(actions.workoutRefresh(workoutData));
}

//history
function* historyGetSaga() {
    const state = yield select();
    let historyData;
    const option = {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Token ${state.auth.token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        mode: 'cors',
    };
    try {
        const response = yield call(fetch, 'http://imnotkind.xyz:8000/history/', option);
        if (!response.ok) {
            alert('history 불러오기 실패');
            return;
        }
        historyData = yield response.json();
    } catch (e) {
        alert('history 불러오기 실패 : ' + e);
        return;
    }
    yield put(actions.historyRefresh(historyData.history));
}

export default function* rootSaga(api) {
    yield all([
        takeLatest(constants.LOGIN, loginSaga),
        takeLatest(constants.REGISTER, registerSaga),
        takeLatest(constants.PROFILE_POST, profilePostSaga),
        takeLatest(constants.PROFILE_GET, profileGetSaga),
        takeLatest(constants.WORKOUT_POST, workoutPostSaga),
        takeLatest(constants.WORKOUT_GET, workoutGetSaga),
        takeLatest(constants.HISTORY_GET, historyGetSaga),
    ]);
}
