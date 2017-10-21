

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
    // Associating Event with User
    // When an Event is deleted, also delete any associated users who went to that event
    Event.hasMany(models.User, {
      foreignKey: 'event_url', sourceKey: 'sanitized_event_name'
      //onDelete: "cascade"
    });
  };

  return Event;
};
