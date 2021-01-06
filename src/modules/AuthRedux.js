/* eslint-disable default-case */
// Login 관련 Actions
export const Login = (payload) => {
    return {
        type: "LOGIN",
        token: payload
    }
}

export const Logout = () => {
    return {
        type: "LOGOUT"
    }
}

//User info 관련 Actions
export const setUserInfo = (user) => {
    return {
        type: "SET_USER_INFO",
        user
    }
}

export const removeUserInfo = () => {
    return {
        type: "REMOVE_USER_INFO"
    }
}


export const isLoggedReducer = (state={loggedin: false, token: null}, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("login token");
            console.log(action.token.token);
            return {loggedin: true, token: action.token.token}
        case "LOGOUT":
            console.log("logout!");
            return {loggedin : false, token: null}
        default:
            return state
    }
}

const defaultUserInfo = {
    "id": "",
  "username": "",
  "token" : "",
  "created_at": "",
  "updated_at": "",
  "email": "",
  "last_login": "",
  "nickname": "",
  "picture": "",
  "reputation": 0,
  "title":"",
  "intro":"",
  "question_count": 0,
  "answer_count":0,
  "bookmark_count":0
}

export const userInfoReducer = (state = defaultUserInfo, action) => {
    switch (action.type) {
        case "SET_USER_INFO" :
            console.log("setting user info");
            console.log(action.user);
            localStorage.setItem("token", action.user.payload.token)
            return action

        case "REMOVE_USER_INFO" :
            console.log("remove user info");
            return defaultUserInfo
        default:
            return state
    }
}