import { useEffect, useState, useRef } from "react";
import React from "react";
import { Router} from "react-router-dom";
import './App.css'
import './index.css'
import coffeshop from './assets/coffeshop.png'
import homeIcon from './assets/home-icon.png'
import shopIcon from './assets/shop-icon.png'
import accountIcon from './assets/account-icon.png'
import searchIcon from './assets/search-icon.png'
import backIcon from './assets/back-icon.png'
import ayandeBank from './assets/ayande-bank.png'
import deyBank from './assets/dey-bank.png'
import eghtesadBank from './assets/eghtesad-bank.png'
import gardeshBank from './assets/gardesh-bank.png'
import iranBank from './assets/iran-bank.png'
import keshavarziBank from './assets/keshavarzi-bank.png'
import maskanBank from './assets/maskan-bank.png'
import mellatBank from './assets/mellat-bank.png'
import melliBank from './assets/melli-bank.png'
import parsianBank from './assets/parsian-bank.png'
import pasargadBank from './assets/pasargad-bank.png'
import refahBank from './assets/refah-bank.png'
import saderatBank from './assets/saderat-bank.png'
import sepahBank from './assets/sepah-bank.png'
import samanBank from './assets/saman-bank.png'
import sanaatBank from './assets/sanaat-bank.png'
import sarmayehBank from './assets/sarmayeh-bank.png'
import shahrBank from './assets/shahr-bank.png'
import sinaBank from './assets/sina-bank.png'
import tejaratBank from './assets/tejarat-bank.png'
import toseaaBank from './assets/toseaa-bank.png'
import question from './assets/question-icon.jpg'
import { toJalaali } from "jalaali-js";

