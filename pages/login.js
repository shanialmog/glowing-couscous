import fetch from 'node-fetch'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'

const Login = () => {
    const postLogin = () => {
        const requestPost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: "shani", pass: "pass123" })
        }
        console.log(requestPost)
        fetch("/api/login", requestPost)
    }

    const postTransfer = () => {
        const requestPost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: "shani", transfer: 50, transferUser: "guy" })
        }
        console.log(requestPost)
        fetch("/api/transfer", requestPost)
    }

    return (
        <Layout>
            <h2>Temporarily thin</h2>
            <div className="button">
                <Button onClick={() => postLogin()} variant="contained">login</Button>
            </div>
            <div className="button" style={{marginTop: '20px'}}>
                <Button onClick={() => postTransfer()} variant="contained">Transfer money</Button>
            </div>
        </Layout>
    )
}

export default Login