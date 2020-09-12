const fastify = require('fastify')({
    logger: true
  })
const routes = require('./src/routes')

const mongoose = require('mongoose')

const uri='mongodb://localhost/podtsdb';

  // Connect to DB
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected…'))
   .catch(err => console.log(err))



routes.forEach((route, index) => {
    fastify.route(route)
   })
  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()