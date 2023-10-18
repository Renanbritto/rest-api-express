const { Router } = require('express')

const withAsyncErroHandler = require('../middlewares/async-error')

// CRUD

const router = Router()

const createUser = async (req, res) => {
  res.status(201).header('Location', '/users/???').send({})
}
router.post('/user', withAsyncErrorHandler(createUser))

router.get('/', withAsyncErrorHandler(async (req, res) => {
  res.status(200).send({ users: [] })
}))

router.get('/', withAsyncErrorHandler (async (req, res) => {
  res.status(200).send({})
}))

router.put('/', withAsyncErrorHandler(async (req, res) => {
  res.status(200).send({})
}))


router.delete('/:id', async (req, res) =>{
  res.status(204).send()
})

module.exports = router
