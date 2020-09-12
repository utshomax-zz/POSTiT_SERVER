const locController = require('../controllers/locController')
const { schema } = require('../models/locdata')

const routes = [
  {
    method: 'GET',
    url: '/api/locs',
    handler: locController.getAll
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