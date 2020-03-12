function getCar(){

	let svgElement = document.getElementById("car");

	if(svgElement){

		let svgCar = svgElement.children[0].children;

		return svgCar;

	}

}


/* car path 2 ----------------------------------------------------   */
function startCar2(){

	
	gsap.set('.carHolder',{ css:{opacity:1}, onComplete:continueCar2 });
	gsap.set('#carsvg',{ transformOrigin: "0% 0%", rotation:70, scale:0.08, x:419, y:211 });

	let tl = new TimelineMax({ease:Linear.none });
	tl.to('#carsvg', 0.4, { rotation:70, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:80, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:90, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:100, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:110, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:120, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:130, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:140, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:150, y:'+=5', x:'-=0'},'-=0.2')
	tl.to('#carsvg', 0.4, { rotation:165, y:'+=5', x:'-=0'},'-=0.2')

	// tl.timeScale(1.1); // speed animation up
	
	

}

function continueCar2(){

	  carAnimation = gsap.to(carsvg, {

              duration: 25, 
              repeat: 0,
              repeatDelay: 0,
              delay:2,
              yoyo: false,
              ease: "Linear.easeInOut",
              motionPath:{
                path: "#pathCar1",
                start: 0,
                end:1,
              },
              onUpdate: checkCar2,
              onUpdateParams:[carsvg]
            });

	// carAnimation.seek(12) // start at 14 seconds
}

function checkCar2(){

	let posX;
	const transformStyle = document.getElementById('carsvg').style.transform;
	const posArray = String(transformStyle).split(',');


	if(posArray.length>3){
		
		const split1 = posArray[0].split('translate3d(');
		const split2 = split1[1].split('px');
		let posX = split2[0];

		switch(true){

			case posX > 546 && posX <= 550:
				
				gsap.to('#carsvg', 0.5, { rotation:180});

			break;

			case posX > 568 && posX <= 570 :

				gsap.to('#carsvg', 1, { rotation:190});

			break

			case posX > 617 && posX <= 619 :

				gsap.to('#carsvg', 1.4, { rotation:260});

			break;

			case posX > 622 && posX < 624:

				gsap.to('#carsvg', 0.3, { rotation:250});
				
			break;

			case posX > 628 && posX < 632:

				gsap.to('#carsvg', 0.5, { rotation:220});

			break


			case posX > 745 && posX < 755:

				gsap.to('#carsvg', 3, { rotation:120});

			break


			case posX > 875 && posX < 877:
				
				gsap.killTweensOf('#carsvg');

				// gsap.set('.carHolder',{ css:{opacity:1}});
				// gsap.set('#carsvg',{ transformOrigin: "0% 0%", rotation:120, scale:0.08, x:875, y:239 });
				
				let tl = new TimelineMax({ease:Linear.none, delay:0 });
				tl.to('#carsvg', 0.4, { rotation:140, y:'+=2', x:'+=10'},'-=0')
				tl.to('#carsvg', 0.4, { rotation:160, y:'+=2', x:'+=10'},'-=0.2')
				tl.to('#carsvg', 0.4, { rotation:180, y:'+=2', x:'+=10'},'-=0.2')
				tl.to('#carsvg', 0.4, { rotation:200, y:'+=2', x:'+=10'},'-=0.2')
				tl.to('#carsvg', 0.4, { rotation:220, y:'+=2', x:'+=10'},'-=0.2')
				tl.timeScale(0.5); // speed animation up

			break


		}
	}
	
}

/* car path 1 ----------------------------------------------------   */

function moveCar(){
	
	// register
	gsap.registerPlugin(MotionPathPlugin);

    // display car
    gsap.set('.carHolder',{ css:{opacity:1}, delay:5 });

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

	// carAnimation.seek(20) // start at 14 seconds

}

 
function checkCar(e){

	const transformStyle = document.getElementById('carsvg').style.transform;
	const posArray = String(transformStyle).split(',');
	const yArray = posArray[1].split('px');
	const yPos = yArray[0];
	// console.log(yPos)
	switch(true){

		case yPos < 800 && yPos >= 690: 

			gsap.to('#carsvg', 2, { rotation:20})

		break;

		case yPos < 690 && yPos >= 680: // bend 1

			gsap.to('#carsvg', 2, { rotation:95})

			carAnimation.timeScale(1); // slow animation down

		break;

		case yPos < 680 && yPos >= 540: // road 1 - westbourne

			carAnimation.timeScale(1); // speed animation up

		break;

		case yPos < 518 && yPos >= 510: // bend 2

			gsap.to('#carsvg', 1.3, { rotation:5})

		break;

		case yPos < 465 && yPos >= 460: // bend 3 - dimple

			gsap.to('#carsvg', 0.9, { rotation:95})


			carAnimation.timeScale(1.2); // speed animation up
		break;

		case yPos < 460 && yPos >= 450: // road 3 - dimple

			carAnimation.timeScale(1); // speed animation up

		break;

		case yPos < 355 && yPos >= 350: // road 3 - dimple

			gsap.to('#carsvg', 0.5, { rotation:72})

		break;

		case yPos < 250 && yPos >= 249: // into drive
			
				gsap.killTweensOf('#carsvg');

				let tl = new TimelineMax({ease:Linear.none, onComplete:startCar2 });
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

		break;


	}
}
