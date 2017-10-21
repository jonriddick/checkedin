module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    linkedin_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    profile_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default',
      validate: {
        len: [1]
      }
    }
    
  });

  User.associate = function(models) {
    // We're saying that a User should belong to an Event
    // A User can't be created without an Event due to the foreign key constraint
    User.belongsTo(models.Event, {
      foreignKey: 'event_url', targetKey: 'sanitized_event_name'
    });
  };

  return User;
};
