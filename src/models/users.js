// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  uid:String,
  name: String,
  oname: String,
  mobile:Number,
  password:String,
  o_loc:{
    post_n:String,
    post_no:String,
    city:String,
    dateTime:String
  },
  role:String
})

module.exports = mongoose.model('user', userSchema)