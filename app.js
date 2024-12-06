const cors = require('cors');
const express = require('express')
const app = express()

const db = require('./data/db.js')
const notFoundMiddleware = require('./middlewares/notFoundMiddleware.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
const PORT = 3000

app.use(cors())

app.use(express.json())

app.use('/', loggerMiddleware)
/*
app.use('/', (req, res, next) => {
    throw new Error("Hai spaccato tutto!");
  });
*/

app.get('/', db.show)


app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
})