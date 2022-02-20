const notfound = (req, res) => {

    res.status(404).send('this route is not present')
}
module.exports = notfound