// External Dependancies
const mongoose = require('mongoose')

const locSchema = new mongoose.Schema({
  b_id:String,
  name: String,
  oname: String,
  mobile:String,
  d_loc:{
    post_n:String,
    post_no:String,
    city:String,
    dateTime:String
  },
  c_loc:{
    post_n:String,
    post_no:String,
    city:String,
    dateTime:String
  },
  
  0:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  1:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  2:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  3:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  4:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  5:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  6:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  7:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  8:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  9:{
      post_n:String,
      post_no:String,
      city:String,
      dateTime:String
    },
  10:{
    post_n:String,
    post_no:String,
    city:String,
    dateTime:String
  }
 
})

module.exports = mongoose.model('Locdata', locSchema)