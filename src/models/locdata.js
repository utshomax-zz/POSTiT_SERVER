// External Dependancies
const mongoose = require('mongoose')

const locSchema = new mongoose.Schema({
  b_id:String,
  name: String,
  oname: String,
  c_loc:{
    post_n:String,
    post_no:String,
    city:String,
  },
  
  0:{
      post_n:String,
      post_no:String,
      city:String,
    },
  1:{
      post_n:String,
      post_no:String,
      city:String,
    },
  2:{
      post_n:String,
      post_no:String,
      city:String,
    },
  3:{
      post_n:String,
      post_no:String,
      city:String,
    },
  4:{
      post_n:String,
      post_no:String,
      city:String,
    },
  5:{
      post_n:String,
      post_no:String,
      city:String,
    },
  6:{
      post_n:String,
      post_no:String,
      city:String,
    },
  7:{
      post_n:String,
      post_no:String,
      city:String,
    },
  8:{
      post_n:String,
      post_no:String,
      city:String,
    },
  9:{
      post_n:String,
      post_no:String,
      city:String,
    },
  10:{
    post_n:String,
    post_no:String,
    city:String,
  }
 
})

module.exports = mongoose.model('Locdata', locSchema)