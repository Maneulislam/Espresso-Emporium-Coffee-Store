const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Coffee is Ready...')
})

app.listen(port, () => {
    console.log(`Coffee server is Running on port ${port}`)
})
