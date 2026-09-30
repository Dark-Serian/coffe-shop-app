import { useEffect, useState } from "react";
import React from "react";
import { Router} from "react-router-dom";
import './App.css'
import './index.css'
import coffeshop from './assets/coffeshop.png'
import homeIcon from './assets/home-icon.png'
import shopIcon from './assets/shop-icon.png'
import accountIcon from './assets/account-icon.png'
import searchIcon from './assets/search-icon.png'
import Slider from './Slider'
import Background from './assets/background.png'
import Products from './Products'
import logo from './assets/coffeshop-logo.png'
import Login from './Login'

function Account(){
    fetch("/api/")
    .then(res => res.text())
    .then(data => console.log(data))
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
            <div className="bg-gray-200 w-full h-auto lg:h-[900px] max-w-[600px] lg:max-w-[600px] text-center rounded-[20px] pt-4 lg:pt-[10px] pb-6 lg:pb-0 mt-6 lg:mt-[50px]">
                <h1 className="text-black text-center text-2xl lg:text-4xl font-bold">ثبت نام</h1>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto px-4 lg:px-0">
                    <input type="text" className="text-xl lg:text-3xl w-[300px] lg:w-[480px] mt-3 lg:mt-[10px] border-b border-black outline-none bg-gray-200" id="name" name="name" onInput={() =>{
                        let name = document.getElementById("name")
                        let nameError = document.getElementById("name-error")
                        if(name.value.length < 4){
                            nameError.textContent="نام کاربری شما نمی تواند کمتر از 4 حرف باشد*"
                        }
                        else if(name.value.length >= 4){
                            nameError.textContent=""
                        }
                    }}></input>
                    <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>نام</p>
                </div>
                <p id="name-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto mt-6 lg:mt-[40px] px-4 lg:px-0">
                    <input type="email" className="text-xl lg:text-3xl w-[280px] lg:w-[450px] border-b border-black outline-none bg-gray-200" id="email" name="email" onInput={() =>{
                        let email = document.getElementById("email")
                        let emailError = document.getElementById("email-error")
                        let mail = email.value
                        const isValid = "@"
                        let domain = mail.split("@")[1].toLowerCase()
                        const urls = ["gmail.com","outlook.com","email.com","chmail.ir","yahoo.com"]
                        if(mail.includes(isValid) && urls.includes(domain)){
                            emailError.textContent=""
                        }else{
                            emailError.textContent="ایمیل وارد شده صحیح نمی باشد*"
                        }
                        
                    }}></input>
                    <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>ایمیل</p>
                </div>
                <p id="email-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto mt-6 lg:mt-[30px] px-4 lg:px-0">
                    <input type="password" className="text-xl lg:text-3xl w-[250px] lg:w-[410px] border-b border-black outline-none bg-gray-200" id="password" name="password" onInput={() =>{
                        let password = document.getElementById("password")
                        let passwordError = document.getElementById("password-error")
                        const nums = ["0","1","2","3","4","5","6","7","8","9"]
                        
                        if(password.value.length >= 8){
                            passwordError.textContent=""
                            if(password.value.includes(nums[0]) || password.value.includes(nums[1]) ||
                            password.value.includes(nums[2]) || password.value.includes(nums[3]) || password.value.includes(nums[4]) ||
                            password.value.includes(nums[5]) || password.value.includes(nums[6]) || password.value.includes(nums[7]) ||
                            password.value.includes(nums[8]) || password.value.includes(nums[9])){
                                passwordError.textContent=""
                            }else{
                                passwordError.textContent="رمز عبور باید دارای عدد باشد*"
                            }
                        }else{
                            passwordError.textContent="رمز عبور نباید کمتر از 8 حرف باشد*"
                        }
                    }}></input>
                    <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>رمز عبور</p>
                </div>
                <p id="password-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                <div className="w-full max-w-[600px] lg:w-[600px] h-auto lg:h-[50px] mx-auto mt-6 lg:mt-[30px] px-4 lg:px-0">
                    <input type="password" className="text-xl lg:text-3xl w-full max-w-[210px] lg:max-w-[350px] border-b border-black outline-none bg-gray-200" id="confirm" name="confirm" onInput={() =>{
                        let password = document.getElementById("password")
                        let confirm = document.getElementById("confirm")
                        let confirmError = document.getElementById("confirm-error")
                        if(confirm.value == password.value){
                            confirmError.textContent=""
                        }else{
                            confirmError.textContent="عبارت تکرار رمز عبور نباید با رمز عبور مغایرت داشته باشد*"
                        }
                    }}></input>
                    <p className="text-center text-think text-xl lg:text-3xl inline" dir="ltr"><span>:</span>تکرار رمز عبور</p>
                </div>
                <p id="confirm-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                <button className="bg-[#d2b3a1] w-full max-w-[300px] lg:w-[300px] h-11 lg:h-[50px] mt-8 lg:mt-[50px] text-white mx-auto block" onClick={async () =>{
                    let name = document.getElementById("name")
                    let email = document.getElementById("email")
                    let password = document.getElementById("password")
                    let confirmPassword = document.getElementById("confirm")
                    let singupError = document.getElementById("singup-error")
                    let nameValue = name.value
                    let emailValue = email.value
                    let passwordValue = password.value
                    let confirmValue = confirmPassword.value
                    const sendData = async () =>{
                        const req = await fetch("/api/add-account",{
                            method:"POST",
                            headers:{
                                 "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name : nameValue,
                                email : emailValue,
                                password : passwordValue
                            })
                        }) 
                        const data = await req.json()
                        if(data.success){
                            window.location.href="/login"
                        }else{
                            singupError.textContent="ایمیل یا نام کاربری قبلا ثبت شده است"
                            console.log("ایمیل یا نام کاربری قبلا ثبت شده است")
                        }   
                    }
                    const isValid = "@"
                    let domain = emailValue.split("@")[1].toLowerCase()
                    const urls = ["gmail.com","outlook.com","email.com","chmail.ir","yahoo.com"]
                    const nums = ["0","1","2","3","4","5","6","7","8","9"]
                    if(nameValue.length >= 4){
                        if(emailValue.includes(isValid) && urls.includes(domain)){
                            if(passwordValue.length >= 8 && password.value.includes(nums[0]) || password.value.includes(nums[1]) ||
                            password.value.includes(nums[2]) || password.value.includes(nums[3]) || password.value.includes(nums[4]) ||
                            password.value.includes(nums[5]) || password.value.includes(nums[6]) || password.value.includes(nums[7]) ||
                            password.value.includes(nums[8]) || password.value.includes(nums[9])){
                                if(confirmValue == passwordValue){
                                    await sendData()

                                }else{
                                    console.log("Its bad")
                                }
                            }else{
                                console.log("Its bad")
                            }
                        }else{
                            console.log("Its bad")
                        }
                    }else{
                        console.log("Its bad")
                    }
                }} formMethod="POST">ثبت نام</button>
                <p id="singup-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right px-4 lg:px-0"></p>
                <a href="/login" target="_blank" className="text-lg lg:text-xl mt-8 lg:mt-[50px] block"><p className="text-center lg:text-right">آیا قبلا ثبت نام کرده اید ؟</p></a>
            </div>
        </div>
        </div>
    )
}
export default Account;