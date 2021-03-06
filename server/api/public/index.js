var public = require('express').Router();

public
    // ROOT/API/public/
    .get('/games', require('./games').fetchGames)
    .get('/cart', require('./cart').getItems)
    .get('/endsession', require('./cart').deleteCart)
    .post('/cart', require('./cart').add)
    .post('/checkout', require('./cart').checkout)
    .post('/delitem', require('./cart').remove)

module.exports = public