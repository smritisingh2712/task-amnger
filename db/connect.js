const mongoose = require('mongoose')
//const database = 'mongodb+srv://sam:12345@cluster0.bvs9x.mongodb.net/todoDatabse?retryWrites=true&w=majority'
const connectDatabse = (url) => {

    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

}
module.exports = connectDatabse

// mongoose.connect(database, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }).then(() => console.log('db is connected')).catch((err) => console.log(err))