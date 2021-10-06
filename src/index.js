const https = require('https');
const url = require('url');
const cookie = require('cookie');
const AWS = require('aws-sdk');
const { jwtVerify } = require('jose/jwt/verify');
const Axios = require('axios');

const identityPool = 'us-west-2:ac160263-14e7-4ccf-a216-5f470e7f85f4';
const authRedirect = 'https://rasky-test.auth.us-west-2.amazoncognito.com/login?client_id=2i3g72u0761lq3vuhj1b6jnb15&response_type=code&scope=email+openid+phone+profile&redirect_uri=https://tools.rasky.co/';
const tokenURL = 'https://2i3g72u0761lq3vuhj1b6jnb15:<secret>@rasky-test.auth.us-west-2.amazoncognito.com/oauth2/token';
const tokenRedirect = 'https://tools.raksy.co/';
const tokenClientId = '2i3g72u0761lq3vuhj1b6jnb15';

exports.handler = async function(event, context) {
    const request = event.Records[0].cf.request;
    const queryData = url.parse(request.uri + request.queryString, true).query;
    const cookies = cookie.parse(request.headers.cookie || '')

    // Four possibilities:
    // 1) creds still valid
    // 2) refresh token still valid, creds expired
    // 3) auth code present, new refresh token needs to be fetched
    // 4) no creds/token/auth code present
    
    AWS.config.credentials = AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPool,
        Logins: {
            
        }
    })
}