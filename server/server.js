const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        clientId: '4cf947749ec84caea0b818ba1dc1e5f6',
        clientSecret: 'd7151116e66748f89ff5f0f7c44c4e2b',
        redirectUri: 'http://localhost:3000'
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})