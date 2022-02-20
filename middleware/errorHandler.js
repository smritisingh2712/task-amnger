const { CustomAPIError } = require('../error/customerror')
const errorHandlermiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ mag: `Something went wrong please try again` })
}
module.exports = errorHandlermiddleware