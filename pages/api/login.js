import { Users, Sessions } from "../../db"


const LoginCheck = (req, res) => {
    if (typeof Users[req.body.username] !== "undefined") {
        if (Users[req.body.username].pass === req.body.pass) {
            const newSessionId = Math.random().toString(32).substring(4)
            Sessions[newSessionId] = req.body.username
            //res.json({ newSessionId });
            res.setHeader('Set-Cookie', `sessionId=${newSessionId}`);
            res.statusCode = 200
            console.log(Sessions)
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