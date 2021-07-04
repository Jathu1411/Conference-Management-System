"use strict";

const express = require("express");
const { upload } = require("../helper/filehelper");
const {
  workshopFileUpload,
  getallWorkshopFiles,
  updateStatus,
} = require("../controller/WorkshopUploadController");
const router = express.Router();

router.post("/workshop", upload.single("file"), workshopFileUpload);
router.get("/getworkshop", getallWorkshopFiles);
router.patch("/updateStatus/:id", updateStatus);

module.exports = {
  routes: router,
};
