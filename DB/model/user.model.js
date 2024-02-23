import { sequelize } from '../connection.js';
import { DataTypes } from 'sequelize';
import blogModel from './blog.model.js';

const userModel = sequelize.define('User', {
    name:{
        type: DataTypes.STRING(100), 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true, 
    },
    age:{
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
    }
}, {
    timestamps: false, 
});

userModel.hasMany(blogModel,{
    foreignKey:{
    name:'UserId',
    type: DataTypes.INTEGER
},
})

blogModel.belongsTo(userModel)

export default userModel;
