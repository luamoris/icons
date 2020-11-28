
const burger 			= document.querySelector(".burger");
const burgerBackground 	= burger.querySelector(".burger__background");
const wrapper 			= document.querySelector(".wrapper");

console.dir(burger);

burger.onclick = () => {
	if(burger.classList.contains('active')) {
		burger.classList.remove('active'); 
		burger.classList.add('none'); 
		wrapper.style.background = '#393939';
	}
	else { 
		burger.classList.remove('none'); 
		burger.classList.add('active'); 
		wrapper.style.background = 'white';
	}
};

burgerBackground.onclick = event => {
	const pos 		= { top: burgerBackground.offsetTop.toFixed(0), left: burgerBackground.offsetLeft.toFixed(0), };
	const system 	= { x: event.pageY - pos.top, y: event.pageX - pos.left, };


	const pulse 	= document.createElement('div'),
		  maxValue 	= Math.max(burgerBackground.clientWidth, burgerBackground.clientHeight),
		  rect 		= burgerBackground.getBoundingClientRect(),
		  style 	= pulse.style,
		  px 		= 'px';



	style.width 	= style.height = maxValue + px;
	style.left 		= event.clientX - rect.left - (maxValue / 2) + px;
	style.top 		= event.clientY - rect.top - (maxValue / 2) + px;

	pulse.classList.add('pulse');
	burgerBackground.appendChild(pulse);

	setTimeout(() => { pulse.remove(); }, 500);
}