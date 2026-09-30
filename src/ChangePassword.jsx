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
import accountGray from './assets/account-gray.png'
import backIcon from './assets/back-icon.png'

function ChangePassword(){
    const user = JSON.parse(localStorage.getItem("User"))
    const name = user.name
    const [account,setAccount] = useState(null)
    
    useEffect(() =>{
        const getUser = async() =>{
            const res = await fetch("/api/accounts")
            const users = await res.json()
            const account = users.find(user => user.name === name)
            if(account){
                setAccount(account)
            }   
        }
        getUser()
    },[])
    return(
        <div className="bg-gray-100 w-full h-auto lg:h-[1200px] px-4 lg:px-0 pb-10 lg:pb-0">
            <a href="/dashboard#account">
                <img src={backIcon} className="w-10 h-10 lg:w-14 lg:h-14"></img>
            </a>
            <img src={accountGray} className="w-24 h-24 lg:w-[200px] lg:h-[200px] pt-6 lg:pt-[30px] mx-auto lg:mx-0 lg:ml-[860px] block"></img>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 lg:mt-[50px]">
                <input type="password" id="password" className="bg-gray-100 w-full max-w-[300px] lg:w-[300px] h-11 lg:h-[50px] text-lg lg:text-2xl border border-gray-700 rounded-[10px]"
                onInput={() => {
                    let password = document.getElementById("password")
                    let passwordError = document.getElementById("password-error")
                    const currentPassword = account?.password
                    if(password.value != currentPassword){
                        passwordError.textContent="رمز عبور وارد شده با رمز عبور اصلی مغایرت دارد*"
                    }
                    else{
                        passwordError.textContent=""
                    }
                }}></input>
                <p className="text-black font-bold text-xl lg:text-3xl"><span dir="ltr">:</span>رمز عبور</p>
            </div>
            <p id="password-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right mt-1 lg:mt-0 lg:pr-[700px]"></p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 lg:mt-[50px]">
                <input type="password" id="new-password" className="bg-gray-100 w-full max-w-[300px] lg:w-[300px] h-11 lg:h-[50px] text-lg lg:text-2xl border border-gray-700 rounded-[10px]"
                onInput={() => {
                    let newPassword = document.getElementById("new-password")
                    let newError = document.getElementById("new-error")
                    const nums = ["0","1","2","3","4","5","6","7","8","9"]
                        
                        if(newPassword.value.length >= 8){
                            newError.textContent=""
                            if(newPassword.value.includes(nums[0]) || newPassword.value.includes(nums[1]) ||
                            newPassword.value.includes(nums[2]) || newPassword.value.includes(nums[3]) || newPassword.value.includes(nums[4]) ||
                            newPassword.value.includes(nums[5]) || newPassword.value.includes(nums[6]) || newPassword.value.includes(nums[7]) ||
                            newPassword.value.includes(nums[8]) || newPassword.value.includes(nums[9])){
                                newError.textContent=""
                            }else{
                                newError.textContent="رمز عبور باید دارای عدد باشد*"
                            }
                        }else{
                            newError.textContent="رمز عبور نباید کمتر از 8 حرف باشد*"
                        }
                }}></input>
                <p className="text-black font-bold text-xl lg:text-3xl"><span dir="ltr">:</span>رمز عبور جدید</p>
            </div>
            <p id="new-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right mt-1 lg:mt-0 lg:pr-[700px]"></p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 lg:mt-[50px]">
                <input type="password" id="confirm-password" className="bg-gray-100 w-full max-w-[300px] lg:w-[300px] h-11 lg:h-[50px] text-lg lg:text-2xl border border-gray-700 rounded-[10px]"
                onInput={() => {
                    let newPassword = document.getElementById("new-password")
                    let confirmPassword = document.getElementById("confirm-password")
                    let confirmError = document.getElementById("confirm-error")
                    if(confirmPassword.value == newPassword.value){
                        confirmError.textContent=""
                    }
                    else{
                        confirmError.textContent="تکرار رمز عبور جدید با رمز عبور جدید مطابقت ندارد*"
                    }
                }}></input>
                <p className="text-black font-bold text-xl lg:text-3xl"><span dir="ltr">:</span>تکرار رمز عبور جدید</p>
            </div>
            <p id="confirm-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right mt-1 lg:mt-0 lg:pr-[700px]"></p>

            <button className="bg-[#d2a286] w-full max-w-[500px] lg:w-[500px] h-12 lg:h-[50px] text-center text-white text-lg lg:text-2xl rounded-[20px] mt-8 lg:mt-[50px] ml-auto lg:ml-[700px] block" onClick={async() =>{
                const password = document.getElementById("password")
                const confirmPassword = document.getElementById("confirm-password")
                const newPassword = document.getElementById("new-password")
                const buttonError = document.getElementById("button-error")
                const name = account?.name
                const currentPassword = account?.password
                const changePassword = async() =>{
                    const req = await fetch("/api/edit-password",{
                        method: "POST",
                        headers:{
                             "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: name,
                            newPassword: newPassword.value
                        })
                    })
                    const data = await req.json()
                    if(data.success){
                        buttonError.style.color="green"
                        buttonError.textContent="رمز عبور شما با موفقیت تغییر کرد"
                    }
                    else{
                        buttonError.textContent="مشکلی پیش آمده است*"
                    }
                }
                if(password.value != currentPassword){
                    alert("اطلاعات وارد شده صحیح نمی باشد")
                }
                else{
                    const nums = ["0","1","2","3","4","5","6","7","8","9"]
                        if(newPassword.value.length >= 8){
                            if(newPassword.value.includes(nums[0]) || newPassword.value.includes(nums[1]) ||
                            newPassword.value.includes(nums[2]) || newPassword.value.includes(nums[3]) || newPassword.value.includes(nums[4]) ||
                            newPassword.value.includes(nums[5]) || newPassword.value.includes(nums[6]) || newPassword.value.includes(nums[7]) ||
                            newPassword.value.includes(nums[8]) || newPassword.value.includes(nums[9])){
                                if(confirmPassword.value == newPassword.value){
                                    await changePassword()
                                }
                                else{
                                    alert("اطلاعات وارد شده صحیح نمی باشد")
                                }
                            }else{
                                alert("اطلاعات وارد شده صحیح نمی باشد")
                            }
                        }else{
                            alert("اطلاعات وارد شده صحیح نمی باشد")
                        }
                }
            }}>تغییر رمز عبور</button>
            <p id="button-error" className="text-red-500 text-sm lg:text-[16px] text-center lg:text-right pt-2 lg:pt-[20px] lg:pr-[700px]"></p>
        </div>
    )
}
export default ChangePassword;