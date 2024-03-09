const express = require('express');
const fs = require('fs');
const path = require("path");

const app = express();
const port = 3000;


const tokenExpiryDuration = 60000
// Replace this with your API key
const apiKey = "Your api Key"  // collect from https://account.eagle3dstreaming.com/api-keys-management
// Replace this with your username
var clientUserName = "Your username";
var streamingAppInfo = {
    "core": {
        "domain": "connector.eagle3dstreaming.com",
        "userName": clientUserName,
        "appName": "Your app name",
        "configurationName": "Your configuration name"
    }
}

// Set up EJS as the view engine
// app.set('view engine', 'ejs');

// Define a route to render the modified index.html
app.get('/', (req, res) => {
    return serveIndexHtml(res);
});

app.get('/index.html', (req, res) => {
    return serveIndexHtml(res);
})

// Serve the modified index.html
function serveIndexHtml(res) {
    fetch("https://token.eaglepixelstreaming.com/api/v1/token/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Auth ' + apiKey
        },
        body: JSON.stringify({
            "object": streamingAppInfo,
            "expiry": tokenExpiryDuration,
            "client": clientUserName
        })
    }).then(response => response.json())
        .then((response) => {
            // console.log(JSON.stringify(response, null, 2))
            console.log("response.token :" + response.token);

            if (response.error)
                console.log("response.error :" + response.error);


            // Read the index.html file
            const indexHtml = fs.readFileSync('./index.html', 'utf8');
            const headEndIndex = indexHtml.indexOf('</head>');
            const beforeTokenScript = indexHtml.slice(0, headEndIndex);
            const afterTokenScript = indexHtml.slice(headEndIndex);
            const tokenScript = `<script type='text/javascript'>e3ds_session_token='${response.token}';clientUserName='${clientUserName}';</script>`
            // insert the token
            const html = beforeTokenScript + tokenScript + afterTokenScript;
            res.send(html);


        }).catch(err => {
        console.error(err);
        console.log(err);
    });
}


var isAuthenticated = (redirectUrl) => function (req, res, next) {
        return next();
    };

app.use("/src", [isAuthenticated("/login"), express.static(path.join(__dirname, "/src")),]);
app.use("/dist", [isAuthenticated("/login"), express.static(path.join(__dirname, "/dist")),]);

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/static", express.static(path.join(__dirname, "./static")));
app.use("/scripts", express.static(path.join(__dirname, "./scripts")));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
