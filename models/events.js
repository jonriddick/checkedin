module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // Giving the Event model a name of type STRING
    event_host: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sanitized_event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_keyword1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_keyword2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_keyword3: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Event.associate = function(models) {
    Event.hasMany(models.User, {
    //Comment next line out for Heroku push  
     foreignKey: 'event_url', sourceKey: 'sanitized_event_name'
    });
  };

  return Event;
};
