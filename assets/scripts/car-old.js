function getCar(){

	let svgElement = document.getElementById("car");

	if(svgElement){

		let svgCar = svgElement.children[0].children;

		return svgCar;

	}

}

function moveCar(){
	
	// register
	gsap.registerPlugin(MotionPathPlugin);

    // display car
    gsap.set('.carHolder',{ css:{opacity:1}, delay:3 });

    // amend svg
	gsap.set('#carsvg',{ transformOrigin: "0% 0%", rotation:15, scale:0.1 });

	// animate
            carAnimation = gsap.to(carsvg, {

              duration: 19, 
              repeat: 0,
              repeatDelay: 0,
              delay:2,
              yoyo: false,
              ease: "Linear.easeInOut",
              motionPath:{
                path: "#pathCar",
                start: 1,
                end:0,
              },
              onUpdate: checkCar,
              onUpdateParams:[carsvg]
            });

	// carAnimation.seek(8)

}

 
function checkCar(e){

	// doesn't work on ie11
         	//var style = window.getComputedStyle(e);
	// var matrix = new WebKitCSSMatrix(style.webkitTransform);
	// console.log(matrix.m42)

	const transformStyle = document.getElementById('carsvg').style.transform;
	const posArray = String(transformStyle).split(',');
	const yArray = posArray[1].split('px');
	const yPos = yArray[0];

	switch(true){

		case yPos < 915 && yPos > 870: // bend 1

			gsap.to('#carsvg', 1.3, { rotation:95})

			// carAnimation.timeScale(0.8); // slow animation down

		break;

		case yPos <= 870 && yPos > 869: 
			
			// carAnimation.timeScale(1);

		break

		case yPos <= 685 && yPos > 620:  // bend 2 ont spinney way

			gsap.to('#carsvg',1.3,{ rotation:5 })
			
		break;

		case yPos <=  616 && yPos >560: // rotate onto dimple still close

			 gsap.to('#carsvg', 0.9, { rotation:95})
			
		break;

		case yPos <= 560 && yPos >440:

		break;

		case yPos <=  440 && yPos >410: // rotate slightly on dimple  still close

			gsap.to('#carsvg', 0.5, { rotation:72})

		break;


		case yPos <  330 && yPos > 320: // reaches last junction


		break;

		case yPos <=  320: // reaches last junction
			
			gsap.killTweensOf('#carsvg'); // kill path tween

			// option1 
			// let tl = new TimelineMax({ease:Linear.easeNone});
			// tl.to('#carsvg', 0.7, {y:'-=10', x:'-=40', rotation:0 })
			// tl.to('#carsvg', 0.7, {y:'-=5', x:'-=40'}, '-=0.5')
			// tl.to('#carsvg', 0.7, {y:'-=35', x:'-=10', rotation:70}, '-=0.5')

			// option2
			let tl = new TimelineMax({ease:Linear.easeNone});
			tl.to('#carsvg', 0.7, {y:'-=10', x:'-=30', rotation:10 })
			tl.to('#carsvg', 0.7, {y:'-=3', x:'-=30', rotation:-5}, '-=0.5')
			tl.to('#carsvg', 0.7, {y:'-=0', x:'-=30', rotation:0}, '-=0.5')
			tl.to('#carsvg', 0.7, {y:'-=10', x:'-=10', rotation:30}, '-=0.5')
			tl.to('#carsvg', 0.5, {y:'-=10', x:'-=0', rotation:50}, '-=0.5')
			tl.to('#carsvg', 0.5, {y:'-=10', x:'-=0', rotation:60}, '-=0.5')
			tl.to('#carsvg', 0.5, {y:'-=30', x:'-=0', rotation:70}, '-=0.5')

			tl.timeScale() // increase speed
		

		break;

		// case matrix.m42 <  332 && matrix.m42 > 300: // reaches last junction


			// 	manual tween into garage
			// 	let tl = new TimelineMax({ease:Linear.none});
			// 	tl.to('#carsvg', 1, {y:'-=35', x:'-=10'})
			// 	tl.to('#carsvg', 0.5, {rotation:-15, x:'-=20', y:'+=15', transformOrigin: "0% 0%", delay:0.2})
			// 	tl.to('#carsvg', 0.5, {x:'-=30', y:'+=5'})
			// 	tl.to('#carsvg', 0.5, {rotation:73,x:'+=10',y:'-=15'})
			// 	tl.to('#carsvg', 1, {y:'-=20', x:'-=5'})

		// break;

	}
}

// function setPopupPosition(e){

// 	switch(true){

// 		case window.innerHeight > 300  && window.innerHeight < 700:

// 			popupPosY = 150;

// 		break;

// 		case window.innerHeight > 700  && window.innerHeight < 1000:

// 			popupPosY = 400;

// 		break;

// 		case window.innerHeight > 1000  && window.innerHeight < 3000:

// 			popupPosY = 400;

// 		break;

// 		case window.innerHeight > 3000:

// 			popupPosY = 400;

// 		break;



// 	}
// }