import { useState } from "react";
import React from "react";
import { Router } from "react-router-dom";
import './App.css'
import './index.css'
import coffeshop from './assets/coffeshop.png'
import homeIcon from './assets/home-icon.png'
import shopIcon from './assets/shop-icon.png'
import accountIcon from './assets/account-icon.png'
import searchIcon from './assets/search-icon.png'

function Login(){
    return(
    <div>
    <div className="bg-gray-200 w-full h-auto lg:h-[120px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-6 py-4 lg:py-0 gap-4 lg:gap-0" id="header">
      <img src={coffeshop} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex" />

      <div className="items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#bf9075] font-bold text-center inline">Coffe Shop</h1>
        <p className="text-base md:text-lg lg:text-xl text-[#d0ac97] font-thin text-center">This is test project of fake coffe shop</p>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <a href="/shop" className="inline-flex w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"><img src={shopIcon} /></a>
        <a className="inline-flex cursor-pointer w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" onClick={() =>{
          if(user){
            window.location.href="/dashboard"
          }
          else{
            window.location.href="/account"
          }
        }}><img src={accountIcon} /></a>
        <a href="/" className="inline-flex w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"><img src={homeIcon} /></a>
      </div>
    </div>
    <div className="bg-gray-100 flex w-full min-h-screen justify-center items-center text-center px-4 lg:px-0">
             <div className="bg-gray-200 w-full h-auto lg:h-[600px] max-w-[600px] lg:max-w-[600px] text-center rounded-[20px] pt-4 lg:pt-[10px] pb-6 lg:pb-0 mt-6 lg:mt-[50px]">
                <h1 className="text-black text-center text-2xl lg:text-4xl font-bold">صفحه ورود</h1>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto px-4 lg:px-0">
                    <input type="text" className="text-xl lg:text-3xl w-[350px] lg:w-[480px] mt-3 lg:mt-[10px] border-b border-black outline-none bg-gray-200" id="name" name="name"></input>
                    <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>نام</p>
                </div>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto mt-6 lg:mt-[40px] px-4 lg:px-0">
                     <input type="password" className="text-xl lg:text-3xl w-[310px] lg:w-[410px] border-b border-black outline-none bg-gray-200" id="password" name="password"></input>
                     <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>رمز عبور</p>
                </div>
                <button className="bg-[#d2b3a1] w-full max-w-[300px] lg:w-[300px] h-11 lg:h-[50px] mt-8 lg:mt-[50px] text-white mx-auto block" onClick={async() =>{
                    let nameValue = document.getElementById("name").value
                    let passwordValue = document.getElementById("password").value
                    let loginError = document.getElementById("login-error")
                    const login = async() =>{
                        const res = await fetch("/api/login",{
                            method:"POST",
                            headers:{
                                "Content-Type": "application/json"
                            },
                            body:JSON.stringify({
                                name:nameValue,
                                password:passwordValue
                            })
                        })
                        const data = await res.json()
                        console.log("loginning...")
                        if(data.success){
                            localStorage.setItem("User",JSON.stringify(data.user))
                            window.location.href="/dashboard"
                        }
                        else{
                            loginError.textContent="اطلاعات وارد شده نادرست می باشد"
                        }
                    }
                    await login()
                }}>ورود</button>
                 <p id="login-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                 <a href="/account" className="text-lg lg:text-xl mt-4 lg:mt-[20px] block"><p className="text-center lg:text-right">آیا تا به حال ثبت نام نکرده اید ؟</p></a>
            </div>
        </div>
    </div>
    );
}
export default Login;