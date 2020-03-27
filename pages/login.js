import fetch from 'node-fetch'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userDetails, setuserDetails] = useState({ username: "", password: "" })

    const handleChange = () => event => {
        const { name, value } = event.target
        setuserDetails(prevState => ({ ...prevState, [name]: value }))
        console.log(name)
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const requestPost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userDetails.username, pass: userDetails.password })
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
            <h1>Login to Chuck</h1>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <div style={{ marginTop: '40px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '40px', width: '25ch', display: 'flex', flexDirection: 'column' }}>
                        <TextField 
                            style={{marginBottom: '20px'}}
                            required
                            id="standard-required"
                            label="Username"
                            name="username"
                            value={userDetails.username}
                            onChange={handleChange()} />
                        <TextField required
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            type="password"
                            value={userDetails.password}
                            onChange={handleChange()}
                        />
                    </div>
                    <div className="button">
                        <Button type="submit" variant="contained">login</Button>
                    </div>
                    <div className="button" style={{ marginTop: '20px' }}>
                        <Button onClick={() => postTransfer()} variant="contained">Transfer money</Button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}

export default Login