'use strict';

const express = require('express');
const {upload} = require('../helper/filehelper');
const {singleFileUpload,getallSingleFiles,updateStatus} = require('../controller/ResearchuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles',getallSingleFiles)
router.patch('/update/:id',updateStatus)




module.exports = {
    routes: router
}