import {useState, Fragment} from 'react'
import GitHubLogin from 'react-github-login';
import axios from 'axios'
import {login} from '../../axios'
import * as config from '../../config'
import {Login, Logout, setUserInfo, removeUserInfo} from '../../modules/AuthRedux'
import {useSelector, useDispatch} from 'react-redux'


export const Signin = () => {
    const token = localStorage.getItem("token")
    const isLoggedin = useSelector(state => state.isLoggedReducer.isloggedin)
    const dispatch = useDispatch();


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [warn, setWarn] = useState("")
    const {setAuthTokens} = useAuth()
    const usernameOnChange = (username) => {
        setWarn("")
        setUsername(()=>username)
    }

    const passwordOnChange = (password) => {
        setWarn("")
        setPassword(password)
    }

    const loginwthUsername = async () => {
        await axios.put('http://localhost:8000/user/login/', {username: username, password : password}, null)
                .then(res => {
                    dispatch(setUserInfo({payload: res}))
                    dispatch(Login({token : res.token}))
                })
                .catch(e => {
                    console.log(e);
                    setWarn("Authentication failed")
                })
    }
    
    const onSuccess = async({code}) => {
        await token_instance.post("https://github.com/login/oauth/access_token/", {params:{
            client_username: config.GITHUB_CLIENT_USERNAME,
            client_secret: config.GITHUB_CLIENT_SECRET,
            code: code,
            redirect_uri: "http://localhost:8000/"
        }})
        .then(async res => {
            const token = res.access_token.substring(0,40)
            //redux에 토큰 저장
            console.log("github token acquired");
            await axios.put('http://localhost:8000/user/login', {params:{'github_token' : token}})
                .then(res => {

                    dispatch(setUserInfo({payload: res}))
                    dispatch(Login({token : res.token}))

                })
                .catch(e => {
                    console.log(e);
                    setWarn("Authentication failed")
                })
        })
        .catch(e => {
            console.log(e);
            alert("Failed to acquire Token from Github")
        })
    }

    const onFailure = (e) => {
        console.log(e);
    }
    if(isLoggedin) {
        return (
            <Fragment>
                You are Already Logged in
            </Fragment>
        )
    }
    return (
        <Fragment> 
            <GitHubLogin clientId="1bc89bcdb1f71159016b"
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri="http://localhost:8000/"
            buttonText="Login with Github"/>

            <div className="login-box">
                <div>
                    Login ith username and Password
                </div>
                <input className="id-input" value={username} placeholder="input yout username" onChange={(e)=>{usernameOnChange(e.target.value)}}/>
                <input className="password-input" value={password} type="password" placeholder="inpur your Password" onChange={(e)=>{passwordOnChange(e.target.value)}}/> 

                <button className="login-btn" onClick={loginwthUsername}>Login</button>
                <div className="warn">{warn}</div>
            </div>
        </Fragment>
       
    )
}

export default Signin;

