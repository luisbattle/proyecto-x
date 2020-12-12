module.exports = function (sequelize, dataTypes) {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
    },
    lastName: {
      type: dataTypes.STRING,
    },
    profile_id: {
      type: dataTypes.INTEGER,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    image: {
      type: dataTypes.STRING,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };
  let User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsTo(models.Profile, {
      as: "Profile",
      foreignKey: "profile_id",
    });
  };

  return User;
};
