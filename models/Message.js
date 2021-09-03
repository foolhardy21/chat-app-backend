const mongoose = require('mongoose')
const { Schema } = mongoose

const MessageSchema = ({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    reciever: { type: Schema.Types.ObjectId, ref: 'User' },
    text : { type: String },
    time: { type: Date } 
})

module.exports = mongoose.model('Message', MessageSchema)