const express=require('express')
const http=require('http')
const router=require('./routes/routes')
const path=require('path')
const app=express()
const cors=require('cors')
app.use(cors({
    origin:"http://localhost:5173" //front end localhost
}))
app.use(express.json())

app.use(router)


const server=http.createServer(app)
module.exports=server