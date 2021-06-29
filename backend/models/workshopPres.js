const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkshopSchema = new Schema({
  wtitle:String,
  date:Date,
  venue:String,
  user: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'user'},
  
});

const workshop = mongoose.model("research", WorkshopSchema);
module.exports = workshop;
