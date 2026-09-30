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
import dashboardIcon from './assets/dashboard-icon.png'
import product from './assets/product.png'
import order from './assets/order-icon.png'
import offer from './assets/offer-icon.png'
import loves from './assets/loves-icon.png'
import account from './assets/user-icon.png'
import logout from './assets/logout-icon.png'
import orderGray from './assets/order-icon-gray.png'
import offerGray from './assets/offer-icon-gray.png'
import lovesGray from './assets/loves-icon-gray.png'
import accountGray from './assets/user-icon-gray.png'
import logoutGray from './assets/logout-icon-gray.png'
import accountPhoto from './assets/account.png'
import cardPhoto from './assets/card-icon.png'
import passwordPhoto from './assets/change-password.png'
import logoutPhoto from './assets/logout.png'
import userGray from './assets/user-gray.png'
import passwordGray from './assets/change-password-gray.png'
import cardGray from './assets/card-icon-gray.png'
import logoutGrayy from './assets/logout-gray.png'

function User(){
    const user = JSON.parse(localStorage.getItem("User"))
    useEffect(() =>{
        const getUser = async() =>{
            const res = await fetch("/api/accounts",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name:user.name
                })
            })    
        const account = await res.json()
        if(account.success){
            let username = document.getElementById("username")
            let email = document.getElementById("email")
            username.textContent=account.message.username
            email.textContent=account.message.email
        }
        else{
            alert("اطلاعات درست نمی باشد")
        }
        }
        getUser()
    },[])
    return(
        <div className="w-full px-4 lg:px-0">
            <div className="bg-gray-100 w-full max-w-[500px] lg:w-[500px] h-auto lg:h-[800px] rounded-[20px] mx-auto lg:mx-0 lg:ml-[710px] mt-6 lg:mt-[50px] pb-6 lg:pb-0">
                <img className="w-20 h-28 lg:w-[100px] lg:h-[150px] mx-auto lg:mx-0 lg:ml-[200px] pt-6 lg:pt-[50px]" src={accountPhoto}></img>
                <h1 className="text-black text-2xl lg:text-3xl font-bold text-center" id="username"></h1>
                <p className="text-lg lg:text-xl text-center lg:text-center mt-1 lg:mt-[-20px]" id="email"></p>
                <div className="w-full lg:w-[500] h-auto lg:h-[500px] mt-8 lg:mt-[100px] px-4 lg:px-0 lg:mr-[50px] text-center lg:text-right">
                    <div className="hover:bg-gray-200 w-full lg:w-[500px]" onMouseEnter={() =>{
                        let passwordIcon = document.getElementById("change-password")
                        passwordIcon.src=passwordGray
                    }}
                    onMouseLeave={() =>{
                        let passwordIcon = document.getElementById("change-password")
                        passwordIcon.src=passwordPhoto
                    }}>
                        <a href="/change-password" className="w-full lg:w-[500px] h-[50px] flex flex-row-reverse justify-center lg:justify-normal items-center lg:items-right">
                            <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={passwordPhoto} id="change-password"></img>
                            <p className="text-black text-base lg:text-xl lg:pl-[350px]">تغییر رمز عبور</p>
                        </a>
                    </div>
                    <div className="mt-2 lg:mt-[10px] hover:bg-gray-200 w-full lg:w-[500px]" onMouseEnter={() =>{
                        let cardIcon = document.getElementById("add-card")
                        cardIcon.src=cardGray
                    }}
                    onMouseLeave={() =>{
                        let cardIcon = document.getElementById("add-card")
                        cardIcon.src=cardPhoto
                    }}>
                        <a href="/add-card" className="w-full lg:w-[500px] h-[50px] flex flex-row-reverse justify-center lg:justify-normal items-center lg:items-right">
                            <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={cardPhoto} id="add-card"></img>
                            <p className="text-black text-base lg:text-xl lg:pl-[360px]">افزودن کارت</p>
                        </a>
                    </div>
                    <div className="mt-2 lg:mt-[10px] hover:bg-gray-200 w-full lg:w-[500px]" onMouseEnter={() =>{
                        let passwordIcon = document.getElementById("logout")
                        passwordIcon.src=logoutGrayy
                    }}
                    onMouseLeave={() =>{
                        let passwordIcon = document.getElementById("logout")
                        passwordIcon.src=logoutPhoto
                    }}>
                        <a href="/login" className="w-full lg:w-[500px] h-[50px] flex flex-row-reverse justify-center lg:justify-normal items-center lg:items-right" onClick={() =>{
                        const notUser = JSON.parse(localStorage.removeItem("User"))
                        if(notUser){
                            alert("خروج انجام شد")
                        }
                    }}>
                            <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={logoutPhoto} id="logout"></img>
                            <p className="text-red-500 text-base lg:text-xl lg:pl-[420px]">خروج</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;