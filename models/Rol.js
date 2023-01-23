const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');


class Rol extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    ModelName: 'rol',
})

module.exports = Rol;