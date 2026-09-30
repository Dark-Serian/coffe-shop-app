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
import account from './assets/account.png'
import pluginsIcon from './assets/plugins-icon.png'
import photoIcon from './assets/photo-icon.png'
import textIcon from './assets/text-icon.jpg'
import cardIcon from './assets/card-icon.png'
import cardGray from './assets/card-icon-gray.png'
import accountGray from './assets/account-gray.png' 
import settings from './assets/settings-icon.png'

function Panel(){
    return(
        <div>
            <div className="w-full max-w-full h-[100px] bg-white flex items-center justify-between">
                <h1 className="text-4xl text-left inline pl-[10px] text-[#c09a85] w-[500px]">Coffe Shop Dashboard</h1>
                <div className="items-center">
                    <h1 className="text-right text-black text-2xl pr-[10px] font-bold inline">admin</h1>
                    <img className="w-8 h-8 mr-[30px] inline" src={dashboardIcon}></img>
                </div>
            </div>
            <div className="w-full h-[1000px] bg-white">
                <div className="w-[700px] h-[400px] bg-gray-100 mt-[50px]">
                    <h1 className="text-gray-500 text-2xl font-bold">ایجاد نوشته</h1>
                    <p className="text-black text-xl">نمی خواهید چیزی بنویسید</p>
                </div>
                <div className="w-[250px] h-[600px] bg-white ml-auto text-right pl-auto mr-[30px] mt-[-400px]">
                    <div className="hover:bg-gray-100 rounded-[10px]">
                    <a href="#" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={account} id="order-icon"></img>
                        <p className="text-black text-xl pl-[120px]">مدیریت</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="/کد-تخفیف" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={accountIcon} id="offer-icon"></img>
                        <p className="text-black text-xl pl-[120px]">حساب ها</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="/علاقه-مندی-ها" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={pluginsIcon} id="loves-icon"></img>
                        <p className="text-black text-xl pl-[120px]">پلاگین ها</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="/حساب-کاربری" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={textIcon} id="user-icon"></img>
                        <p className="text-black text-xl pl-[120px]">نوشته ها</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="#" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={photoIcon} id="logout-icon"></img>
                        <p className="text-black text-xl pl-[120px]">رسانه ها</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="#" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={cardIcon} id="logout-icon"></img>
                        <p className="text-black text-xl pl-[120px]">کارت ها</p>
                    </a>
                    </div>
                    <div className="mt-[10px] hover:bg-gray-100 rounded-[10px]">
                    <a href="#" className="w-[250px] h-[50px] flex flex-row-reverse justify-beetween items-right">
                        <img className="w-8 h-8 ml-auto" src={settings} id="logout-icon"></img>
                        <p className="text-black text-xl pl-[120px]">تنظیمات</p>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Panel