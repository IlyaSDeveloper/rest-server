import sequelize from '../DB.js'
import { DataTypes } from 'sequelize'

const Genres = sequelize.define('Genres', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'genres',
    timestamps: false
})

export default Genres