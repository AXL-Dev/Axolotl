const cookieController = {}

cookieController.setCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.id, {httpOnly: true}, {secure: true})
    return next()
}

module.exports = cookieController