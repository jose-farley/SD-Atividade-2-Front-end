import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authentication"
import { NavLink, useNavigate } from "react-router-dom"
import style from './Login.module.css'
export function LoginScreen(){
    useEffect(()=>{
        gapi.load("client:auth2", ()=>{
            gapi.auth2.init({clientId:"406424206029-7btno94827ho5ibo9hgam2g7hru4bs2b.apps.googleusercontent.com"})
        })
    }, [])

    const {logar} = useContext(AuthContext)
    const navigate = useNavigate()

    async function handleSuccess(response:any){
        let result = await response
        logar(result.profileObj)
        navigate("inicio")
    }
    return (
        <div className={style.container}>
            <h1 className={style.title}>Chapter Chatter</h1>
            <GoogleLogin 
                clientId="406424206029-7btno94827ho5ibo9hgam2g7hru4bs2b.apps.googleusercontent.com"
                onSuccess={handleSuccess}
                onFailure={handleSuccess}
            />
        </div>
    )
}