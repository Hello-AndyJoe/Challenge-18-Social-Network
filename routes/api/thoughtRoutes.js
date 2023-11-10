const router = require('express').Router();
const {
  seeAllThoughts,
} = require('../../controllers/thoughtController');

router.route('/').get(seeAllThoughts);

module.exports = router;