const locController = require('../controllers/locController')
const userController = require('../controllers/userController')
const { schema } = require('../models/locdata')

const routes = [
  {
    method: 'GET',
    url: '/api/locs',
    handler: locController.getAll
  },
  {
    method: 'POST',
    url: '/api/isUser',
    handler: userController.isUser
  },
  {
    method: 'GET',
    url: '/api/users',
    
    handler: userController.getAll
  },
  {
    method: 'GET',
    url: '/api/oneUser/:id',
    handler: userController.getSingleUsers
  },
  {
    method: 'GET',
    url: '/api/loc/:id',
    handler: locController.getSingleLoc
  },
  {
    method: 'POST',
    url: '/api/locs',
    handler: locController.addLoc
  },
  {
    method: 'POST',
    url: '/api/user',
    handler: userController.addUsers
  },
  {
    method: 'PUT',
    url: '/api/loc/:id',
    handler: locController.updateLoc
  },
  {
    method: 'DELETE',
    url: '/api/loc/:id',
    handler: locController.deleteLoc
  }
]

module.exports = routes