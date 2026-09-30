import { useState } from "react";
import './App.css'
import './index.css'
import dubbleIspurso from './assets/dubble_ispurso.jpg'
import coffe from './assets/coffe.jpg'
import lateCoffe from './assets/late-coffe.jpg'
import tea from './assets/tea.jpg'
import maciato from './assets/maciato.jpg'
import juice from './assets/juice.jpg'
import singleIspurso from './assets/single_ispurso.jpeg'
import americano from './assets/americano.jpg'
import desser from './assets/deser.jpg'
import iceAmericano from './assets/ice_americano.jpg'
import iceCaramelMaciato from './assets/ice_caramel_maciato.jpg'
import hellTea from './assets/ptea.jpg'

function Products(){
    const user = JSON.parse(localStorage.getItem("User"))
    return(
        <div className="flex min-h-screen w-full h-[3000px] lg:h-[1500px] md:h-[2000px] sm:h-[3000px] flex-col items-center">
            <div className="gap-[70px] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={1} name="dubblespurso">
                <a href="/اسپرسو-دبل" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={dubbleIspurso} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">اسپرسو دبل</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">180,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={2} name="coffe">
                <a href="/قهوه-ساده" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={coffe} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">قهوه ساده</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">100,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={3} name="tea">
                <a href="/چای" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={tea} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">چای</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">80,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={4} name="latacoffe">
                <a href="/کافه-لاته" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={lateCoffe} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">کافه لاته</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">220,000</span></p>
            </div>
            </div>
            <div className="gap-[70px] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={5} name="maciato">
                <a href="/ماکیاتو" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={maciato} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">ماکیاتو</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">245,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={6} name="juice">
                <a href="/شربت-آب-پرتقال" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={juice} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">شربت آب پرتقال</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">210,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={7} name="singlespurso">
                <a href="/اسپرسو-سینگل" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={singleIspurso} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">اسپرسو سینگل</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">150,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={8} name="americano">
                <a href="/آمریکانو" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={americano} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">آمریکانو</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">120,000</span></p>
            </div>
            </div>
            <div className="gap-[70px] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={9} name="iceamericano">
                <a href="/آیس-آمریکانو" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={iceAmericano} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">آیس آمریکانو</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">180,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={10} name="icecaramelmaciato">
                <a href="/آیس-کارامل-ماکیاتو" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={iceCaramelMaciato} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">آیس کارامل ماکیاتو</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">270,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={11} name="ptea">
                <a href="/چای-هل-و-دارچین" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={hellTea} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">چای هل و دارچین</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">160,000</span></p>
            </div>
            <div className="w-[350px] h-[350px] cursor-pointer hover:bg-gray-200" id={12} name="desser">
                <a href="/دسر-تیرامیسو" className="inline-flex w-[250px] h-[250px] py-[30px]"><img src={desser} className="w-[250px] h-[250px]"></img></a>
                <p className="text-black text-right font-think text-xl mr-[50px]">دسر تیرامیسو</p>
                <p className="text-right text-x mr-[50px]">تومان<span dir="ltr">340,000</span></p>
            </div>
            </div>
        </div>
    )
}
export default Products;