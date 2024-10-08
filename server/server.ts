import fastify, { FastifyRequest, FastifyReply } from 'fastify'

const app = fastify({ logger: true })

const PORT = Number(process.env.PORT)

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening on ${address}`)
})

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: 'world' }
})
