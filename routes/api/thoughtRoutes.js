const router = require('express').Router();
const {
  seeAllThoughts, 
  createNewThought,
  seeOneThought
} = require('../../controllers/thoughtController');

router.route('/').get(seeAllThoughts).post(createNewThought);

router.route('/:thoughtId').get(seeOneThought);

module.exports = router;