const express = require('express');

//To remove cors and axios errors
const cors = require('cors');

//To remove error message 'Request failed with status code 500'
const bodyParser = require('body-parser');

/*
The SpotifyWebApi helps read the data recieved afetr the authenticaition easier
*/
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {

    /*
    Compiling the client ID, secret key and the redirectUri as a new SpotifyWebApi instance
    */

    const spotifyApi = new SpotifyWebApi({
        clientId: '4cf947749ec84caea0b818ba1dc1e5f6',
        clientSecret: 'd7151116e66748f89ff5f0f7c44c4e2b',
        redirectUri: 'http://localhost:3000'
    });

    /*
    Code that's returned as a query parameter to the redirect URI
    */
    const code = req.body.code;

    /*
    Retrieving an access token and a refresh token
    */
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        //If error occurs
        res.sendStatus(400);
    })
})

app.listen(3001);