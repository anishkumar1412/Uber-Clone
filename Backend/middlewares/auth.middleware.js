const userModel = require('../models/user.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');


module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:'Unauthorized token'});
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token});

    if(isBlacklisted)
    {
        return res.status(401).json({message:'Unauthorized token'});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id);
        if(!user)
        {
            return res.status(401).json({message:'Unauthorized User'});
        }
        req.user = user;
        return next();

    }catch(err)
    {
        return res.status(401).json({message:'Unauthorized'});
    }
}

module.exports.authCaptain = async (req,res,next) =>{
const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
if(!token)
{
    return res.status(401).json({message:'Unauthorized token'});
}
const isBlacklisted = await blacklistTokenModel.findOne({token:token});
if(isBlacklisted) {
    return res.status(401).json({message:'Unauthorized token'});
}

try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if(!captain)
    {
        return res.status(401).json({message:'Unauthorized User'});
    }
    req.captain = captain;
    return next();
} catch(error)
{
    // console.log(error);
    res.status(401).json({message:'Unauthorized'});
}
}