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
    User.belongsTo(models.Event, {
    //Comment next line out for Heroku push  
    foreignKey: 'event_url', targetKey: 'sanitized_event_name'
    });
  };

  return User;
};
