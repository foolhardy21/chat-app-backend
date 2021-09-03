const express = require('express')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const messageRouter = require('./routes/messages')
const app = express()
const port = 3000

const username = process.argv[2]
const password = process.argv[3]
const dbname = process.argv[4]
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.fafup.mongodb.net/${dbname}?retryWrites=true&w=majority`)
mongoose.connection.on('error', error => {
        console.log(error)
})

app.use('/users', userRouter)
app.use('/messages', messageRouter)
app.use('/', indexRouter)

app.listen(port, () => {
    console.log('connected at ',port)
})
