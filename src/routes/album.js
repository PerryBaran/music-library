const express = require('express');
const albumController = require('../controllers/album');
const songController = require('../controllers/song');

const router = express.Router();

router.route('/').get(albumController.getAll);
router
  .route('/:albumId')
  .get(albumController.getById)
  .patch(albumController.patch)
  .delete(albumController.delete);
router
  .route('/:albumId/song')
  .post(songController.post)
  .get(songController.getAllByAlbumId);

module.exports = router;
