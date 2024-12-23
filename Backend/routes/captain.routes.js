const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
body('email').isEmail().withMessage("Invalid Email"),
body('fullname.firstname').isLength({min: 3}).withMessage("First name must be at least 3 character long"),
body('password').isLength({min:3}).withMessage('Color must be at least 3 charcter long'),
body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character long'),
body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 character long'),
body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vehicle Type')
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)



module.exports = router;