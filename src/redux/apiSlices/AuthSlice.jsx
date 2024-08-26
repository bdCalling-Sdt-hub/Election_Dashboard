
import { getFromLocalStorage } from "../../Util/local-stroage";
import { api } from "../api/apislice"; 
const resetToken = getFromLocalStorage("resetToken")

const AuthSlices = api.injectEndpoints({
    endpoints:(builder)=>({ 
        // login 
        login:builder.mutation({
            query:(value)=>{
                return{
                    url:"/auth/login" ,
                    method:"POST" ,
                    body: value
                }
            }
        })  ,
          
        // forget password  
        forgetPass: builder.mutation({
            query:(value)=>{
                return{
                    url:"/auth/forget-password" ,
                    method:"POST" ,
                    body: value
                }
            }
        }) , 

        // send otp  
        sendOtp: builder.mutation({
            query:(value)=>{
                return{
                    url:"/auth/verify-email" ,
                    method:"POST" ,
                    body: value
                }
            }
        })  ,
        // reset Password  
resetPass: builder.mutation({
    query:(value)=>({
        url:"/auth/reset-password" ,
        headers: {authorization: resetToken},
        method:"POST" ,
        body: value
    })
}) ,

// get profile  
getProfile:builder.query({
    query:()=>"/user/profile"
}) ,

// update profile  
updateProfile: builder.mutation({
    query:(data)=>{
        return{
            url:"/user/update-profile" ,
            method:"PATCH" ,
            body: data
        }
    }
}) , 
// change password  
changePass:builder.mutation({
    query:(value)=>{
        return{
            url:"/auth/change-password" ,
            method:"POST" ,
            body: value
        }
    }
})
    })
}) 

export const {useLoginMutation , useForgetPassMutation , useSendOtpMutation , useResetPassMutation , useGetProfileQuery , useUpdateProfileMutation , useChangePassMutation}  = AuthSlices