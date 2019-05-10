import {LOGIN_TRUE} from "../constants/isLoginConstants";
import {LOGIN_FALSE} from "../constants/isLoginConstants";

export const loginTrue = (data) => {
    console.log(data.role);
    return {
        type: LOGIN_TRUE,
        login: data.login,
        token: data.token,
        password: data.password,
        role: data.role
    }
};

export const loginFalse = () => {
  return {
      type: LOGIN_FALSE
  }
};