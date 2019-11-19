var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        // function 
        // anytime you make post request - 
        console.log(req.body)
        res.json({ok: true})

    });



}