const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');


class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    ModelName: 'user',
    timestamps: false
})

module.exports = User;