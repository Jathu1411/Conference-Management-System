const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  name: String,
  phone:String,
  city:String,
  state:String,
  country:String,
  qualification:String,
});

const user = mongoose.model("user", UserSchema);
module.exports = user;
