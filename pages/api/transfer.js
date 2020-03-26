import { Users, Sessions } from "../../db"

const Transfer = (req, res) => {
    //check if username and sessionid in cookie matches username and session in db
    const username = req.body.username
    const sessionSplit = req.headers.cookie.split('=')
    const sessionId = sessionSplit[1]
    const transfer = req.body.transfer
    const transferUser = req.body.transferUser
    console.log(sessionId)
    console.log(Sessions)
    console.log(username)
    if (Sessions[sessionId] === username) {
        if (Users[username]["balance"] >= transfer && typeof Users[transferUser] !== "undefined") {
            Users[username]["balance"] = Users[username]["balance"] - transfer
            Users[transferUser]["balance"] = transfer + Users[transferUser]["balance"] // or transfer +=
            res.statusCode = 200
        } else {
            res.statusCode = 401
            res.statusMessage = (`Username ${req.body.username} does not have enough balance: ${transfer}`)
        }
    }
    // console.log(req.headers.cookie)
    // console.log(Users)
    // console.log(Sessions)
    console.log(Users)
    res.end()
}

export default Transfer