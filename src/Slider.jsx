import { useState,useEffect } from 'react'
import './App.css'
import './index.css'
import firstSlide from './assets/slide-1.jpg'
import secondSlide from './assets/slide-2.jpg'
import thirdSlide from './assets/slide-3.jpg'

export default function Slider(){
    const slides = [firstSlide,secondSlide,thirdSlide];
    const[index,setIndex] = useState(0);
    useEffect(() =>{
        const interval = setInterval(()=>{
            setIndex((prev)=> (prev+1) % slides.length);
        },5000);
        return() => clearInterval(interval)
    },[]);
    return (
        <div className="w-full max-w-[1000px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px] lg:w-[1000px] overflow-hidden relative cursor-pointer mx-auto">
            <div className="flex transition-transform duration-700 h-full" style={{transform : `translateX(-${index*100}%)`}}>
                {slides.map((src,i) =>(
                    <img className="w-full h-full lg:w-[1000px] lg:h-[400px] object-cover flex-shrink-0" key={i} src={src}>
                    </img>
                ))}
            </div>
        </div>
      );
  }