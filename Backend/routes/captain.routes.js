const express = require('express');
const router = express.Router();
const captainContoller = require('../controllers/captain.controller');
const {body} = require('express-validator');

router.post('/register',[
body('email').isEmail().withMessage("Invalid Email"),
body('fullname.firstname').isLength({min: 3}).withMessage("First name must be at least 3 character long"),
body('password').isLength({min:3}).withMessage('Color must be at least 3 charcter long'),
body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character long'),
body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 character long'),
body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vehicle Type')
],captainContoller.registerCaptain);





module.exports = router;