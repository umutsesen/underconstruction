


const express = require('express')
const path = require('path');
const app = express()
const port = 3001
var cors = require('cors')


app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
