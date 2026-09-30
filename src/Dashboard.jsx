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
import Orders from "./orders";
import User from "./User"
import Offer from "./Offer";
import { createRoot } from "react-dom/client";

function Dashboard(){
    const user = JSON.parse(localStorage.getItem("User"))
    const [page,setPage] = useState("dashboard")
    return(
        <div className="w-full">
            <div className="w-full max-w-full h-auto lg:h-[100px] bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 lg:gap-0 py-4 lg:py-0 px-4 lg:px-0">
                <h1 className="text-2xl lg:text-4xl text-center lg:text-left inline lg:pl-[10px] text-[#c09a85] w-full lg:w-[500px]">Coffe Shop Dashboard</h1>
                <div className="items-center flex lg:block gap-2">
                    <h1 className="text-right text-black text-lg lg:text-2xl lg:pr-[10px] font-bold inline">{user.name}</h1>
                    <img src={dashboardIcon} className="w-8 h-8 lg:w-10 lg:h-10 inline"></img>
                    <div id="content"></div>
                </div>
            </div>
            <div className="w-full lg:w-[250px] bg-white text-right px-4 lg:px-0 lg:ml-auto lg:mr-[30px] static lg:absolute lg:top-[150px] lg:right-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-0 py-3 lg:py-0" id="list">
                <div className="hover:bg-gray-100 rounded-[10px] shrink-0" onMouseEnter={() =>{ let orderIcon = document.getElementById("order-icon") 
                    orderIcon.src=orderGray 
                    orderIcon.style.borderRadius="10px" }} 
                    onMouseLeave={() =>{ 
                        let orderIcon = document.getElementById("order-icon") 
                        orderIcon.src=order }}> 
                        <a href="#orders" onClick={() => setPage("orders")
                        } className="w-auto lg:w-[250px] h-[50px] flex flex-row-reverse justify-center lg:justify-between items-center px-3 lg:px-0"> 
                            <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={order} id="order-icon"></img> 
                            <p className="text-black text-base lg:text-xl lg:pl-[120px]">سفارش ها</p> 
                            </a>
                </div>
                <div className="lg:mt-[10px] hover:bg-gray-100 rounded-[10px] shrink-0"
                onMouseEnter={() =>{ 
                    let offerIcon = document.getElementById("offer-icon") 
                    offerIcon.src=offerGray 
                    offerIcon.style.borderRadius="10px" }} 
                    onMouseLeave={() =>{ 
                    let offerIcon = document.getElementById("offer-icon") 
                    offerIcon.src=offer }} > 
                    <a href="#offer" onClick={() => setPage("offer")} className="w-auto lg:w-[250px] h-[50px] flex flex-row-reverse justify-center lg:justify-between items-center px-3 lg:px-0"> 
                    <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={offer} id="offer-icon"></img> 
                    <p className="text-black text-base lg:text-xl lg:pl-[120px]">کد تخفیف</p> 
                    </a> 
                </div>
                <div className="lg:mt-[10px] hover:bg-gray-100 rounded-[10px] shrink-0"
                onMouseEnter={() =>{ let userIcon= document.getElementById("user-icon") 
                    userIcon.src=accountGray 
                    userIcon.style.borderRadius="10px" }} 
                onMouseLeave={() =>{ let userIcon = document.getElementById("user-icon") 
                            userIcon.src=account }}> 
                <a href="#account" onClick={() => setPage("user")} className="w-auto lg:w-[250px] h-[50px] flex flex-row-reverse justify-center lg:justify-between items-center px-3 lg:px-0"> 
                <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={account} id="user-icon"></img> 
                <p className="text-black text-base lg:text-xl lg:pl-[90px]">حساب کاربری</p> 
                </a> 
                </div>
                <div className="lg:mt-[10px] hover:bg-gray-100 rounded-[10px] shrink-0" 
                onMouseEnter={() =>{ let logoutIcon = document.getElementById("logout-icon") 
                logoutIcon.src=logoutGray 
                logoutIcon.style.borderRadius="10px" }} 
                onMouseLeave={() =>{ let logoutIcon = document.getElementById("logout-icon") 
                logoutIcon.src=logout }}> 
                <a href="/login" className="w-auto lg:w-[250px] h-[50px] flex flex-row-reverse justify-center lg:justify-between items-center px-3 lg:px-0" onClick={() =>{
                    const notUser = JSON.parse(localStorage.removeItem("User"))
                    if(notUser){
                        alert("خروج انجام شد")
                    }
                }}> 
                    <img className="w-7 h-7 lg:w-8 lg:h-8 lg:ml-auto" src={logout} id="logout-icon"></img> 
                    <p className="text-black text-base lg:text-xl lg:pl-[30px]">خروج از حساب کاربری</p> 
                    </a> 
                    </div>
            </div>
            <div className="w-full bg-white px-4 lg:px-0 mt-4 lg:mt-0 pb-10 lg:pb-0">
                {page === "dashboard" &&(<div className="w-full max-w-[700px] h-[300px] lg:h-[400px] bg-gray-100 mt-6 lg:mt-[50px] mx-auto lg:mx-0"> 
                    </div>)}
                {page==="orders" && <Orders/>}
                {page==="user" && <User/>}
                {page==="offer" && <Offer/>}
            </div>
        </div>
    )
}
export default Dashboard;