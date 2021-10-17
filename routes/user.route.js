const express = require("express");
const User = require("../database/models/user.model");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let user = await User.findByCredentials({ email: req.body.user.email });
    if (!user) {
      user = new User({ ...req.body.user });
      await user.save();
    }
    res.status(200).send({
      success: true,
      message: "Successfully logged in.",
      user: user.getPublicProfile(),
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
