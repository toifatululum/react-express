const express = require("express");
const router = express.Router();

const User = require();
router.get("/", [], async (req, res) => {
  return res.json({
    nama: "ulum"
  });
});
router.post("/register", [], async (req, res) => {
  console.log(req.body);
});

module.exports = router;
