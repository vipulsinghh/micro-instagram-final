const express = require("express");
const router = express.Router();
const postService = require("../services/post.service");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a post for a user
router.post("/", async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit a post
router.put("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const updatedPost = await postService.updatePost(postId, req.body);
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a post
router.delete("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    await postService.deletePost(postId);
    res.status(204).send(); // No content
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
