const User = require('../models/User');
const otpGenerator = require('../utils/otpGenerator');
const sendEmail = require('../config/email');
const redisClient = require('../config/redis');
const crypto = require('crypto');

const createUser = async (email) => {
    const apiKey = crypto.randomBytes(16).toString('hex');
    const user = new User({ email, apiKey });
    await user.save();
    await generateOtp(email);
    return user;
};

const generateOtp = async (email) => {
    const otp = otpGenerator();
    await redisClient.set(email, otp, { EX: 300 });
    await sendEmail(email, 'Your OTP Code', `Your OTP is ${otp}`);
};

const verifyOtp = async (email, otp) => {
    const storedOtp = await redisClient.get(email);
    if (storedOtp && storedOtp === otp) {
        return true;
    }
    throw new Error('Invalid OTP');
};

module.exports = { createUser, verifyOtp };