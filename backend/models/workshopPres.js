const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkshopSchema = new Schema({
  wtitle:String,
  date:Date,
  venue:String,
  fileName: {
    type: String,
    required: true
},
filePath: {
    type: String,
    required: true
},
fileType: {
    type: String,
    required: true
},
fileSize: {
    type: String,
    required: true
},

  user: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'user'},
  
});

const workshop = mongoose.model("workshop", WorkshopSchema);
module.exports = workshop;
