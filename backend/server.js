import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// CORS configuration
const corsOptions = {
    origin: ['https://foreverclothcom.vercel.app', 'http://localhost:5174'],
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true
};

app.use(cors(corsOptions));

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send('<h1>API Working</h1>');
});

app.listen(port, ()=> console.log('Server started on PORT : '+ port))