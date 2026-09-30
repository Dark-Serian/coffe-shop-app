import { useEffect, useState } from "react";
import React from "react";
import { Router} from "react-router-dom";
import './App.css'
import './index.css'
import accountPhoto from './assets/account.png'

function Admin(){
    return(
        <div>
            <div className="bg-gray-100 flex w-full min-h-screen justify-center items-center text-center">
                <div className="bg-gray-200 w-full h-[600px] max-w-[800px] text-center rounded-[20px] pt-[10px] mt-[50px]">
                    <h1 className="text-black text-4xl font-bold text-center">صفحه مدیریت</h1>
                    <div className="w-[800px] h-[50px] mt-[40px]">
                        <input type="text" className="w-[300px] text-2xl bg-gray-200 border-b border-black outline-none text-right mr-[10px]" id="username" name="username"></input>
                        <p className="text-center text-think text-3xl inline" dir="ltr"><span>:</span>نام کاربری</p>
                    </div>
                    <div className="w-[800px] h-[50px] mt-[50px]">
                        <input type="password" className="w-[330px] text-2xl bg-gray-200 border-b border-black outline-none text-right mr-[10px]" id="password" name="password"></input>
                        <p className="text-center text-think text-3xl inline" dir="ltr"><span>:</span>رمز عبور</p>
                    </div>
                    <button className="bg-black w-[300px] h-[50px] mt-[70px] text-white text-2xl rounded-[10px]" onClick={async() =>{
                        let username = document.getElementById("username")
                        let password = document.getElementById("password")
                        const rust_key = "fab862fc97dbb716f555be7aa56401af1546fd64dee4b4e4b8df1186225d05d0"
                        let adminError = document.getElementById("admin-error")
                        const sendAdmin = async() => {
                            const res = await fetch("/api/admin", {
                                method:"POST",
                                headers:{
                                    "Content-Type": "application/json"
                                },
                                body:JSON.stringify({
                                    admin:username.value,
                                    password:password.value,
                                    key:rust_key
                                })
                            })
                            const data = await res.json()
                            console.log("account loged")
                            if(data.success){
                                localStorage.setItem("Admin",JSON.stringify(data.user))
                                window.location.href="/panel"
                            }
                            else{
                                adminError.textContent="اطلاعات درست نمی باشد*"
                            }
                        }
                        await sendAdmin()
                    }}>ورود</button>
                    <p id="admin-error" className="text-red-500 text-[16px] font-think text-right"></p>
                </div>
            </div>
        </div>
    )
}
export default Admin