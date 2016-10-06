/**
 * Created by RFreeman on 10/6/2016.
 */
var express = require('express');
var router = express.Router();

// reference the Game model
var Game = require('../models/game');

// GET handler for /games
router.get('/', function(req, res, next) {

    // use Game model to run a query
    Game.find(function(err, games) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the games view
            res.render('games', {
                title: 'Video Games',
                games: games
            });
        }
    });
});

// make controller public
module.exports = router;


