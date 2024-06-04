const User = require('../models/User');

const apiKeyAuth = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({ error: 'API key required' });
    }

    try {
        const user = await User.findOne({ apiKey });
        if (!user) {
            return res.status(401).json({ error: 'Invalid API key' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = apiKeyAuth;