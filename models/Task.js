const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');


class Task extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    ModelName: 'task',
})

module.exports = Task;