const express = require("express");
const router = express.Router();
const userService = require("../services/user.service");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit a user
router.put("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await userService.updateUser(userId, req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    await userService.deleteUser(userId);
    res.status(204).send(); // No content
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all posts of a user
router.get("/:userId/posts", async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await userService.getUserPosts(userId);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
