import {Action, NewUserModel, LoadAllUsersAction} from "./action";

export interface UserListState {
    users: NewUserModel[]
}

export const initState: UserListState = {
    users: [
        {
            name: "bob",
            email: "bob@bob.com",
            age: 11,
        }
    ]
}

export const changeListReducer = (action: LoadAllUsersAction) => {
    return {
        users: action.payload,
    }
}

export function UserReducer(state: UserListState, action: Action): UserListState  {
    switch(action.type) {
        case "RECEIVE_API_DATA":
            return changeListReducer(action);
        default:
            return state
    }
}