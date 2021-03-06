/**
 * Created by Lisa Joanno on 26/01/17.
 */

/**
 * Created by lisa on 09/01/17.
 */

var express = require('express');
var router = express.Router();

var teamDB = require('./../db/teamDB');

/**
 *
 * Nouvelle attente de formulation envoyée en DB
 *  ATTTENTTTTIIIOOOON application/json
 *
 */
router.post('/', function(req, res) {
    var teamName = req.body.teamName;
    if (teamName == undefined || teamName == null || teamName == "") {
        console.log("Probleme avec le teamName");
        res.statusCode = 422;
    } else {
        teamDB.addATeam(teamName, function (idTeamCreated) {
            res.send(idTeamCreated)
        });
    }
});


router.get('/all', function (req,res, next) {
    teamDB.getAllTeams(function (item) {
        res.render('listDisplay', {listName : "équipes", list: item});
    });
});



module.exports = router;