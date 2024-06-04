const { createUser, verifyOtp } = require('../services/authService');

const register = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await createUser(email);
        res.status(201).json({ email: user.email, apiKey: user.apiKey });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const verify = async (req, res) => {
    const { email, otp } = req.body;
    try {
        await verifyOtp(email, otp);
        res.status(200).json({ message: 'OTP verified' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, verify };