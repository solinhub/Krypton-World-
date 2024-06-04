const { uploadFile, getFiles } = require('../services/fileService');

const upload = async (req, res) => {
    const { filename, filedata } = req.body;
    const apiKey = req.headers['x-api-key'];
    try {
        const file = await uploadFile(filename, filedata, apiKey);
        res.status(201).json(file);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listFiles = async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    try {
        const files = await getFiles(apiKey);
        res.status(200).json(files);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { upload, listFiles };