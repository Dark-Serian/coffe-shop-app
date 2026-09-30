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

function Offer(){
    const user = JSON.parse(localStorage.getItem("User"))
    const [orders,setOrders] = useState([])
    const getOrders = async() =>{
        const req = await fetch("/api/orders",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:user.name
            })
        })
        const data = await req.json()
        setOrders(data.message)
    }
    useEffect(() =>{
        getOrders()
    },[])
    const offers = ["ACOFFEE-10","APPLE-20","BCGDHL-30","TALLMAN-40","VIAGRAHHT-50","CONSTRACTION-60"]
    const code = offers[Math.floor(Math.random() * 7)]
    let offer;
    if(code == "ACOFFEE-10"){
        offer="سفارش های شما با این کد شامل 10 درصد تخفیف می شود"
    }
    else if(code == "APPLE-20"){
        offer="سفارش های شما با این کد شامل 20 درصد تخفیف می شود"
    }
    else if(code == "BCGDHL-30"){
        offer="سفارش های شما با این کد شامل 30 درصد تخفیف می شود"
    }
    else if(code == "TALLMAN-40"){
        offer="سفارش های شما با این کد شامل 40 درصد تخفیف می شود"
    }
    else if(code == "VIAGRAHHT-50"){
        offer="سفارش های شما با این کد شامل 50 درصد تخفیف می شود"
    }
    else if(code == "CONSTRACTION-60"){
        offer="سفارش های شما با این کد شامل 60 درصد تخفیف می شود"
    }
    else{
        offer="متاسفانه سفارش های شما شامل هیچ گونه تخفیفی نمی شود"
    }
    return(
        <div className="w-full px-4 lg:px-0">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">کد تخفیف</h1>
            <div className="justify-center bg-gray-100 w-full max-w-[500px] lg:w-[500px] h-12 lg:h-[50px] rounded-[20px] text-center mt-8 lg:mt-[100px] mx-auto lg:mx-0 lg:ml-[700px]">
                <h1 className="text-center text-2xl lg:text-3xl text-gray-500">{code}</h1>
            </div>
            <p className="text-black text-lg lg:text-xl text-center mt-4 lg:mt-0" id="offer-code">{offer}</p>
            <button className="bg-[#caae97] w-full max-w-[400px] ml-auto lg:ml-[750px] lg:w-[400px] h-11 lg:h-[40px] rounded-[10px] mt-6 lg:mt-[40px] mx-auto lg:mx-0 block" onClick={() =>{
                alert("کد تخفیف اعمال شد")
            }}>
                <p className="text-white text-lg lg:text-xl ">اعمال کد تخفیف</p>
            </button>
        </div>
    )
}
export default Offer;