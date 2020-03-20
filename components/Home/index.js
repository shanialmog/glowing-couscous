import fetch from 'node-fetch'
import Button from '@material-ui/core/Button' 
import { useEffect } from 'react'
import React, { useState } from 'react'

const Home = () => {
    const [ joke, setJoke ] = useState('')

    async function fetchData() {
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        res
          .json()
          .then(res => setJoke(res))
      }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="root">
            <div className="header">
                <h1>Home of Chuck</h1>
                <span>
                    <img src={joke.icon_url}></img>
                </span>
            </div>
                {joke.value}
            <div className="button">
                 <Button onClick={()=> fetchData()} variant="contained">More Chuck</Button>
             </div>
            <style jsx>{`
                .root .button {
                    margin-top: 30px;
                }
                .header {
                    display: flex;
                    align-items: center;
                    justify-content center;
                }
            `}</style>
        </div>
    )
}







export default Home