const express = require('express')

const UserController = require('../controllers/userController')

const router = express.Router()

// userRoutes
router.route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser);

router.route('/:id')
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router
