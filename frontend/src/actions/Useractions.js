import axios from 'axios'
import { USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
     } from '../constants/Userconstants'



    export const logout=()=>(dispatch)=>{
        dispatch({type:USER_LOGOUT})
        localStorage.removeItem('userInfo')
    }
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const{data}=await axios.post('/api/user/login/',
        {'username':email,'password':password},config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail?error.response.data.detail:error.response
        })
    }
}


export const register=(name,email,password)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const{data}=await axios.post(`/api/user/register/`,{ 'name': name, 'email': email, 'password': password },config)

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail?error.response.data.detail:error.response
        })
    }
}