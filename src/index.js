const express = require('express')

const app = express()

// GET hello

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!')

})

//GET/hello/:name

app.get('/hello/:name', (req, res) => {
  const name = req.params.name
  res.status(200).send(`Hello ${name}!`)
})

app
  .listen(3000, '0.0.0.0', () => {
    console.log('server started')
  })
