const express = require('express');
const app = express();
const User = require('../Models/User');

app.use(bodyParser.json());

// GET route for returning all users
router.get("/", async (req, res) => {
    try {
      const user = await USer.find();
      res.json({ msg: "data fetched", user });
    } catch (error) {
      console.log(error);
    }
  });

// POST route for adding a new user
router.post("/add", async (req, res) => {
    const { Name,LastName,Email,Password } = req.body;
    try {
      const newUser = new User({
        Name,
        LastName,
        Email,
        Password
    
      });
      const user = await newUser.save();
      res.json({ msg: "User added", user });
    } catch (error) {
      console.log(error);
    }
  });

// PUT route for editing a user by ID
router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await User.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "User edited", user });
    } catch (error) {
      console.log(error);
    }
  });
  

// DELETE route for removing a user by ID
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOneAndDelete({ _id: id });
      res.json({ msg: "User deleted", user});
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = router;