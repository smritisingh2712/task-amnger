const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A task must has a name'],
        trim: true,
        maxlength: [20, 'a name cant be more than 20 charecter']
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Task', TaskSchema)