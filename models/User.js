const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    apiKey: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;