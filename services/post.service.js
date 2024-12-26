const { Post, User } = require("../models");

const postService = {
  getAllPosts: async () => {
    return await Post.findAll();
  },

  createPost: async (postData) => {
    const user = await User.findByPk(postData.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const post = await Post.create(postData);
    await user.increment("postCount");
    return post;
  },

  updatePost: async (postId, postData) => {
    const post = await Post.findByPk(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    return await post.update(postData);
  },

  deletePost: async (postId) => {
    const post = await Post.findByPk(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    const user = await User.findByPk(post.userId);
    await user.decrement("postCount");
    await post.destroy();
  },
};

module.exports = postService;
