const e3ds_control_toggle_left = document.querySelector('.e3ds_control_toggle_left')
const e3ds_control_toggle_icon_left = document.querySelector('.e3ds_control_toggle_icon_left')
const e3ds_bottom_panel_controls_left = document.querySelector('.e3ds_bottom_panel_controls_left')
let e3ds_controls_left_bottom_open_state = true;


function openState(panelPosition = "right") 
{
  if (panelPosition === "left") 
  {
	
    if(e3ds_bottom_panel_controls_left)
		e3ds_bottom_panel_controls_left.style.left = '48px';
    if(e3ds_control_toggle_icon_left)
		e3ds_control_toggle_icon_left.style.transform = 'rotate(0deg)'

    e3ds_controls_left_bottom_open_state = true
    return;
  }
}

function closeState(controls_width, panelPosition = "right") {
  console.log("Closing ", panelPosition, controls_width);
  if (panelPosition === "left") {
    // console.log("panel closing", panelPosition)
	if(e3ds_bottom_panel_controls_left)
    e3ds_bottom_panel_controls_left.style.left = `-${controls_width}px`
    e3ds_controls_left_bottom_open_state = false;
    return;
  }
}

function toggleState(panelPosition = "right") {


  let handlePosition = "right";
  console.log("Toggling", panelPosition);
  let shouldOpen = true;
  if (panelPosition === "left") {
    shouldOpen = e3ds_controls_left_bottom_open_state;
  }
  if (shouldOpen) {
    closeState(controls_width, panelPosition);
  } else {
    openState(panelPosition)
  }
}


// hidemenuAtStart()
let controls_width = 0






openState("left");

if(e3ds_control_toggle_left)
{
	e3ds_control_toggle_left.addEventListener('click', () => 
	{
	  let currentStatus = document.getElementById("voipControlPanel").style.display;
	  if (currentStatus === "block" || currentStatus === "flex") {
	   if(voipControlPanel)voipControlPanel.style.display = "none";
     //close voip speaker list when slider closed
     let roster = document.getElementById('roster');
     if(roster){
        roster.style.display = "none";
     }
     let voipSpeakerList = document.getElementById('btn-Toggle-voipSpeaker-list');
     if(voipSpeakerList){
        voipSpeakerList.src = "https://d35e1ftufisrhj.cloudfront.net/v1/assets/images/voipListNO.png";
     }
		closeState(controls_width, "left");
	  } else {
	   if(voipControlPanel)voipControlPanel.style.display = "flex";
		openState("left");
	  }
	}

	)
}




var voipControlPanel=document.getElementById("voipControlPanel")
if(voipControlPanel)
	voipControlPanel.style.display = "flex";

// const passSubmit = document.getElementById('pass__submit')
// passSubmit.addEventListener("click", (e)=>{
//   e.preventDefault()
//   console.log("clicked")
// })



// const settingBtn = document.getElementById('e3ds_bottom_panelObj')
// settingBtn.addEventListener('click', ()=>{
//   console.log('hello')
// })





// const settingBtn = document.getElementById('e3ds_bottom_panelObj');
//         let isDragging = false;
//         let initialX;
//         let initialY;
//         let offsetX = 0;
//         let offsetY = 0;

//         settingBtn.addEventListener('mousedown', startDrag);
//         settingBtn.addEventListener('mouseup', stopDrag);
//         settingBtn.addEventListener('mouseleave', stopDrag);
//         settingBtn.addEventListener('mousemove', drag);

//         function startDrag(e) {
//             isDragging = true;
//             initialX = e.clientX - offsetX;
//             initialY = e.clientY - offsetY;
//             settingBtn.style.cursor = 'grabbing';
//             settingBtn.style.bottom = 'unset !important'
//             console.log("drag start!")
//         }

//         function stopDrag() {
//             isDragging = false;
//             settingBtn.style.cursor = 'grab';
//         }

//         function drag(e) {
//             if (!isDragging) return;
//             e.preventDefault();
//             offsetX = e.clientX - initialX;
//             offsetY = e.clientY - initialY;
//             settingBtn.style.top = offsetY + 'px';
//             settingBtn.style.left = offsetX + 'px';
//             settingBtn.style.bottom = '0px !important'
//         }

const AudioBtn = document.querySelector('#AudioBtn')
const infoBtn = document.querySelector('#infoBtn')
const panelInput__div = document.querySelector('.panelInput__div')
const AudioBtnImg = document.querySelector('#AudioBtnImg')
const Volumebar = document.getElementById('Volumebar')

