import { useState,useEffect } from 'react'
import './App.css'
import './index.css'
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
import Home from './Home'
import Shop from './Shop'
import Login from './Login'
import Americano from './products/Americano'
import Tea from './products/Tea'
import Coffe from './products/Coffe'
import LateCoffe from './products/LateCoffe'
import Juice from './products/Juice'
import Maciato from './products/Maciato'
import IceAmericano from './products/IceAmericano'
import IceCaramelMaciato from './products/IceCaramelMaciato'
import Ptea from './products/Ptea'
import SingleSpurso from './products/SingleSpurso'
import DubbleSpurso from './products/DubbleSpurso'
import Desser from './products/Desser'
import Dashboard from './Dashboard'
import { Route,Routes } from 'react-router-dom'
import User from './User'
import Offer from './Offer'
import ChangePassword from './ChangePassword'
import AddCard from './addCard'
import Admin from './Admin'
import Panel from './Panel'
import Orders from './orders'
import Buy from './buy'

function App() {
  const [account,setAccount] = useState(false)
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/آمریکانو" element={<Americano/>}></Route>
      <Route path="/چای" element={<Tea/>}></Route>
      <Route path="/قهوه-ساده" element={<Coffe/>}></Route>
      <Route path="/کافه-لاته" element={<LateCoffe/>}></Route>
      <Route path="/شربت-آب-پرتقال" element={<Juice/>}></Route>
      <Route path="/ماکیاتو" element={<Maciato/>}></Route>
      <Route path="/آیس-آمریکانو" element={<IceAmericano/>}></Route>
      <Route path="/آیس-کارامل-ماکیاتو" element={<IceCaramelMaciato/>}></Route>
      <Route path="/چای-هل-و-دارچین" element={<Ptea/>}></Route>
      <Route path="اسپرسو-سینگل" element={<SingleSpurso/>}></Route>
      <Route path="/اسپرسو-دبل" element={<DubbleSpurso/>}></Route>
      <Route path="/دسر-تیرامیسو" element={<Desser/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/add-card" element={<AddCard/>}></Route>
      <Route path="/change-password" element={<ChangePassword/>}></Route>
      <Route path="/xadmin" element={<Admin/>}></Route>
      <Route path="/panel" element={<Panel/>}></Route>
      <Route path="/buy" element={<Buy/>}></Route>
    </Routes>
  )
}

export default App
