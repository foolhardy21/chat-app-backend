const router = require('express').Router();
const authenticationController = require('../controllers/authenticationController');

router.get('/', authenticationController.verifyLogin);
router.post('/', authenticationController.newUser);

module.exports = router;
