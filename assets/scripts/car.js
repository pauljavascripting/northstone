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
    gsap.set('.carHolder',{ css:{opacity:1}, delay:6 });

    // amend svg
	gsap.set('#carsvg',{ transformOrigin: "0% 0%", rotation:20, scale:0.08 });

	// animate
            carAnimation = gsap.to(carsvg, {

              duration: 21, 
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

	// carAnimation.seek(14) // start at 14 seconds

}

 
function checkCar(e){

	const transformStyle = document.getElementById('carsvg').style.transform;
	const posArray = String(transformStyle).split(',');
	const yArray = posArray[1].split('px');
	const yPos = yArray[0];
	// console.log(yPos)
	switch(true){

		case yPos < 800 && yPos >= 690: 

			gsap.to('#carsvg', 2, { rotation:30})

		break;

		case yPos < 690 && yPos >= 680: // bend 1

			gsap.to('#carsvg', 2, { rotation:95})

			carAnimation.timeScale(1); // slow animation down

		break;

		case yPos < 680 && yPos >= 540: // road 1 - westbourne

			carAnimation.timeScale(1); // speed animation up

		break


		case yPos < 518 && yPos >= 510: // bend 2

			gsap.to('#carsvg', 1.3, { rotation:5})

			// carAnimation.timeScale(0.8); // slow animation down


		break;

		case yPos < 465 && yPos >= 460: // bend 3 - dimple

			gsap.to('#carsvg', 0.9, { rotation:95})


			carAnimation.timeScale(1.2); // speed animation up
		break;

		case yPos < 460 && yPos >= 450: // road 3 - dimple

			carAnimation.timeScale(1); // speed animation up

		break

		case yPos < 355 && yPos >= 350: // road 3 - dimple

			gsap.to('#carsvg', 0.5, { rotation:72})

		break

		case yPos < 250 && yPos >= 249: // into drive
			
				gsap.killTweensOf('#carsvg');

				let tl = new TimelineMax({ease:Linear.none});
				tl.to('#carsvg', 0.4, { rotation:55, y:'-=10', x:'-=10'})
				tl.to('#carsvg', 0.4, { rotation:35, y:'-=5', x:'-=10'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:15, y:'-=4', x:'-=10'}, '-=0.25')
				tl.to('#carsvg', 0.4, { rotation:-10, y:'+=2', x:'-=10'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:-10, y:'+=0', x:'-=10'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:15, y:'-=3', x:'-=8'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:40, y:'-=10', x:'-=2'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:60, y:'-=10', x:'-=2'}, '-=0.2')
				tl.to('#carsvg', 0.4, { rotation:70, y:'-=8', x:'+=2'}, '-=0.2')
				
				tl.timeScale(1); // speed animation up

		break


	}
}
