const router = require('express').Router();
let User = require('../../models/user.model.js');

// This is for the base route on the app: '/'
router.route('/').get((req, res) => {

  // We need to grab all the users data for now
  // Eventually we will only grab the logged in users data
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;