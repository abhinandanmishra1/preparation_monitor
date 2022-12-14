const express = require('express')

const GymController = require('../controllers/gymController')
const UserController = require('../controllers/userController')

const router = express.Router()

//gymRoutes 
router.post('/gym', GymController.createGym)
router.put('/gym/:id', GymController.updateGym)
router.delete('/gym/:id', GymController.deleteGym)
router.get('/gym/:id', GymController.getGymById)
router.get('/gyms', GymController.getGyms)

// userRoutes
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)
router.get('/user/:id', UserController.getUserById)
router.get('/users', UserController.getUsers)

module.exports = router
