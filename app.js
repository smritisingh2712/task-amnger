const express = require('express')
const app = express()
const taskRouter = require('./routes/taskRoutes')
const connectDatabse = require('./db/connect')
require('dotenv').config()
const notfound = require('./middleware/notfound')
const errorHandlermiddleware = require('./middleware/errorHandler')
//middleware
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', taskRouter)
app.use(notfound)
app.use(errorHandlermiddleware)
const port = process.env.PORT || 3000 //TOCJECK NODE.APP.JS PORT=ANYTHG 

const start = async () => {
    try {
        await connectDatabse(process.env.MONGO_URL)
        app.listen(port, () => console.log(`app is listning from port ${port}...`))


    }
    catch (err) {
        console.log(err)


    }
}
start()

