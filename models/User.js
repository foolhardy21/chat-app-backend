const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: { type: String, required: true, maxLength: 20 },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', UserSchema)