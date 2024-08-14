const apiKey = "Your API key"  // collect from https://account.eagle3dstreaming.com/api-keys-management 
const tokenExpiryDuration = 60000
var clientUserName = "your user name";
var streamingAppInfo = 
						{
						  "core": {
							"domain": "Your domain", // connector.eagle3dstreaming.com if you don't have a dedicated system
							"userName": clientUserName,
						  }
						}
				

function GenerateStreamingSessionToken(res,indexCP_dist=false, appName, configurationName) 
{
	streamingAppInfo.core.appName = appName;
	streamingAppInfo.core.configurationName = configurationName;

	const axios = require("axios");	
	
	axios.post(
				"https://token.eaglepixelstreaming.com/api/v1/token/create", 
				{
					"object" : streamingAppInfo,
					"expiry": tokenExpiryDuration,
					"client" : clientUserName
				}, 
				{
				  headers: {"Authorization": "Auth "+apiKey }
				}
	
			 )
			 .then((response) => 
			  {
				//console.dir(response);
				console.log("response.token :" +response.data.token);
				
				if(response.data.error)
					console.log("response.error :" +response.data.error);
	
			
				
				var obj={ 		
								
								
								token: response.data.token,
								clientUserName: clientUserName,
						}
									 
			console.log("obj passing to ejs view :" +  JSON.stringify(obj) );		
			res.render("player", obj);
			
        
      })
	  .catch(err => 
									{
									  console.error(err);
									  console.log(err);
								});	
}





var express = require("express");
var app = express();




const path = require("path");

const fs = require("fs");

 const options = {

	key: fs.readFileSync(path.join(__dirname, "./sslCertificates/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "./sslCertificates/cert.pem")),

 };

  var https = require("https").Server(options, app);

  https.listen(55555, function () {
    console.log("Https listening on *55555: " );
  });
  

var isAuthenticated = (redirectUrl) =>
									  function (req, res, next)
									  {
										return next();
									  };


		
app.use("/src", [isAuthenticated("/login"),express.static(path.join(__dirname, "/src")),]);
app.use("/dist", [  isAuthenticated("/login"),express.static(path.join(__dirname, "/dist")),]);

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/scripts_demo", express.static(path.join(__dirname, "./scripts_demo")));


app.set('view engine', 'ejs'); 

app.get("/error/:errorMsg",
	function(req, res){
		const errorMsg = req.params.errorMsg; //dynamically getting encrypted error message from url
		const decryptedMsg = atob(errorMsg); //decrypt error message
		res.render("custom_error", {decryptedMsg}) //rendering custom_error.ejs and passing decryptedMsg as data
	}
)

app.get("/:appName/:configurationName",

  function (req, res) 
  {
	 
		const appName = req.params.appName; //dynamically receiving app name from url
		const configurationName = req.params.configurationName; //dynamically receiving config name from url
		
		 GenerateStreamingSessionToken(res,false, appName, configurationName) 
		
		
  }
);