const qlControll = document.getElementById('qlControll')
const qlInput__div = document.querySelector('.qlInput__div ')
const galleryImg = document.querySelector('#galleryImg')
const resoulbar = document.getElementById('resoulbar')
// const screenRecordBtn = document.getElementById('screenRecord');

// if(screenRecordBtn){
//   screenRecordBtn.addEventListener('click', function(){
//     window.open('/screenRecorder',"_blank");
//   })
// }

if(infoBtn){
  infoBtn.addEventListener('click', function(){

    const statsInfoExtra = document.getElementById('statsInfoExtra');
    if(statsInfoExtra.style.display === "none" || statsInfoExtra.style.display === ""){
      statsInfoExtra.style.display = "block";
    }
    else{
      statsInfoExtra.style.display = "none";
    }
  })
}

if (qlControll) {
  qlControll.addEventListener('click', () => {
    qlInput__div.classList.toggle('qlVisible')
    // if (galleryImg.src.endsWith('galleryI.svg')) {
    //   galleryImg.src = './assets/images/gallery2.svg'
    // } else if (galleryImg.src.endsWith('gallery2.svg')) {
    //   galleryImg.src = './assets/images/galleryI.svg'
    // }
  });
}

if (AudioBtn) 
{
  AudioBtn.addEventListener('click', () => 
			  {
				panelInput__div.classList.toggle('show__panelDiv')

				if(AudioBtnImg.src.endsWith=('mute.svg') && panelInput__div.classList.contains('show__panelDiv'))
				{
										AudioBtnImg.src= 'https://d35e1ftufisrhj.cloudfront.net/v1/assets/images/unmute.svg'
				} 
				
			  }
  )

}

const resBtn = document.getElementById("resBtn");
const qualityBtn = document.getElementById("qualityBtn");
const qualitySelect = document.getElementById("qualitySelect");
const resSelect = document.getElementById("resSelect");
const resIcon = document.getElementById("resIcon");
const qualityIcon = document.getElementById("qualityIcon");

if(resBtn){
  resBtn.onclick = function(){
    resSelect.classList.toggle('hiddenSelectionDiv')
  }
}

if(qualityBtn){
  qualityBtn.onclick = function(){
    qualitySelect.classList.toggle('hiddenSelectionDiv')
  }
}

function closeVolAndResBarAndQualityAndRes(e){
  // console.log('window clicked now here')
  if(e.target !== AudioBtn && e.target !== AudioBtnImg && e.target !== panelInput__div && e.target !== Volumebar){
    if (panelInput__div)
      panelInput__div.classList.remove('show__panelDiv')
    // console.log('happening different things')
    if (AudioBtnImg) {
      if (AudioBtnImg.src.endsWith = ('mute.svg')) {
        AudioBtnImg.src = 'https://d35e1ftufisrhj.cloudfront.net/v1/assets/images/unmute.svg'
      }
    }
  }

  if(e.target !== qlControll && e.target !== galleryImg && e.target !== qlInput__div && e.target !== resoulbar && e.target !== resolution__check && e.target !== resolution__level ){
    //console.log('happening different things')
    if (qlInput__div)
      qlInput__div.classList.remove('qlVisible')
    // if (galleryImg) {
    //   if (galleryImg.src.endsWith('gallery2.svg')) {
    //     galleryImg.src = 'https://d35e1ftufisrhj.cloudfront.net/v1/assets/images/galleryI.svg'
    //   }
    // }
  }

  if(e.target !== resSelect && e.target !== resBtn && e.target !== resIcon){
    resSelect.classList.add('hiddenSelectionDiv')
  }
  if(e.target !== qualitySelect && e.target !== qualityBtn && e.target !== qualityIcon && e.target !== qlControll && e.target !== qlInput__div && e.target !== resoulbar && e.target !== resolution__check && e.target !== resolution__level){
    qualitySelect.classList.add('hiddenSelectionDiv')
  }
  const statsInfoExtra = document.getElementById("statsInfoExtra");
  const infoBtn = document.getElementById("infoBtn");
  const infoIcon = document.getElementById("infoIcon");
  
  if(e.target.parentElement != statsInfoExtra && e.target != statsInfoExtra && e.target != infoBtn && e.target != infoIcon ){
    if(statsInfoExtra && statsInfoExtra.style.display == "block"){
      statsInfoExtra.style.display = "none";
    }
  }
}
  
