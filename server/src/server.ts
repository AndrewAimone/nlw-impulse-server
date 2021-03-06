import express from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(
  express.urlencoded({
    limit: '10mb',
    extended: true,
    parameterLimit: 100000
  })
)
app.use(routes)
app.listen(process.env.PORT || 3333, () =>{
    console.log('HTTP Server Running!')
})