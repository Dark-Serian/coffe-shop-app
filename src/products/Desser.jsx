import desserPhoto from './deser.jpg'
import { useState } from "react";
import coffeshop from './coffeshop.png'
import homeIcon from './home-icon.png'
import shopIcon from './shop-icon.png'
import accountIcon from './account-icon.png'
import searchIcon from './search-icon.png'
function desser(){
    const user = JSON.parse(localStorage.getItem("User"))
    return(
        <div className="min-h-screen bg-white">
            <div className="bg-gray-200 w-full h-auto lg:h-[120px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-6 py-4 lg:py-0 gap-4 lg:gap-0" id="header">
                <img src={coffeshop} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex" />
                <div className="items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#bf9075] font-bold text-center inline">Coffe Shop</h1>
                    <p className="text-base md:text-lg lg:text-xl text-[#d0ac97] font-thin text-center">This is test project of fake coffe shop</p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                    <a href="/shop" className="inline-flex w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"><img src={shopIcon} /></a>
                    <a href="/account" className="inline-flex w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"><img src={accountIcon} /></a>
                    <a href="http://localhost:5173/" className="inline-flex w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"><img src={homeIcon} /></a>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20 px-4 md:px-10 lg:px-20 py-10 lg:py-16">

                <img src={desserPhoto} className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain" />

                <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full max-w-md gap-4">
                    <p className="text-black text-2xl lg:text-3xl font-bold">دسر تیرامیسو</p>
                    <p className="text-black text-2xl lg:text-3xl font-thin">تومان<span dir="ltr">340,000</span></p>

                    <div className="flex items-center gap-4 mt-4">
                        <input type="number" id="input" min={1} max={99} defaultValue={1}
                            className="w-12 h-12 lg:w-[50px] lg:h-[50px] text-xl lg:text-[30px] text-center bg-gray-100"
                            onKeyDown={(e) =>{
                                if(["E","e","-","+","."].includes(e.key)){
                                    e.preventDefault()
                                }
                            }}
                            onInput={(e) =>{
                                if(e.target.value < 1){
                                    e.target.value=1
                                }
                                if(e.target.value > 99){
                                    e.target.value=99
                                }
                            }}
                        />
                        <button className="w-32 h-12 lg:w-[200px] lg:h-[50px] bg-[#c8a693] rounded-full">
                            <p className="text-white text-lg lg:text-2xl font-thin" onClick={async() =>{
                                let numInput = document.getElementById("input")
                                if(!user){
                                    window.location.href="/login"
                                }
                                else{
                                    const sendOrder = async() =>{
                                        const req = await fetch("/api/add-order",{
                                            method:"POST",
                                            headers:{
                                                "Content-Type": "application/json"
                                            },
                                            body:JSON.stringify({
                                                name:user.name,
                                                productId:12,
                                                count:Number(numInput.value)
                                            })
                                        })
                                        const data = await req.json()
                                        if(data.success){
                                            alert("سفارش شما ثبت شد")
                                        }
                                        else{
                                            alert("ریدی داداش")
                                        }
                                    }
                                    await sendOrder()
                                }
                            }}>خرید</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 md:px-10 lg:px-20 py-8 lg:py-10 text-right">

                <h1 className="text-black text-2xl lg:text-3xl font-bold">توضیحات</h1>
                <div className="h-[2px] w-full max-w-[500px] bg-[#a6826e] mt-2 mb-4 mr-0 ml-auto"></div>
                <p className="text-base md:text-lg lg:text-xl w-full max-w-[1200px] mr-0 ml-auto">
                به کافی شاپ ما خوش آمدید اگر دنبال یه دسر خوب و خوشمزه هستی من بهت به عنوان یه سرآشپز تیرامیسو را معرفی میکنم که خوشمزگیش دل از هر کسی میبره چه کسی که عاشق طعم تلخه و چه کسی که عاشق شیرینیجات هست
                </p>

                <h1 className="text-black text-2xl lg:text-3xl font-bold mt-8">ویژگی ها</h1>
                <div className="h-[2px] w-full max-w-[500px] bg-[#a6826e] mt-2 mb-4 mr-0 ml-auto"></div>

                <div className="flex flex-col gap-4 w-full max-w-[400px] mr-0 ml-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-xl lg:text-2xl text-center">گرم هر تکه<span dir="ltr">400</span></p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold"><span dir="ltr">:</span>مقدار</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-xl lg:text-2xl text-center">ندارد</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold"><span dir="ltr">:</span>کافئین</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-xl lg:text-2xl text-center">شیرین</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold"><span dir="ltr">:</span>طعم</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-xl lg:text-2xl text-center">خوراکی</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold"><span dir="ltr">:</span>نوع</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default desser;