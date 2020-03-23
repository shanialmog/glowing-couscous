const jokes = [
    { id: "48_89YsET8G4Zxi4MIVLyw", value: "Chuck Norris almost turned down a cameo in the movie 'dodgeball' on the grounds that he doesn't dodge balls.. He prefers them resting on his chin." },
    { id: "16IFnuNCRaWvfkqMnYZMAQ", value: "Chuck Norris once dug a hole... to the bottom of the ocean." },
    { id: "IgHCdp1uTZyVW-QMe4-AvA", value: "ive heard that Chuck Norris can appear and kill anyone before they can say anything negative about him whatsoever, but even i have a hard time believing that, i mean, not even Chuck Norris could...." }
]



const ChuckAPI = (req, res) => {
    if (req.method === 'POST') {
        jokes.push(req.body)
        res.end()
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        const joke = jokes[Math.floor(Math.random() * jokes.length)]
        console.log(joke)
        res.end(JSON.stringify(joke))
    }
}

export default ChuckAPI