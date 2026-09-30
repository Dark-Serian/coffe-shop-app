import { useState,useEffect } from 'react'
import './App.css'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import coffeshop from './assets/coffeshop.png'
import homeIcon from './assets/home-icon.png'
import shopIcon from './assets/shop-icon.png'
import accountIcon from './assets/account-icon.png'
import searchIcon from './assets/search-icon.png'
import Slider from './Slider'
import Background from './assets/background.png'
import Products from './Products'
import logo from './assets/coffeshop-logo.png'
import Account from './Account'
function Home(){
  const user = JSON.parse(localStorage.getItem("User"))
  return(
  <div className="bg-gray-100 h-[4000px] lg:h-[2500px] md:h-[3000px] sm:h-[4000px]">
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
    <div className="bg-gray-100 w-full min-h-[500px] flex flex-col md:flex-row items-center gap-6 p-4 md:p-6" id="body">
      <div className="w-full md:w-1/2 min-h-[300px] lg:min-h-[400px] flex pt-6 px-4 md:pt-[50px] md:px-[50px]">
        <Slider/>
      </div>
      <div className="bg-[#e6d2b1] w-full md:w-1/2 min-h-[350px] lg:min-h-[400px] shrink-0 mt-6 lg:mt-[50px] rounded-[10px] cursor-pointer pb-4 lg:pb-0">
          <img className="w-full max-w-[600px] h-[180px] md:h-[250px] lg:h-[300px] object-cover flex mx-auto lg:mx-[100px]" src={Background} />
          <h2 className="text-lg md:text-xl lg:text-2xl text-black font-bold text-center inline px-4 lg:px-0">ما در کافی شاپ علاوه بر خود قهوه پودر قهوه هم می فروشیم</h2>
      </div>
    </div>
    <div className="items-center text-center bg-gray-100 h-[1500px] sm:h-[2600px] md:h-[2500px] lg:h-[1500px]">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold text-center">محصولات کافی شاپ</h1>
      <Products/>
    </div>
    <div className="w-full min-h-[500px] md:min-h-[550px] lg:h-[600px] bg-[#c5afa3] lg:mt-0 md:mt-0 sm:mt-[1000px] flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start justify-center lg:justify-between px-4 md:px-10 lg:px-0 py-10 lg:py-0 gap-8 lg:gap-0">
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full max-w-[600px] lg:w-[600px]">
        <p className="text-white font-thin text-lg md:text-xl lg:text-2xl mr-0 lg:mr-[50px] pt-2 md:pt-6 lg:pt-[100px]">
          <a href="https://sorosh.saadatmand@gmail.com" target="_blank"><span dir="ltr">sorosh.saadatmand@gmail.com :</span></a>ایمیل
        </p>
        <p className="text-white font-thin text-lg md:text-xl lg:text-2xl mr-0 lg:mr-[50px] pt-4 lg:pt-[40px]">
          <span>+1 892 535 6210 :</span>شماره تلفن
        </p>
        <p className="text-white font-thin text-lg md:text-xl lg:text-2xl mr-0 lg:mr-[50px] pt-4 lg:pt-[40px]">
          <a href="https://github.com/darkhereman123-art" target="_blank"><span dir="ltr">https://github.com/darkhereman123-art :</span></a>آدرس گیت هاب
        </p>
        <p className="text-white font-thin text-sm md:text-base lg:text-xl mr-0 lg:mr-[50px] pt-4 lg:pt-[50px] text-center lg:text-right flex">
          توضیحات: این سایت توسط یک برنامه نویس درست شده است و
        </p>
        <p className="text-white font-thin text-sm md:text-base lg:text-xl mr-0 lg:mr-[80px] text-center lg:text-right flex">
          کاملا یک پروژه آزمایشی می باشد. یک سایت کافی شاپ فیک برای تست و دیدن نمونه کار بنده است که با فریموورک ری اکت
        </p>
        <p className="text-white font-thin text-sm md:text-base lg:text-xl mr-0 lg:mr-[80px] text-center lg:text-right">
          نوشته شده و برای استایل آن هم از تیل وین استفاده شده است
        </p>
      </div>

      <img src={logo} className=" w-24 h-24 md:w-28 md:h-28 lg:w-auto lg:h-auto lg:mt-[30px] lg:ml-[50px]" />
    </div>

  </div>
  )
}
export default Home;