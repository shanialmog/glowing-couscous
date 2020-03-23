import Link from 'next/link'
import fetch from 'node-fetch'
import Button from '@material-ui/core/Button'
import { useEffect } from 'react'
import React, { useState } from 'react'

const Home = () => {
    const [joke, setJoke] = useState('')

    async function fetchData() {
        // const res = await fetch("https://api.chucknorris.io/jokes/random")
        const res = await fetch("/api/chuck")
        res
            .json()
            .then(res => {
                console.log(res)
                setJoke(res)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="root">
            <div className="header">
                <h1>Home of Chuck</h1>
                <span>
                    <img src={"https://assets.chucknorris.host/img/avatar/chuck-norris.png"}></img>
                </span>
            </div>
            {joke.value}
            <div className="button">
                <Button onClick={() => fetchData()} variant="contained">More Chuck</Button>
            </div>
            <div className="buttonc">
                <Button variant="contained">
                    <ul>
                        <li><Link href="/chuck"><a>Add a Chuck joke</a></Link></li>
                    </ul>
                </Button>
            </div>
            <style jsx>{`
                .root .button {
                    margin-top: 30px;
                    margin-bottom: 20px;
                }
                .header {
                    display: flex;
                    align-items: center;
                    justify-content center;
                }
                 li a {
                 text-decoration: none;
                 color: #000;
                }
                ul {
                    list-style: none;
                    padding-left: 0;
                }
            `}</style>
        </div>
    )
}







export default Home