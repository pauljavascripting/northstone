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
	gsap.set('#carsvg',{ transformOrigin: "0% 0%", rotation:20, scale:0.1 });

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

	carAnimation.seek(10)

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
	// console.log(yPos)
	switch(true){

		case yPos < 800 && yPos >= 690: // bend 1

		// gsap.killTweensOf('#carsvg');

			gsap.to('#carsvg', 2, { rotation:30})

			// carAnimation.timeScale(0.8); // slow animation down

		break;

		case yPos < 690 && yPos >= 680: // bend 1

			gsap.to('#carsvg', 2, { rotation:95})

			carAnimation.timeScale(0.8); // slow animation down

		break;

		case yPos < 680 && yPos >= 540: // road 1 - westbourne

			carAnimation.timeScale(1); // speed animation up

		break


		case yPos < 520 && yPos >= 510: // bend 2

			gsap.to('#carsvg', 1.3, { rotation:5})


		break;

		case yPos < 465 && yPos >= 460: // bend 3 - dimple

			gsap.to('#carsvg', 0.9, { rotation:95})


			carAnimation.timeScale(1.2); // speed animation up
		break;

		case yPos < 460 && yPos >= 450: // road 3 - dimple

			carAnimation.timeScale(1); // speed animation up

		break

		case yPos < 360 && yPos >= 350: // road 3 - dimple

			gsap.to('#carsvg', 0.5, { rotation:72})

		break

		case yPos < 200 && yPos >= 150: // into drive

		// gsap.killTweensOf('#carsvg');

				let tl = new TimelineMax({ease:Linear.none});
				tl.to('#carsvg', 1, {y:'-=35', x:'-=10'})
				tl.to('#carsvg', 0.5, {rotation:-15, x:'-=20', y:'+=15', transformOrigin: "0% 0%", delay:0.2})
				tl.to('#carsvg', 0.5, {x:'-=30', y:'+=5'})
				tl.to('#carsvg', 0.5, {rotation:73,x:'+=10',y:'-=15'})
				tl.to('#carsvg', 1, {y:'-=20', x:'-=5'})

		break



		

	}
}
