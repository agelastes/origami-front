import {anLogin, LOGIN_FALSE, LOGIN_TRUE} from "../constants/isLoginConstants";

export const isLoginReducer = (loginState = {status: false, path: '/autorisation', name: "Авторизация", users: ""}, action) => {
    switch (action.type) {
        case LOGIN_TRUE: {
            localStorage.setItem('token', action.token);
            localStorage.setItem('login', action.login);
            localStorage.setItem('password', action.password);
            localStorage.setItem('role', action.role);
            loginState = {status: true, path: '/profile', name: "Профиль", login: action.login, users: ""};
            if (action.role === 3) loginState.users = "Пользователи";
            console.log(action.role);
            return loginState;
            break;
        }
        case LOGIN_FALSE: {
            loginState = {status: false, path: '/autorisation', name: "Авторизация", users: ""};
            localStorage.setItem('token', '');
            localStorage.setItem('login', '');
            localStorage.setItem('password', '');
        }
        default: {
            return loginState;
        }
    }
    return loginState;
};