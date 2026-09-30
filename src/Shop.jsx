import { useState,useEffect } from 'react'
import './App.css'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import coffeshop from './assets/coffeshop.png'
import homeIcon from './assets/home-icon.png'
import shopIcon from './assets/shop-icon.png'
import accountIcon from './assets/account-icon.png'
import Slider from './Slider'
import Background from './assets/background.png'
import Products from './Products'
import logo from './assets/coffeshop-logo.png'

function Shop(){
    return(
        <div className="bg-gray-100">
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
            <div className="items-center text-center bg-gray-100 h-[1500px] sm:h-[2600px] md:h-[2500px] lg:h-[1500px]">
            <h1 className="text-3xl text-black font-bold text-center">فروشگاه</h1>
               <Products/>
            </div>
        </div>
    )
}
export default Shop;