function addCard(){
    const user = JSON.parse(localStorage.getItem("User"))
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
    const input5 = useRef()
    const input6 = useRef()
    const input7 = useRef()
    const handleChange = (e,next) =>{
        const value = e.target.value
        if(!/^[0-9]*$/.test(value)){
            e.target.value=""
            return
        }
        if(value.length === 4){
           next.current.focus()
        }
    }
    
    return(
        <div className="w-full flex flex-col items-center lg:block px-4 lg:px-0">
            <div className="w-full max-w-[700px] lg:w-[700px] lg:max-w-none">
                <a href="/dashboard">
                    <img src={backIcon} className="w-10 h-10 lg:w-14 lg:h-14"></img>
                </a>
            </div>

            <div className="w-full max-w-[700px] h-auto lg:h-[400px] rounded-[20px] mx-auto lg:mx-0 lg:ml-[600px] mt-6 lg:mt-[30px] border-black outline bg-gray-100 p-4 lg:p-0">
                <div className="flex flex-wrap justify-center lg:justify-normal items-center gap-2 sm:gap-3 pt-4 lg:pt-[50px] lg:pl-[150px]">
                    <img className="w-6 h-6 lg:w-8 lg:h-8" id="bank" src={question}></img>
                    <input maxLength={4} className="w-14 h-9 sm:w-16 sm:h-9 lg:w-20 lg:h-10 border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" id="input-1"
                    ref={input1} 
                    onChange={(e) => handleChange(e,input2)}
                    onInput={() => {
                        let input1 = document.getElementById("input-1")
                        let error = document.getElementById("card-error")
                        if(input1.value.length < 4){
                            error.textContent="شماره کارت باید 16 رقمی باشد*"
                        }
                        else{
                            error.textContent=""
                        }
                    }}></input>
                    <input maxLength={4} className="w-14 h-9 sm:w-16 sm:h-9 lg:w-20 lg:h-10 border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" id="input-2"
                    ref={input2}
                    onChange={(e) => handleChange(e,input3)}
                    onInput={() => {
                        let input1 = document.getElementById("input-1")
                        let input2 = document.getElementById("input-2")
                        let error = document.getElementById("card-error")
                        let bank = document.getElementById("bank")
                        let ps = input1.value + input2.value
                        if(ps.includes("603799")){
                            bank.src=melliBank
                        }
                        else if(ps.includes("636949") || ps.includes("589210")){
                            bank.src=sepahBank
                        }
                        else if(ps.includes("585983") || ps.includes("627353")){
                            bank.src=tejaratBank
                        }
                        else if(ps.includes("502908") || ps.includes("610433")){
                            bank.src=mellatBank
                        }
                        else if(ps.includes("603769")){
                            bank.src=saderatBank
                        }
                        else if(ps.includes("603770")){
                            bank.src=keshavarziBank
                        }
                        else if(ps.includes("628023")){
                            bank.src=maskanBank
                        }
                        else if(ps.includes("639347") || ps.includes("502229")){
                            bank.src=pasargadBank
                        }
                        else if(ps.includes("627884") || ps.includes("639194") || ps.includes("622106")){
                            bank.src=parsianBank
                        }
                        else if(ps.includes("627412")){
                            bank.src=eghtesadBank
                        }
                        else if(ps.includes("627648")){
                            bank.src=toseaaBank
                        }
                        else if(ps.includes("627961")){
                            bank.src=sanaatBank
                        }
                        else if(ps.includes("589463")){
                            bank.src=refahBank
                        }
                        else if(ps.includes("639346")){
                            bank.src=sinaBank
                        }
                        else if(ps.includes("621986")){
                            bank.src=samanBank
                        }
                        else if(ps.includes("636214")){
                            bank.src=ayandeBank
                        }
                        else if(ps.includes("639607")){
                            bank.src=sarmayehBank
                        }
                        else if(ps.includes("502806") || ps.includes("504706")){
                            bank.src=shahrBank
                        }
                        else if(ps.includes("502938")){
                            bank.src=deyBank
                        }
                        else if(ps.includes("505785")){
                            bank.src=iranBank
                        }
                        else if(ps.includes("505416")){
                            bank.src=gardeshBank
                        }
                        else{
                            bank.src=question
                        }
                        if(input2.value.length < 4){
                            error.textContent="شماره کارت باید 16 رقمی باشد*"
                        }
                        else{
                            error.textContent=""
                        }
                    }}></input>
                    <input maxLength={4} className="w-14 h-9 sm:w-16 sm:h-9 lg:w-20 lg:h-10 border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" id="input-3"
                    ref={input3}
                    onChange={(e) => handleChange(e,input4)} 
                    onInput={() => {
                        let input3 = document.getElementById("input-3")
                        let error = document.getElementById("card-error")
                        if(input3.value.length < 4){
                            error.textContent="شماره کارت باید 16 رقمی باشد*"
                        }
                        else{
                            error.textContent=""
                        }
                    }}></input>
                    <input maxLength={4} className="w-14 h-9 sm:w-16 sm:h-9 lg:w-20 lg:h-10 border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" id="input-4"
                    ref={input4}
                    onChange={(e) => handleChange(e,input4)}
                    onInput={() => {
                        let input4 = document.getElementById("input-4")
                        let error = document.getElementById("card-error")
                        if(input4.value.length < 4){
                            error.textContent="شماره کارت باید 16 رقمی باشد*"
                        }
                        else{
                            error.textContent=""
                        }
                    }}></input>
                    <p className="text-black text-right text-lg lg:text-2xl w-full lg:w-auto text-center lg:text-right"><span dir="ltr">:</span>شماره کارت</p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-normal items-center gap-2 sm:gap-3 pt-6 lg:pt-[80px] lg:pl-[300px]">
                    <input className="w-40 sm:w-52 lg:w-[250px] h-9 lg:h-10 border border-black text-lg lg:text-xl text-right outline-none bg-gray-100 focus:border-[#c8a693]" id="name-input"
                    onInput={() =>{
                        let name = document.getElementById("name-input")
                        let nameError = document.getElementById("name-error")
                        if(name.value.length == 0){
                            nameError.textContent="نام صاحب کارت نامعتبر می باشد*"
                        }
                        else{
                            nameError.textContent=""
                        }
                    }}></input>
                    <p className="text-black text-right text-lg lg:text-2xl"><span dir="ltr">:</span>صاحب کارت</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6 pt-6 lg:pt-[100px]">
                    <div className="flex items-center gap-2 sm:gap-3 lg:pl-[20px]">
                        <input maxLength={2} className="w-14 h-9 lg:w-20 lg:h-10 border border-black text-xl lg:text-2xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" placeholder="سال" id="input-5"
                        ref={input5}
                        onChange={(e) => handleChange(e,input6)}
                        onInput={() => {
                            let input5 = document.getElementById("input-5")
                            let error = document.getElementById("date-error")
                            if(input5.value.length < 2){
                                error.textContent="تاریخ درست نیست*"
                            }
                            if(input5.value.length >= 2){
                                error.textContent=""
                            }
                        }}></input>
                        <span className="text-xl lg:text-2xl text-black">/</span>
                        <input maxLength={2} className="w-14 h-9 lg:w-20 lg:h-10 border border-black text-xl lg:text-2xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" placeholder="ماه" id="input-6"
                            ref={input6}
                            onChange={(e) => handleChange(e,input6)} 
                            onInput={() => {
                            let input6 = document.getElementById("input-6")
                            let error = document.getElementById("date-error")
                            if(input6.value < 2){
                                error.textContent="تاریخ درست نیست*"
                            }
                            if(input6.value >= 2){
                                error.textContent=""
                            }
                        }}></input>
                        <p className="text-black text-right text-lg lg:text-2xl"><span dir="ltr">:</span>تاریخ انقضا</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 lg:pl-[160px]">
                        <p className="text-black text-right text-lg lg:text-2xl">cvv2:</p>
                        <input maxLength={4} type="password" className="w-14 h-9 lg:w-20 lg:h-10 border border-black text-lg lg:text-xl text-center outline-none bg-gray-100 focus:border-[#c8a693]" id="cvv2-input"
                        ref={input7}
                        onChange={(e) => handleChange(e,input7)}
                        onInput={() =>{
                            let cvv2Input = document.getElementById("cvv2-input")
                            let cvv2Error = document.getElementById("cvv2-error")
                            if(cvv2Input.value.length < 3){
                                cvv2Error.textContent="درست نمی باشدcvv2*"
                            }
                            else{
                                cvv2Error.textContent=""
                            }
                        }}></input>
                    </div>
                </div>
            </div>

            <button className="w-40 h-12 lg:w-[200px] lg:h-[50px] bg-[#c8a693] rounded-full text-white mt-8 lg:mt-[50px] mx-auto lg:ml-[600px] lg:mr-0 block" id="cartting"
            onClick={ async() =>{
                let input1 = document.getElementById("input-1")
                let input2 = document.getElementById("input-2")
                let input3 = document.getElementById("input-3")
                let input4 = document.getElementById("input-4")
                let bank = document.getElementById("card")
                let input5 = document.getElementById("input-5")
                let input6 = document.getElementById("input-6")
                let nameInput = document.getElementById("name-input")
                let cvv2Input = document.getElementById("cvv2-input")
                let error = document.getElementById("card-error")
                const username = user.name
                const cardNumber = input1.value + input2.value + input3.value + input4.value
                const date = input5.value + "/" + input6.value
                const now = new Date()
                const jDate = toJalaali(now)
                const currentYear = jDate.jy % 100
                const currentMonth = jDate.jm
                const year = Number(input5.value)
                const month = Number(input6.value)
                const bankNumbers = ["603799","636949","589210","585983","627353","502908","610433","603769","603770",
                    "628023","639347","502229","627884","639194","622106","627412","627648","627961",
                    "589463","639346","621986","636214","639607","502806","504706","502938","505785","505416"]    
                const createCard = async() =>{
                    const req = await fetch("/api/add-card",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: username,
                            cardNumber: cardNumber,
                            cardOwner: nameInput.value,
                            cvv2: cvv2Input.value,
                            date: date
                        })
                    })
                    const data = await req.json()
                    if(data.success){
                        error.style.color = "green"
                        error.textContent="کارت با موفقیت ثبت شد"
                    }
                    else{
                        error.textContent="ثبت کارت به خطا خورد"
                        alert("کارت قبلا ثبت شده است")
                    }
                }
                if(cardNumber.length == 16){
                    if(cardNumber.includes(bankNumbers[0])||cardNumber.includes(bankNumbers[1]) || cardNumber.includes(bankNumbers[2]) ||
                    cardNumber.includes(bankNumbers[3]) || cardNumber.includes(bankNumbers[4]) || cardNumber.includes(bankNumbers[5]) ||
                    cardNumber.includes(bankNumbers[6]) || cardNumber.includes(bankNumbers[7]) || cardNumber.includes(bankNumbers[8]) ||
                    cardNumber.includes(bankNumbers[9]) || cardNumber.includes(bankNumbers[10]) || cardNumber.includes(bankNumbers[11]) ||
                    cardNumber.includes(bankNumbers[12]) || cardNumber.includes(bankNumbers[13]) || cardNumber.includes(bankNumbers[14]) ||
                    cardNumber.includes(bankNumbers[15]) || cardNumber.includes(bankNumbers[16]) || cardNumber.includes(bankNumbers[17]) ||
                    cardNumber.includes(bankNumbers[18]) || cardNumber.includes(bankNumbers[19]) || cardNumber.includes(bankNumbers[20]) || 
                    cardNumber.includes(bankNumbers[21]) || cardNumber.includes(bankNumbers[22]) || cardNumber.includes(bankNumbers[23]) ||
                    cardNumber.includes(bankNumbers[24]) || cardNumber.includes(bankNumbers[25]) || cardNumber.includes(bankNumbers[26]) || cardNumber.includes(bankNumbers[27])){
                        if(date.length == 5){
                            if((currentYear <= year && currentMonth < month) || (currentYear < year && currentMonth >= month)){
                                if(nameInput.value.length == 0){
                                        alert("اطلاعات نادرست می باشد")
                                    }
                                else{
                                    if(cvv2Input.value < 3){
                                            alert("cvv2 is incorrect")
                                        }
                                    else{
                                        await createCard()
                                        }
                                    }
                                }
                                else{
                                    alert("تاریخ منقضی شده است")
                                }
                            }
                            else{
                                alert("کاراکتر ها کمتر از حد لازم هستند")
                            }
                        
        
                        
                    }
                    else{
                        alert("حساب نامعتبر می باشد")
                    }
                }
                else{
                    alert("کاراکتر های شماره کمتر از حد موجود هستند")
                }
                
            }}>افزودن کارت</button>

            <div className="w-full max-w-[700px] mx-auto lg:mx-0 lg:ml-[600px] text-center lg:text-right">
                <p id="card-error" className="text-red-500 text-sm lg:text-[16px] pt-4 lg:pt-[20px]"></p>
                <p id="name-error" className="text-red-500 text-sm lg:text-[16px] pt-2 lg:pt-[10px]"></p>
                <p id="date-error" className="text-red-500 text-sm lg:text-[16px] pt-2 lg:pt-[10px]"></p>
                <p id="cvv2-error" className="text-red-500 text-sm lg:text-[16px] pt-2 lg:pt-[10px]"></p>
            </div>
        </div>
    )
}
export default addCard;