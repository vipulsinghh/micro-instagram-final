module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    images: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("images"));
      },
      set: function (value) {
        this.setDataValue("images", JSON.stringify(value));
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Post;
};
