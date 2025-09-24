const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Mhammed"
    },
    {
      "id":"2",
      "title":"Haithem"
    },
    {
      "id":"3",
      "title":"Neyssan"
    },
    {
      "id":"4",
      "title":"CHiheb"
    },
    {
      "id":"5",
      "title":"Achref"
    },
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})