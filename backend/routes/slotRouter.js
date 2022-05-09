const express = require("express");

const slotController = require("./../controllers/slotController");

const router = express.Router();

router
  .route("/")
  .get(slotController.getSlot)
  .post(slotController.bookSlot);

module.exports = router;