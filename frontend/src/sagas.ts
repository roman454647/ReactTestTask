import { call, put, takeLatest, all } from "redux-saga/effects";

import {REQUEST_API_DATA, ADD_NEW_USER, receiveApiData, AddUserAction} from "./redux/action";
import { fetchData, addUserApi } from "./api";

function* getApiData() {
    try {
        // do api call
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

function* addUser(action: AddUserAction ) {
    try {
        // do api call
        const result = yield call(addUserApi, action.payload);
        console.log(result);
        if(result.status === 200){
            yield call(getApiData);
        }
    } catch (e) {
        console.log(e);
    }
}

function* getApiSaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* addUserSaga() {
    yield takeLatest(ADD_NEW_USER, addUser);
}

export default function* mySaga() {
    yield all([getApiSaga(), addUserSaga()])
}