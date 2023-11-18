const router = require('express').Router();
const {
  seeAllThoughts, 
  createNewThought,
  seeOneThought,
  updateOneThought,
  deleteOneThought

} = require('../../controllers/thoughtController');

router.route('/').get(seeAllThoughts).post(createNewThought);

router.route('/:thoughtId').get(seeOneThought).put(updateOneThought).delete(deleteOneThought);

module.exports = router;