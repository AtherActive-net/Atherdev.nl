const express = require('express')

// Constants
const app = express()

// Config
const port = 3010


////
/// Routing...
//

app.use(express.static('src/static'));


app.get('/', (req, res) => res.sendFile("index.html"))

app.listen(port, () => console.log(`listening on port ${port}!`))