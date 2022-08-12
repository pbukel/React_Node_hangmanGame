const express = require("express");
const router = express.Router();

const {
  register,
  login,
  checkguess,
  generatenewword,
  points,
  leaders,
} = require("../controllers/mainCOntroller");
const { validateRegistration } = require("../modules/validators");

router.post("/register", validateRegistration, register);
router.post("/login", login);
router.post("/guessing", checkguess);
router.get("/getnewword", generatenewword);
router.post("/points", points);
router.get("/getLeaders", leaders);

module.exports = router;
