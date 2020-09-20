const boom = require('boom')
const Loc = require('../models/locdata')


exports.getAll = async (req, reply) => {
    try {
      const locs = await Loc.find()
      return locs
    } catch (err) {
      throw boom.boomify(err)
    }
  }


  exports.getSingleLoc = async (req, reply) => {
    try {
      const id = req.params.id
      const loc = await Loc.findById(id)
      return loc
    } catch (err) {
      throw boom.boomify(err)
    }
  }

exports.addLoc = async (req, reply) => {
    try {
     
      const data= req.body
      const loc = new Loc(data)
      return loc.save()
    } catch (err) {
      //console.log(err)
      throw boom.boomify(err)
    }
  }
  
//TO DO
//split this function to two part one for only updating loc and one for only updating id name
  exports.updateLoc = async (req, reply) => {
    try {
      const id = req.params.id
      var locInfo = await Loc.findById(id)
    
      var f,i;
      if(req.body.name||req.body.b_id){
        const { ...updateData } = req.body
        const update = await Loc.findByIdAndUpdate(id, updateData, {  new: true })
        return update
        
      }
      else{
          for(i=0;i<10;i++){
            if(locInfo[i].city==undefined){
              f=i;
              break
            }
          }
        var f_loc ={"c_loc":req.body.c_loc,[f]:locInfo.c_loc}
        const { ...updateData } = f_loc
        const update = await Loc.findByIdAndUpdate(id, updateData, {  new: true })
        return update
      }
    
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  

  exports.deleteLoc = async (req, reply) => {
    try {
      const id = req.params.id
      const loc = await Loc.findByIdAndRemove(id)
      return loc
    } catch (err) {
      throw boom.boomify(err)
    }
  }