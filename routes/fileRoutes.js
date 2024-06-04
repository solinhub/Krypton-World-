const express = require('express');
    const { upload, listFiles } = require('../controllers/fileController');
    const apiKeyAuth = require('../middlewares/apiKeyAuth');
    const router = express.Router();

    router.post('/upload', apiKeyAuth, upload);
    router.get('/files', apiKeyAuth, listFiles);

    module.exports = router;