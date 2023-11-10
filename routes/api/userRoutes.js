const router = require('express').Router();
const {
  seeAllUsers,
  createNewUser
} = require('../../controllers/userController');

router.route('/').get(seeAllUsers).post(createNewUser);

module.exports = router;