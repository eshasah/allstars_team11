const express = require("express");

const vaccineHistoryController = require("./../controllers/vaccineHistoryController");

const router = express.Router();

router
  .route("/")
  .post(vaccineHistoryController.vaccineHistory);

module.exports = router;