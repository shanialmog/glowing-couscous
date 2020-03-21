const jokes = [
    {categories:[],created_at:"2020-01-05 13:42:28.420821",icon_url:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",id:"48_89YsET8G4Zxi4MIVLyw",updated_at:"2020-01-05 13:42:28.420821",url:"https://api.chucknorris.io/jokes/48_89YsET8G4Zxi4MIVLyw",value:"Chuck Norris almost turned down a cameo in the movie 'dodgeball' on the grounds that he doesn't dodge balls.. He prefers them resting on his chin."},
    {categories:[],created_at:"2020-01-05 13:42:30.177068",icon_url:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",id:"16IFnuNCRaWvfkqMnYZMAQ",updated_at:"2020-01-05 13:42:30.177068",url:"https://api.chucknorris.io/jokes/16IFnuNCRaWvfkqMnYZMAQ",value:"Chuck Norris once dug a hole... to the bottom of the ocean."},
    {categories:[],created_at:"2020-01-05 13:42:30.480041",icon_url:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",id:"IgHCdp1uTZyVW-QMe4-AvA",updated_at:"2020-01-05 13:42:30.480041",url:"https://api.chucknorris.io/jokes/IgHCdp1uTZyVW-QMe4-AvA",value:"ive heard that Chuck Norris can appear and kill anyone before they can say anything negative about him whatsoever, but even i have a hard time believing that, i mean, not even Chuck Norris could...."}
]



export default (req, res) => {
    if (req.method === 'POST') {
        jokes.push(req)
    } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const joke = jokes[Math.floor(Math.random() * jokes.length)]
    console.log(joke)
    res.end(JSON.stringify({joke}))
    }
}