window.addEventListener('click', closeVolAndResBarAndQualityAndRes);
window.addEventListener('touchstart', closeVolAndResBarAndQualityAndRes);

// AudioBtnImg.src = '/assets/images/mute.svg'

// AudioBtn.addEventListener('click', ()=>{
  // if(!panelInput__div.classList.contains('show__panelDiv')){
  //   panelInput__div.classList.add('zIndex')
  // } else{panelInput__div.classList.remove('zIndex')}


  // if(qlInput__div .classList.contains('zIndex')){
  //   qlInput__div .classList.remove('zIndex')
  //   panelInput__div.classList.add('zIndex')
  // }

  // AudioBtnImg.src = "/assets/images/unmute.svg"

  // if (AudioBtnImg.src.endsWith('unmute.svg')) {
  //   AudioBtnImg.src = "/assets/images/mute.svg"
  //   panelInput__div.classList.add('show__panelDiv')
  // }

  // else if (AudioBtnImg.src.endsWith('mute.svg')) {
  //   panelInput__div.classList.remove('show__panelDiv')
  //   AudioBtnImg.src = "/assets/images/unmute.svg"
  // }
// })

// resulRangeValue value count
/* const range = document.getElementById('resoulbar');
const resulRangeValue = document.getElementById('resulRangeValue');

let timer;
if(range)
range.addEventListener('input', () => {
  // resulRangeValue.textContent = `Resolution: ${range.value}%`;
  console.log(`Resolution: ${range.value}%`)

  if(range.value <= 33){
    // console.log('Less10')
    resulRangeValue.textContent = 'Resolution: LOW'
  } else if(range.value <= 66){
    resulRangeValue.textContent = 'Resolution: MID'
  } else{
    resulRangeValue.textContent = 'Resolution: HIGH'
  }
  resulRangeValue.style.visibility = 'visible';
clearTimeout(timer);
timer = setTimeout(() => {
  resulRangeValue.style.visibility = 'hidden';
}, 1000); // Adjust the time in milliseconds as needed
}); */
// VolumeRangeValue value count


const resolution__check = document.getElementById('resolution__check')
const resolution__level = document.getElementById('resolution__level')
if(resolution__check)
resolution__check.addEventListener('change', (e)=>{
  if(e.target.checked){
    console.log('Checkedhere')
    range.style.display = 'none'
  } else{
    range.style.display = 'block'
  }
});


dragElement(document.getElementById("settings"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	var start,duration = 0;
  document.getElementById('settings-icon').onmousedown = dragMouseDown;
  document.getElementById('settings-icon').ontouchstart = dragTouchStart;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
		start = new Date();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function dragTouchStart(e) {
    e = e || window.event;
    e.preventDefault();
    start = new Date();
    // get the touch position at startup:
    var touch = e.targetTouches[0];
    pos3 = touch.clientX;
    pos4 = touch.clientY;
    document.addEventListener('touchend', closeDragElement);
    // call a function whenever the touch moves:
    document.addEventListener('touchmove', elementDrag);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    duration = new Date() - start;
    if(window.enableDraggableSettingsBtn  === "0")
      return;
    // calculate the new cursor position:
    if (e.type === 'mousemove') {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    } else if (e.type === 'touchmove') {
      var touch = e.targetTouches[0];
      pos1 = pos3 - touch.clientX;
      pos2 = pos4 - touch.clientY;
      pos3 = touch.clientX;
      pos4 = touch.clientY;
    }
    // set the element's new position:
    elmnt.style.bottom = (window.innerHeight - elmnt.getBoundingClientRect().bottom + pos2) + "px";
    elmnt.style.right = (window.innerWidth - elmnt.getBoundingClientRect().right + pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when the mouse button is released:
    if (!duration) {
      const settingItems = document.getElementById('settings-items');
      if (settingItems.style.width === "100%") {
        settingItems.style.width = "0px";
        document.getElementById('settings-icon').style.transform = 'rotate(0deg)';
        document.getElementById('settings-icon').style.transition = 'transform 0.5s';
      } else {
        settingItems.style.width = "100%"
        document.getElementById('settings-icon').style.transform = 'rotate(-90deg)';
        document.getElementById('settings-icon').style.transition = 'transform 0.5s';
      }
    }
    duration = 0;
    document.onmouseup = null;
    document.onmousemove = null;
    // Remove touch event listeners
    document.removeEventListener('touchend', closeDragElement);
    document.removeEventListener('touchmove', elementDrag);
  }
}