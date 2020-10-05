import {UserListState} from "./reducer";

export const ADD_NEW_USER = "ADD_NEW_USER";
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export interface Action {
    readonly type: string,
    readonly payload: any,
}

export interface NewUserModel {
    name: string;
    email: string;
    age?: number;
}

export interface AddUserAction extends Action {
    payload:  NewUserModel,
}

export interface LoadAllUsersAction extends Action{
    payload: NewUserModel[],
}


export const AddNewUserAction = (newUser: NewUserModel): AddUserAction => ({
    type: ADD_NEW_USER,
    payload: newUser,
});


export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (payload: UserListState) => ({ type: RECEIVE_API_DATA, payload });