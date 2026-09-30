import express, { Router } from "express" 
import fs from "fs"
import cors from 'cors'
import bcrypt from 'bcrypt'
import helmet from 'helmet'
import rateLimiter from 'express-rate-limit'

const app = express()
const router = express.Router()
app.use(express.json())
app.use(cors())
app.use(helmet())
const loginLimiter = rateLimiter({
    windowMs:20*20*1000,
    max:10,
    message:{
        success:false,
        message:"درخواست ها بیش از حد بود سیکتیر"
    }
})
const file = "re#Ha133.json"
if(!fs.existsSync(file)){
    fs.writeFileSync(file,JSON.stringify([]))
}

router.get("/",(req,res) =>{
    res.send("Server is running")
})
router.post("/add-account",async (req,res) =>{
    const {name,email,password} = req.body
    const data = JSON.parse(fs.readFileSync("re#Ha133.json","utf8"))
    const exists = data.find(user => user.name === name || user.email === email)
    if(exists){
        return res.status(400).json({succes:false, message:"not already account"})
    }
    const hashedPassword = await bcrypt.hash(password,12)
    console.log("Exists:",exists)
    data.push({name,email,hashedPassword})
    fs.writeFileSync("re#Ha133.json",JSON.stringify(data,null,2))
    return res.status(201).json({success:true,message:"ثبت نام با موفقیت انجام شد"})
})
router.post("/login",loginLimiter, async (req,res) =>{
    const {name,password} = req.body
    const data = JSON.parse(fs.readFileSync("re#Ha133.json"))
    const user = data.find(u => name === u.name)
    if(!user){
        return res.status(400).json({success:false , message:"اطلاعات وارد شده نادرست می باشد"})
    }
    const passwordCorrect = await bcrypt.compare(password,user.hashedPassword)
    if(!passwordCorrect){
        return res.status(400).json({success:false , message:"اطلاعات وارد شده نادرست می باشد"})
    }
    res.json({success:true,user})
})
router.post("/edit-password", async(req,res) =>{
    const {name,newPassword} = req.body
    const data = JSON.parse(fs.readFileSync("re#Ha133.json"))
    const user = data.find(u => name === u.name)
    user.hashedPassword=bcrypt.hash(newPassword,12)
    fs.writeFileSync("re#Ha133.json", JSON.stringify(data,null,2))
    if(!user){
        res.status(400).json({success:false,message:"name is false"})
    }
    res.json({success:true,message:"Change password is success"})
})
router.post("/add-card",loginLimiter, async(req,res) =>{
    const {name,cardNumber,cardOwner,cvv2,date} = req.body
    const data = JSON.parse(fs.readFileSync("c@rts1234.json","utf-8")) 
    const exists = data.find(user => user.card === cardNumber)
    if(exists){
        return res.status(400).json({success:false , message:"کارت قبلا ثبت شده است"})
    }
    data.push({name,cardNumber,cardOwner,cvv2,date})
    fs.writeFileSync("c@rts1234.json",JSON.stringify(data,null,2))
    return res.status(201).json({success:true , message:"ثبت کارت با موفقیت انجام شد"})
})
router.post("/admin" , loginLimiter, async(req,res) =>{
    const {username,password,key} = req.body
    const data = JSON.parse(fs.readFileSync("aaadm1234in5.json"))
    const user = data.find(account => username === account.username && password === account.password && key === account.key)
    if(!user){
        return res.status(400).json({success:false , message: "admin is incorrect"})
    }
    res.json({success:true , message:"loginned"})

})
router.post("/add-order", async(req,res) =>{
    const {name,productId,count} = req.body
    const data = JSON.parse(fs.readFileSync("orders.json","utf-8"))
    const products = JSON.parse(fs.readFileSync("products.json","utf-8"))
    const product = products.find(p => p.id === productId)
    if(!product){
        return res.status(400).json({success:false,message:"محصول موجود نمی باشد"})
    }
    const order = data.find(user => user.name === name && user.productId === productId)
    if(order){
       order.count += Number(count)
    }
    else{
        data.push({
            id:Date.now(),
            name,
            productId:{
                id:product.id,
                name:product.name,
                price:product.price,
                photo:product.image
            },
            count:Number(count)
        })
    }
    fs.writeFileSync("orders.json",JSON.stringify(data,null,2))
    return res.status(201).json({success:true,message:"سفارش شما ثبت شد"})
})
router.post("/orders", async(req,res) =>{
    const {name} = req.body
    const orders = JSON.parse(fs.readFileSync("orders.json"))
    const ords = orders.filter(o => o.name === name)
    if(!ords){
        return res.status(400).json({success:false,message:"سفارشی یافت نشد"})
    }
    const results = ords.map(order => {
        return{
            id:order.id,
            product:order.productId,
            productId:order.productId.id,
            productName:order.productId.name,
            productPrice:order.productId.price,
            productImage:order.productId.photo,
            count:order.count
        }
    })
    res.json({success:true,message:results})
})
router.post("/remove-order", async(req,res) =>{
    const {name,id} = req.body
    const data = JSON.parse(fs.readFileSync("orders.json"))
    const newData = data.filter(o => !(o.name === name && o.id === id))
    if(!newData){
        return res.status(400).json({success:false,message:"کار موفق نبود"})
    }
    fs.writeFileSync("orders.json",JSON.stringify(newData,null,2))
    res.json({success:true,message:"کار با موفقیت انجام شد"})
})
router.post("/buy",async(req,res) =>{
    const {name,cardNumber,cardOwner,cvv2,date,twoPassword,totalPrice,address} = req.body
    const data = JSON.parse(fs.readFileSync("c@rts1234.json"))
    const cart = data.filter(u => u.cardNumber === cardNumber && u.cardOwner === cardOwner && u.name === name)
    if(!cart){
        return res.status(400).json({success:false,message:"کارت یافت نشد"})
    }
    const buys = JSON.parse(fs.readFileSync("buys.json","utf-8"))
    buys.push({name,cardNumber,cardOwner,cvv2,date,twoPassword,totalPrice,address})
    fs.writeFileSync("buys.json",JSON.stringify(buys,null,2))
    return res.status(201).json({success:true,message:"خرید با موفقیت انجام شد"})
})
router.post("/check-card", async(req,res) =>{
    const {name,card} = req.body
    const data = JSON.parse(fs.readFileSync("c@rts1234.json"))
    const bankCard = data.find(u => u.name === name && u.cardNumber === card)
    if(!bankCard){
        return res.status(400).json({success:false,message:"کارت وجود ندارد"})
    }
    res.json({success:true,message:{
        cardOwner:bankCard.cardOwner,
        cardCvv2:bankCard.cvv2,
        cardDate:bankCard.date 
    }})
})
router.post("/accounts", async(req,res) =>{
    const {name} = req.body
    const data = JSON.parse(fs.readFileSync("re#Ha133.json"))
    const user = data.find(u => u.name === name)
    if(!user){
        return res.status(400).json({success:false,message:"موفق نبود"})
    }
    res.json({success:true,message:{
        username:user.name,
        email:user.email
    }})
})
app.use("/api",router)
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})
