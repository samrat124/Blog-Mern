import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv';
dotenv.config({path :"./.env"});
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (_, res) => res.send('Hello to Blogpost API'))

const PORT = process.env.PORT || 5000

mongoose
	.connect(process.env.CONNECTION_URL)
	.then(console.log('Connected to MongoDB Database 🌐'))
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} 🚀`)))
	.catch((error) =>{ console.log(`❎ Server did not connect ⚠️\n${error}`); console.log(error)})
