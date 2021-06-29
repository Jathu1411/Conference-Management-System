'use strict';

const express = require('express');
const {upload} = require('../helper/filehelper');
const {singleFileUpload,getallSingleFiles} = require('../controller/ResearchuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles',getallSingleFiles)



module.exports = {
    routes: router
}