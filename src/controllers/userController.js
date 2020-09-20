const boom = require('boom')
const User = require('../models/users')


exports.getAll = async (req, reply) => {
    try {
      const users = await User.find()
      return users
    } catch (err) {
      throw boom.boomify(err)
    }
  }


exports.getSingleUsers = async (req, reply) => {
    try {
      const id = req.params.id
      const user = await User.findById(id)
      return user
    } catch (err) {
      throw boom.boomify(err)
    }
}
exports.isUser = async (req, res) => {
    try {
        var uid = req.body.uid;
        var password = req.body.password;
        var data;
        if (uid.length > 0 && password.length > 0) {
            data = {
                uid: uid,
                password: password
            }
        } else {
            return {'msg':'length error'}
        }
        console.log(data) 
        const result= await User.findOne(data, function(err, user) {

            if (err) {
                return {'msg':'db error'}
            }
            return user 
        });
        if(result){
            return {'status':1,'id':result._id}
        }
        return {'status':0,'msg':'no user found'}
       
    } catch (err) {
      throw boom.boomify(err)
    }
  }
exports.addUsers = async (req, reply) => {
    try {
      const user = new User(req.body)
      return user.save()
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  

  exports.updateUser = async (req, reply) => {
    try {
      const id = req.params.id
      const { ...updateData } = req.body
      const update = await User.findByIdAndUpdate(id, updateData, {  new: true })
      return update
    
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  

  exports.deleteUser = async (req, reply) => {
    try {
      const id = req.params.id
      const user = await User.findByIdAndRemove(id)
      return user
    } catch (err) {
      throw boom.boomify(err)
    }
  }