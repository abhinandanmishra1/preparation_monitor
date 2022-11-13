const express = require('express')

const GymController = require('../controllers/gymController')

const router = express.Router()

//gymRoutes 
router.route('/')
  .get(GymController.getGyms)
  .post(GymController.createGym);

router.route('/:id')
  .get(GymController.getGymById)
  .put(GymController.updateGym)
  .delete(GymController.deleteGym);

module.exports = router
