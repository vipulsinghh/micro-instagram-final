const { User, Post } = require("../models");

const userService = {
  getAllUsers: async () => {
    return await User.findAll();
  },

  createUser: async (userData) => {
    return await User.create(userData);
  },

  updateUser: async (userId, userData) => {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return await user.update(userData);
  },

  deleteUser: async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
  },

  getUserPosts: async (userId) => {
    return await Post.findAll({
      where: { userId },
    });
  },
};

module.exports = userService;
