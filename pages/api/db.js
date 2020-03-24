import {Users} from "../../db"

const db = (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        const users = Users
        console.log(users)
        res.end(JSON.stringify(users))
    }

export default db