const router = require('express').Router();
let User = require('../../models/user.model.js');

router.route("/").get((req, res) => {
  //Grab the username from the query
  const { username } = req.query;

  //CHANGES FOR THE PROFILE COMPONENT
  //Search the users and get the user object specified by Id
  User.findOne({ username })
    .then(user => {
      const formattedUser = {
        username: user.username,
        name: user.name,
        email: user.email,
      };
      
      res.send(formattedUser);
    })
});

module.exports = router;