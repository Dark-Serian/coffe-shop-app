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
import delBtn from './assets/del-button.png'
import delBtnGray from './assets/del-button-gray.png'
import product from './assets/product.png'

function Orders(){
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
return(
    <div className="w-full px-4 lg:px-0">
        <h1 className="text-black text-2xl lg:text-3xl text-center font-bold">سفارش ها</h1>
        {orders.length > 0 ?(
            <div className="flex flex-col gap-6 lg:gap-[30px] h-auto lg:h-[1800px] mt-4 lg:mt-0">
            {orders.map((order)=>(
            <div key={order.id} className="group text-right w-full max-w-[1000px] mx-auto lg:mx-0 hover:bg-[#f1f1f1] rounded-xl">
             <div className="w-full lg:w-[1000px] rounded-[10px] p-3 lg:p-4 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 lg:gap-0">
                <img src={order.productImage} className="w-20 h-20 lg:w-28 lg:h-28" alt=""></img>
                <div className="flex flex-col text-right lg:pr-96 order-3 sm:order-none w-full sm:w-auto">
                    <h1 className="text-lg lg:text-xl font-bold text-black">{order.productName}</h1>
                    <p className="text-base lg:text-lg text-black"><span dir="ltr">تومان</span>{order.productPrice.toLocaleString()}<span dir="ltr">:</span>قیمت</p>
                    <p className="text-base lg:text-lg text-black">{order.count}<span dir="ltr">:</span>تعداد</p>
                </div>
              <button className="w-9 h-9 lg:w-12 lg:h-12 relative" onClick={async() =>{
                const remOrder = async() =>{
                    const req = await fetch("/api/remove-order",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body:JSON.stringify({
                            name:user.name,
                            id:order.id
                        })
                    })
                    const data = await req.json()
                    if(data.success){
                        alert("محصول حذف شد")
                    }
                    else{
                        alert("محصول حذف نشد")
                    }
                }
                await remOrder()
              }}>
                <img src={delBtn} className="absolute w-9 h-9 lg:w-12 lg:h-12 group-hover:hidden" alt=""></img>
                <img src={delBtnGray} className="absolute w-9 h-9 lg:w-12 lg:h-12 hidden group-hover:block" alt=""></img>
                </button>  
            </div>   
            </div>
        ))}
        <button className="bg-[#caae97] w-full max-w-[400px] h-12 lg:h-[50px] rounded-[10px] mt-8 lg:mt-[50px] mx-auto lg:mx-0 lg:ml-[300px] block" onClick={() =>{
            window.location.href="/buy"
        }}>
            <p className="text-white text-lg lg:text-xl">خرید نهایی</p>
        </button>
        </div>
        ):(
            <div className="flex flex-col items-center lg:block">
                <div className="w-full max-w-[700px] h-auto lg:h-[400px] bg-gray-100 mt-6 lg:mt-[50px] flex flex-col items-center lg:block py-6 lg:py-0">
                <img src={product} className="w-40 h-40 sm:w-56 sm:h-56 lg:w-[300px] lg:h-[300px] lg:ml-[200px]"></img>
                <h2 className="text-gray-500 text-xl lg:text-2xl font-bold mt-4 lg:mt-0">محصولی موجود نمی باشد</h2> 
                </div>
                <button className="bg-[#ccab98] w-full max-w-[300px] h-12 lg:h-[50px] rounded-[20px] mt-6 lg:mt-[30px] mx-auto lg:mx-0 lg:mr-[1200px] block">
                    <p className="text-white text-lg lg:text-xl" onClick={() =>{
                        window.location.href="/shop"
                    }}>فروشگاه</p>
                </button>
            </div>
        )}
    
    </div>
)}
export default Orders;