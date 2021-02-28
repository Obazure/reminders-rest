import {Sequelize} from 'sequelize'
import {isDevelopment} from './app'

const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'test'
const MYSQL_USER = process.env.MYSQL_USER || 'test'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'test'
const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = process.env.DB_PORT || 3306

const dbOptions: any = {
    host: DB_HOST as string,
    port: DB_PORT as number,
    dialect: 'mysql',
}

if (!isDevelopment) {
    dbOptions.logging = false
}

export const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, dbOptions)
