const e3ds_control_toggle = document.querySelector('.e3ds_control_toggle')
const e3ds_control_toggle_left = document.querySelector('.e3ds_control_toggle_left')
const e3ds_control_toggle_icon = document.querySelector('.e3ds_control_toggle_icon')
const e3ds_control_toggle_icon_left = document.querySelector('.e3ds_control_toggle_icon_left')
const e3ds_bottom_panel_controls = document.querySelector('.e3ds_bottom_panel_controls')
const e3ds_bottom_panel_controls_left = document.querySelector('.e3ds_bottom_panel_controls_left')
let e3ds_controls_open_state = true
let e3ds_controls_left_bottom_open_state = true;

function hidemenuAtStart() {
  if(e3ds_bottom_panel_controls)
	e3ds_bottom_panel_controls.style.right = `-321px`
  e3ds_controls_open_state = false
}

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
  
  if(e3ds_bottom_panel_controls)
  {
    e3ds_bottom_panel_controls.style.right = '0px'
    
    // const mediaQuery = window.matchMedia('(max-width: 575px)');
    // if (mediaQuery.matches) {
    //   e3ds_bottom_panel_controls.style.right = '40px';
    // }
  }
  
  if(e3ds_control_toggle_icon)
	  e3ds_control_toggle_icon.style.transform = 'rotate(0deg)'
  e3ds_controls_open_state = true
}

function closeState(controls_width, panelPosition = "right") {
  console.log("Closing ", panelPosition, controls_width);
   controls_width = e3ds_bottom_panel_controls.offsetWidth;
  if (panelPosition === "left") {
    // console.log("panel closing", panelPosition)
	if(e3ds_bottom_panel_controls_left)
    e3ds_bottom_panel_controls_left.style.left = `-${controls_width}px`
    e3ds_controls_left_bottom_open_state = false;
    return;
  }

  if(e3ds_bottom_panel_controls)e3ds_bottom_panel_controls.style.right = `-${321}px`
  e3ds_controls_open_state = false
}

function toggleState(panelPosition = "right") {

  if(newDragging){
   // return;
  }

  let handlePosition = "right";
  console.log("Toggling", panelPosition);
  let shouldOpen = true;
  if (panelPosition === "left") {
    shouldOpen = e3ds_controls_left_bottom_open_state;
  } else {
    shouldOpen = e3ds_controls_open_state;
  }
  if (shouldOpen) {
    closeState(controls_width, panelPosition);
  } else {
    openState(panelPosition)
  }
}


hidemenuAtStart()
let controls_width = 0
if(e3ds_bottom_panel_controls)
	controls_width=e3ds_bottom_panel_controls.offsetWidth;


//toggleState()
//console.log(e3ds_control_toggle_left)
if(e3ds_control_toggle)
	e3ds_control_toggle.addEventListener('click', () =>{
	  toggleState()
	  const e3ds_control_toggle_img = document.querySelector(".e3ds_control_toggle_img")

	  if(e3ds_control_toggle_img){
		e3ds_control_toggle_img.classList.toggle("rotate__inn")
	  }

	}
	  
	)


openState("left");

if(e3ds_control_toggle_left)
{
	e3ds_control_toggle_left.addEventListener('click', () => 
	{
	  let currentStatus = document.getElementById("voipControlPanel").style.display;
	  if (currentStatus === "block" || currentStatus === "flex") {
	   if(voipControlPanel)voipControlPanel.style.display = "none";
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

const AudioBtn = document.querySelector('.AudioBtn')
const panelInput__div = document.querySelector('.panelInput__div')
const AudioBtnImg = document.querySelector('.AudioBtnImg')
const Volumebar = document.getElementById('Volumebar')

const qlControll = document.getElementById('qlControll')
const qlInput__div = document.querySelector('.qlInput__div ')
const galleryImg = document.querySelector('.galleryImg')
const resoulbar = document.getElementById('resoulbar')

if (qlControll) {
  qlControll.addEventListener('click', () => {
    qlInput__div.classList.toggle('qlVisible')
    if (galleryImg.src.endsWith('galleryI.svg')) {
      galleryImg.src = './assets/images/gallery2.svg'
    } else if (galleryImg.src.endsWith('gallery2.svg')) {
      galleryImg.src = './assets/images/galleryI.svg'
    }
  });
}

if (AudioBtn) 
{
  AudioBtn.addEventListener('click', () => 
			  {
				panelInput__div.classList.toggle('show__panelDiv')

				if(AudioBtnImg.src.endsWith=('mute.svg') && panelInput__div.classList.contains('show__panelDiv'))
				{
										AudioBtnImg.src= '/assets/images/unmute.svg'
				} 
				
			  }
  )

}
  
window.addEventListener('click', (e)=>{
  // console.log('window clicked now here')
  if(e.target !== AudioBtn && e.target !== AudioBtnImg && e.target !== panelInput__div && e.target !== Volumebar){
    if (panelInput__div)
      panelInput__div.classList.remove('show__panelDiv')
    // console.log('happening different things')
    if (AudioBtnImg) {
      if (AudioBtnImg.src.endsWith = ('mute.svg')) {
        AudioBtnImg.src = './assets/images/unmute.svg'
      }
    }
  }

  if(e.target !== qlControll && e.target !== galleryImg && e.target !== qlInput__div && e.target !== resoulbar && e.target !== resolution__check && e.target !== resolution__level ){
    //console.log('happening different things')
    if (qlInput__div)
      qlInput__div.classList.remove('qlVisible')
    if (galleryImg) {
      if (galleryImg.src.endsWith('gallery2.svg')) {
        galleryImg.src = './assets/images/galleryI.svg'
      }
    }
  }
  
})

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


e3ds_control_toggle.addEventListener('click', ()=>{
  if(e3ds_bottom_panel_controls.style.right === '-321px'){
    panelInput__div.style.opacity = '0'
    panelInput__div.style.visibility = 'hidden'

    qlInput__div.style.opacity = '0'
    qlInput__div.style.visibility = 'hidden'
  }

  else{
      panelInput__div.style.opacity = '1'
      panelInput__div.style.visibility = 'visible'

      qlInput__div.style.opacity = '1'
      qlInput__div.style.visibility = 'visible'
  }

  return;
})

// e3ds_control_toggle.addEventListener('click', () => {
//   const controls_width = e3ds_bottom_panel_controls.offsetWidth
//   if (e3ds_controls_open_state) {
//     e3ds_bottom_panel_controls.style.right = `-${controls_width}px`
//     e3ds_control_toggle_icon.style.transform = 'rotate(180deg)'
//     e3ds_controls_open_state = false
//   } else {
//     e3ds_bottom_panel_controls.style.right = '40px'
//     e3ds_control_toggle_icon.style.transform = 'rotate(0deg)'
//     e3ds_controls_open_state = true
//   }
// })

dragElement(document.getElementById("e3ds_draggable"));
var newDragging = false
  function dragMouseDown(e) 
  {
    e = e || window.e;
    newDragging = true
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
  document.onclick=null
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.e;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() 
  {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    //document.onclick=toggleState()
    e3ds_control_toggle.addEventListener('click', () =>
		toggleState()
		)
  }


function dragElement(elmnt) 
{
	
	return
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "e3ds_drag_control")) 
  {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "e3ds_drag_control").onmousedown = dragMouseDown;
    // console.log("dragging!")
    newDragging = true
  } 
  else 
  {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    // console.log("dragging!")
  }



}