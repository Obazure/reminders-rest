import express from 'express'
import { sequelize } from './config/database'
import apiReminderRouter from './routes/apiReminderRouter'

const app = express()
app.use(express.static('public'))
app.use(express.json())

app.use('/api/reminder', apiReminderRouter)

async function start() {
    try {
        await sequelize.sync() // {alter: true}
        const PORT = process.env.NODE_PORT || process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
