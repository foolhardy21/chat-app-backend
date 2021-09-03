const User = require('../models/User')

exports.getAllUsers = function(req, res, next) {
    User.find({}, 'name friends')
        .populate('friends')
        .exec((err, result) => {
            if(err) {
                return next(err)
            }
            else {
                res.send(result)
            }
        })
}