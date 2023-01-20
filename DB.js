import { Sequelize } from "sequelize"

const sequelize = new Sequelize('app', 'root', 'pass', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize