import express from 'express'
// import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const port = process.env.PORT||5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => res.send('Server is Running'))

app.listen(port,()=>{console.log(`Server Started on PORT ${port}`)})