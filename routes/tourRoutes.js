const express = require('express');

const router = express.Router();

const tourController = require('../controllers/tourControllers');

router
  .route('/')
  .get(tourController.getTours)
  .post(tourController.checkBody, tourController.createTour);

router.param('id', tourController.checkId);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.patchTour)
  .delete(tourController.deleteTour);

module.exports = router;
