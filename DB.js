import { Sequelize } from "sequelize"

const sequelize = new Sequelize('app', 'root', 'Qwerty!1', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize