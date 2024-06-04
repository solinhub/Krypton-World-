const File = require('../models/File');
const User = require('../models/User');

const uploadFile = async (filename, filedata, apiKey) => {
    const user = await User.findOne({ apiKey });
    if (!user) {
        throw new Error('Invalid API key');
    }

    const file = new File({ filename, filedata, ownerId: user._id });
    await file.save();
    return file;
};

const getFiles = async (ownerId) => {
    return await File.find({ ownerId });
};

module.exports = { uploadFile, getFiles };