

window.onload = async function(){
    const response = await fetch('../config.json');
    const {clientUserName, tokenExpiryDuration, apiKey, app, config} = await response.json();

    fetch(
        "https://token.eaglepixelstreaming.com/api/v1/token/create",
        {
            method: "POST",
            body: JSON.stringify({
            "object": {
                "core": {
                "domain": "connector.eagle3dstreaming.com",
                "userName": clientUserName,
                "appName": app,
                "configurationName": config
                },
                "expiry": tokenExpiryDuration,
                "configurationToOverride": {}
            },
            "client": clientUserName
            }),
            headers: {
            "Authorization": "Auth " + apiKey,
            "Content-Type": "application/json"
            }
        }
        ).then(res=> res.json())
        .then(data=> e3ds_controller.main(data.token, clientUserName))
        .catch(error=> console.error(error));
}

e3ds_controller.callbacks.onDataChannelOpen=function ()
{
    console.log("ob-onDataChannelOpen");
     
} 
e3ds_controller.callbacks.onDataChannelClose=function ()
{
    console.log("ob-onDataChannelClose");
     
} 

e3ds_controller.callbacks.onConfigAcquire=function ()
{
    console.log("ob-onConfigAcquire");
     
} 
e3ds_controller.callbacks.onSessionExpired=function ()
{
   self.location = "assets/pages/session-expired.htm";
     
} 

e3ds_controller.callbacks.onResponseFromUnreal=function (descriptor)
{
    console.log("ob-onResponseFromUnreal");
    console.log("UnrealResponse: "+descriptor);
  
}


e3ds_controller.callbacks.onReceivingAppAcquiringProgress=function (percent)
{
    
    console.log("onReceivingAppAcquiringProgress: "+percent);
	
	
  
}


e3ds_controller.callbacks.onReceivingAppPreparationProgress=function (percent)
{
    
    console.log("onReceivingAppPreparationProgress: "+percent);
	
	
  
}

e3ds_controller.callbacks.onReceivingAppStartingProgress=function (percent)
{
    
    console.log("onReceivingAppStartingProgress: "+percent);
	
	
  
}

e3ds_controller.callbacks.onHtmlBind=function ()
{
    console.log("ob-onHtmlBind");
   

}