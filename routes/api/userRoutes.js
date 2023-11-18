const router = require('express').Router();
const {
  seeAllUsers,
  createNewUser,
  seeOneUser,
  updateOneUser

} = require('../../controllers/userController');

router.route('/').get(seeAllUsers).post(createNewUser);

router.route('/:userId').get(seeOneUser).put(updateOneUser);

module.exports = router;