const express = require('express');
const songController = require('../controllers/song');

const router = express.Router();

router.get('/', songController.getAll);
router
  .route('/:songId')
  .get(songController.getById)
  .patch(songController.patch)
  .delete(songController.delete);

module.exports = router;
