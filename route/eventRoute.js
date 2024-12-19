const express = require("express");
const { createEvent,fetchEvent,fetchEventById,deleteEvent, updateEvent} = require("../controller/authController");
const { route } = require("./sessionRoute");
const router = express.Router();

router.post("/", createEvent);
router.get("/", fetchEvent);
router.get("/:id", fetchEventById);
router.post("/:id", deleteEvent);
router.post("/update/:id",updateEvent) ;

module.exports = router;