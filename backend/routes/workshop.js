'use strict';

const express = require('express');
const {upload} = require('../helper/filehelper');
const {workshopFileUpload,getallWorkshopFiles} = require('../controller/WorkshopUploadController');
const router = express.Router();


router.post('/workshop', upload.single('file'), workshopFileUpload);
router.get('/getworkshop',getallWorkshopFiles)



module.exports = {
    routes: router
}