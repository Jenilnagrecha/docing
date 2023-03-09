const express = require("express");
const User = require("../models/user");
const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, profilePic } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        profilePic,
        name,
      });
      user = await user.save();
    }
    res.status(200).json({ user });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;