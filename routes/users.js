const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/soltifire");                //localhost


const userschema = mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  address: String,
  city: String,
})                                                                        //document or schema

module.exports = mongoose.model("students", userschema)                                                          //colection or table
