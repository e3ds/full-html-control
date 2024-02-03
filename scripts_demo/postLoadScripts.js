
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
	
	document.getElementById('LatencyStats').innerHTML=descriptor;
  
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



window.onload = function () 
				{
					
					e3ds_controller.main(e3ds_session_token,clientUserName)
					
				}