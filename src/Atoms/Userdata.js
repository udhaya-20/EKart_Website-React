import {atom} from 'recoil';

export const UserSignupState = atom({

    key:"UserSignupState",
    default:
        {
            name:"",
            email:"",
            password:"",
        }
})

export const UserLoginState = atom({
    key:'UserLoginState',
    default:{
        email:"",
        password:""
    }
})