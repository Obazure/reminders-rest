import {QueryCreationAttributes} from '../db/types'

const validateQueryPeriod = (req: { body: QueryCreationAttributes }, res: any, next: any) => {
    if (!req.body.queryPeriodFrom || !req.body.queryPeriodTo) {
        const now = new Date()
        now.setHours(now.getHours() + 1)
        if (!req.body.queryPeriodTo) {
            req.body.queryPeriodTo = now.toISOString()
        }
        if (!req.body.queryPeriodFrom) {
            now.setMonth(now.getMonth() - 3)
            req.body.queryPeriodFrom = now.toISOString()
        }
    }
    next()
}

export default validateQueryPeriod
