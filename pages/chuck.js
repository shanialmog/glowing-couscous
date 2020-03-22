import Layout from '../components/Layout'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import fetch from 'node-fetch'
import React, { useState } from 'react'


const Chuck = () => {
    const [newJoke, setNewJoke] = useState('Enter joke here')

    const handleChange = () => event => {
        setNewJoke(event.target.value)
        console.log("newjoke:" + newJoke)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitting Name ${newJoke}`);
        const requestPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'value': newJoke })
        };
        fetch('/api/chuck', requestPost)
    }
    return (
        <Layout>
            <h1>Think you can add another Chuck joke?</h1>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <FormControl fullWidth >
                    <InputLabel htmlFor="standard-adornment-amount">Joke</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={newJoke}
                        onChange={handleChange()}
                    />
                </FormControl>
                <div className="submit-button">
                    <Button type="submit" variant="contained">Add joke</Button>
                </div>
            </form>
            <style jsx>{`
        .submit-button {
            margin-top: 25px;
        }
    `}
            </style>
        </Layout>
    )
}

export default Chuck