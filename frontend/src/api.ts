import {NewUserModel} from "./redux/action";

export const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const addUserApi = async (user: NewUserModel) => {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
        return response
    }catch (e) {
        console.log(e);
    }
}