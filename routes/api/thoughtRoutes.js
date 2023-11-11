const router = require('express').Router();
const {
  seeAllThoughts, 
  createNewThought,
} = require('../../controllers/thoughtController');

router.route('/').get(seeAllThoughts).post(createNewThought);

module.exports = router;