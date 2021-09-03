const Message = require('../models/Message')

exports.getAllMessages = function(req, res, next) {
    Message.find({})
        .populate('sender reciever')
        .exec((err, result) => {
            if(err) {
                return next(err)
            } else {
                res.send(result)
            }
        })

        
}