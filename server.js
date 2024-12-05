const app = require('./app')
const CONFIG = require('./config/config')
const connectToDb = require('./db/mongodb')

connectToDb()

app.listen(CONFIG.PORT, ()=> {
    console.log(`Server connect at port ${CONFIG.PORT} `)
})