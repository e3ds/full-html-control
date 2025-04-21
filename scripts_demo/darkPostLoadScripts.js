
e3ds_controller.callbacks.onDataChannelOpen = function () {
    console.log("ob-onDataChannelOpen");

}
e3ds_controller.callbacks.onDataChannelClose = function () {
    console.log("ob-onDataChannelClose");

}

e3ds_controller.callbacks.onConfigAcquire = function () {
    console.log("ob-onConfigAcquire");

}
e3ds_controller.callbacks.onSessionExpired = function () {
    self.location = "assets/pages/session-expired.htm";

}

e3ds_controller.callbacks.onResponseFromUnreal = function (descriptor) {
    console.log("ob-onResponseFromUnreal");
    console.log("UnrealResponse: " + descriptor);

    document.getElementById('LatencyStats').innerHTML = descriptor;

}


e3ds_controller.callbacks.onReceivingAppAcquiringProgress = function (percent) {
    console.log("onReceivingAppAcquiringProgress: " + percent);
    var fsfsg = document.getElementById("queueNumberText");
    if (fsfsg) 
	  fsfsg.style.display = "none";

    var videoPlayOverlay = document.getElementById("videoPlayOverlay");
    if (videoPlayOverlay) 
	  videoPlayOverlay.style.display = "none";

    var acquiringProgressSpinner = document.getElementById('progress3');
    
    var acquiringProgressWrap = document.getElementById('acquiringProgressWrap');
    if(acquiringProgressWrap!= null && !window.isAppPreparationprocessGoingOn){
        acquiringProgressWrap.style.display = "block";
    }

    if(acquiringProgressSpinner!=null && percent>0){
        acquiringProgressSpinner.style.setProperty('--progress', `${percent*100}%`);
   }
   
   

}


e3ds_controller.callbacks.onReceivingAppPreparationProgress = function (percent) {

    console.log("onReceivingAppPreparationProgress: " + percent);

    var fsfsg = document.getElementById("queueNumberText");
    if (fsfsg) 
	  fsfsg.style.display = "none";

    var videoPlayOverlay = document.getElementById("videoPlayOverlay");
    if (videoPlayOverlay) 
	  videoPlayOverlay.style.display = "none";
    
    var preparingProgressSpinner = document.getElementById('progress2');
    var acquiringProgressWrap = document.getElementById('acquiringProgressWrap');

	var preparing__progress__wrap = document.getElementById('preparing__progress__wrap');

    
    if(acquiringProgressWrap!= null && window.isAppPreparationprocessGoingOn){
        acquiringProgressWrap.style.display = "none";
    }

	if(preparing__progress__wrap!=null && window.isAppPreparationprocessGoingOn){
		preparing__progress__wrap.style.display = "block";
	}

    if(preparingProgressSpinner!= null && percent>0){
        preparingProgressSpinner.style.setProperty('--progress', `${percent}%`);
    }
    if(percent >= 100){
        preparing__progress__wrap.style.display = "none";
        var launching__progress__wrap = document.getElementById("launching__progress__wrap");
        launching__progress__wrap.style.display = "block";
    }
}

e3ds_controller.callbacks.onReceivingAppStartingProgress = function (percent) {

    console.log("onReceivingAppStartingProgress: " + percent);

    var fsfsg = document.getElementById("queueNumberText");
    if (fsfsg) 
	  fsfsg.style.display = "none";

    var videoPlayOverlay = document.getElementById("videoPlayOverlay");
    if (videoPlayOverlay) 
	  videoPlayOverlay.style.display = "none";

    var launchingProgressSpinner = document.getElementById('progress1');
    var preparing__progress__wrap = document.getElementById("preparing__progress__wrap");
	var launching__progress__wrap = document.getElementById("launching__progress__wrap");
	
var acquiringProgressWrap = document.getElementById('acquiringProgressWrap');

if(acquiringProgressWrap.style.display !== "none" || preparing__progress__wrap.style.display !== "none")
    return;

    if(launchingProgressSpinner!= null && percent>0){
        launchingProgressSpinner.style.setProperty('--progress', `${percent}%`);
    }

    if (acquiringProgressWrap && !window.isAppPreparationprocessGoingOn){
        acquiringProgressWrap.style.display = "none";
        preparing__progress__wrap.style.display = "none";
		launching__progress__wrap.style.display = "block";
    }


}

e3ds_controller.callbacks.onHtmlBind = function () {
    console.log("ob-onHtmlBind");


}



window.onload = async function(){
    

    const streamingApiKey= "your streaming api key";//collect your streaming api key from here https://account.eagle3dstreaming.com/streaming-api-keys-management
    const domain= "connector.eagle3dstreaming.com";
    const tokenExpiryDuration= 60000;
    const clientUserName= "your username";
    const app= "your appname";
    const config= "your config";


    fetch(
        "https://token.eaglepixelstreaming.com/api/v1/token/create",
        {
            method: "POST",
            body: JSON.stringify({
            "object": {
                "core": {
                "domain": domain,
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
            "Authorization": "Auth " + streamingApiKey,
            "Content-Type": "application/json"
            }
        }
        ).then(res=> res.json())
        .then(data=> e3ds_controller.main(data.token, clientUserName))
        .catch(error=> console.error(error));
}