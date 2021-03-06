// Var
const burger 		= document.querySelector(".burger");
const semiCircle 	= document.querySelector(".burger__semi-circle");
const wrapper 		= document.querySelector(".wrapper");
const background 	= burger.querySelector(".burger__background");


// Event

burger.onclick = () => {
	burger.classList.toggle('active');
	if (semiCircle.classList.contains('active')) {
		semiCircle.classList.remove('active');
		semiCircle.classList.add('none');
		wrapper.style.background = '#393939';
	}
	else {
		semiCircle.classList.remove('none');
		semiCircle.classList.add('active');
		wrapper.style.background = 'white';
	}
};

background.onclick = event => {
	const pos 		= { top: background.offsetTop.toFixed(0), left: background.offsetLeft.toFixed(0), };
	const system 	= { x: event.pageY - pos.top, y: event.pageX - pos.left, };

	const pulse 	= document.createElement('div'),
		  maxValue 	= Math.max(background.clientWidth, background.clientHeight),
		  rect 		= background.getBoundingClientRect(),
		  style 	= pulse.style,
		  px 		= 'px';

	style.width 	= style.height = maxValue + px;
	style.left 		= event.clientX - rect.left - (maxValue / 2) + px;
	style.top 		= event.clientY - rect.top - (maxValue / 2) + px;

	pulse.classList.add('pulse');
	background.appendChild(pulse);

	setTimeout(() => { pulse.remove(); }, 500);
}
