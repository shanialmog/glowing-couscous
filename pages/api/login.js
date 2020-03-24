import { Users } from "../../db"


const LoginCheck = (req, res) => {
    if (typeof Users[req.body.username] !== "undefined") {
        if (Users[req.body.username].pass === req.body.pass) {
            res.statusCode = 200
        } else {
            res.statusCode = 401
            res.statusMessage = (`Username ${req.body.username} does not match password`)
        }
    } else {
        res.statusCode = 401
        res.statusMessage = (`${req.body.username} does not exist`)
    }
    res.end()
}

export default LoginCheck