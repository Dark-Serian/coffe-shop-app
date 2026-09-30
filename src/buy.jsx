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
import { check } from 'react-native-permissions'

function Buy(){
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
    const total = orders.reduce((sum,order) =>
        sum+(order.productPrice*order.count),0
    )
    return(
        <div className="h-[1800px]">
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
    <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-center px-4 lg:px-0">فرم تکمیل خرید</h1>
<div className="bg-gray-100 w-full max-w-[800px] lg:w-[800px] h-auto lg:h-[900px] rounded-[20px] mx-auto lg:mx-0 lg:ml-[560px] p-4 sm:p-6 lg:p-0 mt-4 lg:mt-0">
    <h1 className="text-black text-xl lg:text-2xl font-bold text-center lg:text-center">مشخصات فردی</h1>

    <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-4 lg:gap-0">
        <div className="flex items-center gap-3 mt-3 lg:mt-[10px]">
            <input type="text" id="nick-name" className="w-full lg:w-[200px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-right text-lg lg:text-xl pr-1 focus:border-[#c8a693] outline-none"></input>
            <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>نام</p>
        </div>
        <div className="flex items-center gap-3 mt-3 lg:mt-[10px]">
            <input type="text" id="last-name" className="w-full lg:w-[350px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-right text-lg lg:text-xl pr-1 focus:border-[#c8a693] outline-none"></input>
            <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>نام خانوادگی</p>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-4 lg:gap-0 mt-4 lg:mt-0">
        <div className="flex items-center gap-3 mt-3 lg:mt-[30px]">
            <input maxLength={12} type="text" id="country-code" className="w-full lg:w-[250px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-left text-lg lg:text-xl pl-1 focus:border-[#c8a693] outline-none"
            onInput={(e) =>{
                const value = e.target.value
                if(!/^[0-9]*$/.test(value)){
                  e.target.value=""
                  return
                }
                }}></input>
            <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>کد ملی</p>
        </div>
        <div className="flex items-center gap-3 mt-3 lg:mt-[30px]">
            <input maxLength={11} type="text" id="phone-number" className="w-full lg:w-[300px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-right text-lg lg:text-xl pl-1 focus:border-[#c8a693] outline-none" placeholder="مثال:09123456789"
            onInput={(e) =>{
                const value = e.target.value
                if(!/^[0-9]*$/.test(value)){
                  e.target.value=""
                  return
                }
                }}></input>
            <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>شماره تلفن</p>
        </div>
    </div>

    <div className="flex items-center gap-3 mt-4 lg:mt-[30px]">
        <input type="text" id="address" className="w-full lg:w-[1000px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-right text-lg lg:text-xl pr-1 focus:border-[#c8a693] outline-none"></input>
        <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>آدرس</p>
    </div>

    <h1 className="text-xl lg:text-2xl font-bold mt-6 lg:mt-[20px] text-center lg:text-center">مشخصات بانکی</h1>

    <div className="flex items-center gap-3 mt-3 lg:mt-0 lg:ml-[165px]">
        <input maxLength={16} type="text" id="card-number" className="w-full lg:w-[500px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-left text-lg lg:text-xl pl-1 focus:border-[#c8a693] outline-none"
        onInput={(e) =>{
        const value = e.target.value
        if(!/^[0-9]*$/.test(value)){
          e.target.value=""
          return
        }
        }}></input>
        <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>شماره کارت</p>
    </div>

    <div className="flex items-center gap-3 mt-4 lg:mt-[30px] lg:ml-[160px]">
        <input type="text" id="card-owner" className="w-full lg:w-[460px] h-9 lg:h-[30px] bg-gray-100 rounded-[10px] border border-black text-right text-lg lg:text-xl pr-1 focus:border-[#c8a693] outline-none"></input>
        <p className="text-right text-black text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>نام صاحب کارت</p>
    </div>

    <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-4 lg:gap-0 mt-4 lg:mt-0">
        <div className="flex items-center gap-3 mt-3 lg:mt-[30px]">
            <input maxLength={2} className="w-16 lg:w-20 h-9 lg:h-[30px] rounded-[10px] border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" placeholder="سال" id="input-5"
            onInput={(e) =>{
                const value = e.target.value
                if(!/^[0-9]*$/.test(value)){
                  e.target.value=""
                  return
                }
                }}>
            </input>
            <span className="text-xl lg:text-2xl text-black">/</span>
            <input maxLength={2} className="w-16 lg:w-20 h-9 lg:h-[30px] rounded-[10px] border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" placeholder="ماه" id="input-6"
            onInput={(e) =>{
                const value = e.target.value
                if(!/^[0-9]*$/.test(value)){
                  e.target.value=""
                  return
                }
                }}>
            </input>
            <p className="text-black text-right text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>تاریخ انقضا</p>
        </div>
        <div className="flex items-center gap-3 mt-3 lg:mt-[30px]">
            <p className="text-black text-right text-lg lg:text-2xl">cvv2:</p>
            <input maxLength={4} type="password" id="cvv2-input" className="w-16 lg:w-20 h-9 lg:h-[30px] rounded-[10px] border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]"
            onInput={(e) =>{
                const value = e.target.value
                if(!/^[0-9]*$/.test(value)){
                  e.target.value=""
                  return
                }
                }}></input>
        </div>
    </div>

    <div className="flex items-center gap-3 mt-4 lg:mt-[30px] lg:ml-[400px]">
        <input type="password" id="two-password" maxLength={16} className="w-full lg:w-[300px] h-9 lg:h-[30px] rounded-[10px] border border-black text-lg lg:text-xl text-left pl-1 outline-none bg-gray-100 focus:border-[#c8a693]"
        onInput={(e) =>{
            const value = e.target.value
            if(!/^[0-9]*$/.test(value)){
              e.target.value=""
              return
            }
            }}></input>
        <p className="text-black text-right text-lg lg:text-2xl shrink-0"><span dir="ltr">:</span>رمز دوم</p>    
    </div>

    <p className="text-xl lg:text-2xl text-black text-center lg:text-right mt-4 lg:mt-[30px] font-bold"><span dir="ltr">تومان</span>{total.toLocaleString()}<span dir="ltr">:</span>مجموع قیمت</p>

    <a href="/add-card" target="_blank"><p className="text-[#745a4a] text-base lg:text-lg font-bold text-center mt-6 lg:mt-[50px]">توجه داشته باشید مشخصات بانکی وارد شده حتما باید کارتی با آن مشخصات به اسم شما ثبت شده باشد اگر کارتی ثبت نکردید کلیک کنید</p></a>

    <button className="w-full max-w-[400px] lg:w-[400px] h-12 lg:h-[50px] bg-[#bea08e] rounded-[10px] mt-6 lg:mt-[50px] ml-auto lg:ml-[200px] block" onClick={async() =>{
        let cardNumber = document.getElementById("card-number")
        let cardOwner = document.getElementById("card-owner")
        let nickName = document.getElementById("nick-name")
        let lastName = document.getElementById("last-name")
        let countryCode = document.getElementById("country-code")
        let phoneNumber = document.getElementById("phone-number")
        let address = document.getElementById("address")
        let twoPassword = document.getElementById("two-password")
        let error = document.getElementById("error")
        const date = document.getElementById("input-5").value + "/" + document.getElementById("input-6").value
        let cvv2Input = document.getElementById("cvv2-input")
        const checkoutBuy = async()=>{
            const req = await fetch("/api/buy",{
                method:"POST",
                headers:{
                "Content-Type": "application/json"
               },
               body:JSON.stringify({
                name:user.name,
                cardNumber:cardNumber.value,
                cardOwner:cardOwner.value,
                cvv2:cvv2Input.value,
                date:date,
                twoPassword:twoPassword.value,
                totalPrice:total,
                address: address.value
               })
            })
            const data = await req.json()
            if(data.success){
                alert("خرید انجام شد")
            }
            else{
                alert("عملیات شکست خورد")
            }
        }
       if(nickName.value.length >= 3){
        if(lastName.value.length >= 3){
            if(countryCode.value.length >= 10){
                if(phoneNumber.value.length == 11){
                    if(address.value.length >= 14){
                        const res = await fetch("/api/check-card",{
                            method:"POST",
                            headers:{
                                "Content-Type": "application/json"
                            },
                            body:JSON.stringify({
                                name:user.name,
                                card:cardNumber.value
                            })
                        })
                        const cardData = await res.json()
                        if(cardData.success){
                            if(cardOwner.value === cardData.message.cardOwner){
                                if(cvv2Input.value === cardData.message.cardCvv2){
                                    if(date === cardData.message.cardDate){
                                        if(twoPassword.value.length >= 6 && twoPassword.value.length <= 16){
                                            await checkoutBuy()
                                            error.style.color="green"
                                            error.textContent="خرید شما با موفقیت انجام شد ولی رکب خوردید"
                                        }
                                    }else{
                                        alert("تاریخ انقضا صحیح نمی باشد")
                                        error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
                                    }
                                }else{
                                    alert("درست نمی باشد cvv2")
                                    error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
                                }
                            }else{
                                alert("نام صاحب کارت صحیح نمی باشد")
                                error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
                            }
                        }else{
                            alert("شماره کارت صحیح نمی باشد")
                            error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
                        }
                    }else{
                        alert("آدرس صحیح نمی باشد")
                        error.textContent="آدرس صحیح نمی باشد*"
                    }
                }else{
                    alert("شماره تلفن صحیح نمی باشد")
                    error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
                }
            }else{
                alert("کد ملی صحیح نمی باشد")
                error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
            }
        }else{
            alert("نام خانوادگی صحیح نمی باشد")
            error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
        }
       }else{
        alert("نام وارد شده درست نمی باشد")
        error.textContent="اطلاعات وارد شده صحیح نمی باشد*"
       } 
    }}><p className="text-white text-lg lg:text-xl text-center">پرداخت</p></button>

    <p className="text-red-500 text-lg lg:text-2xl text-center lg:text-right lg:pr-1 mt-2 lg:mt-0" id="error"></p>
</div>
        </div>
    )
}
export default Buy;