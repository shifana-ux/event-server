const express = require("express");
const {createsession,fetchsession,fetchsessionByeventId,deletesession,updatesession} = require("../controller/sessioncontroller");
const router = express.Router();

router.post("/", createsession);
router.get("/", fetchsession);
router.get("/session/:id", fetchsessionByeventId);
router.post("/:id", deletesession);
router.post("/update/:id",updatesession) ;

module.exports = router;