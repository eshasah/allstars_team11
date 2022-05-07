const express = require("express");
const userController = require('./../controllers/userController');


const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/:id").get(userController.getUserById);
router.route("/:email/:password").get(userController.getUserByEmailAndPass);

module.exports = router;