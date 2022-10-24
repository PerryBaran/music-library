const express = require('express');
const artistController = require('../controllers/artist');
const albumController = require('../controllers/album');
const songController = require('../controllers/song');

const router = express.Router();

router.route('/').post(artistController.post).get(artistController.getAll);
router
  .route('/:artistId')
  .get(artistController.getById)
  .patch(artistController.patch)
  .delete(artistController.delete);
router
  .route('/:artistId/album')
  .post(albumController.post)
  .get(albumController.getAllByArtistId);
router.get('/:artistId/song', songController.getAllByArtistId);

module.exports = router;
