function getHouseType(){

	return houseType_id;
}

function setHouseType(id){

	houseType_id = id;
}

// this function defines all the colours for the houses ------------------------------------------------------
// these house ids must match the house ids in the json files

function getHouseColours(house_type, id){

let colours;

var res = id.split("_");
let house_id = Number(res[1]);

switch(true){

	case house_id == 1: // plot number 1
	
		colours = ['#9a7922', '#d9a831'];

	break;

	case house_id == 2:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id >=3 && house_id < 6:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=6 && house_id < 7:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id == 7:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=7 && house_id < 10:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=10 && house_id < 13:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id >=13 && house_id < 15:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id == 15:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id >=16 && house_id < 18:
	
		colours = ['#dcb18e', '#bf8c6f'];

	break;

	case house_id >=18 && house_id < 20:
	
		colours = ['#f784a', '#a7614'];

	break;

	case house_id >=20 && house_id < 22:
	
		colours = ['#4282a1', '#2c566a'];

	break;

	case house_id >=22 && house_id < 28:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=28 && house_id < 32:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id >=32 && house_id < 35:
	
		colours = ['#dcb18e', '#bf8c6f'];

	break;
	
	case house_id == 35:
	
		colours = ['#7d9874', '#677f60'];

	break;

	case house_id >=35 && house_id < 39:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=39 && house_id < 41:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 41:
	
		colours = ['#c2b4cd', '#887f90'];

	break;

	case house_id >=41 && house_id < 46:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id == 46:
	
		colours = ['#c2b4cd', '#887f90'];

	break;

	case house_id >=47 && house_id < 50:
	
		colours = ['#4282a1', '#2c566a'];

	break;
	
	case house_id >=50 && house_id < 53:
	
		colours = ['#d9a831', '#9a7922'];

	break;
	
	case house_id == 53:
	
		colours = ['#7d9874', '#677f60'];

	break;

	case house_id >=54 && house_id < 58:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 58:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=59 && house_id < 64:
	
		colours = ['#d21e3d', '#941929'];

	break;

	case house_id == 64:
	
		colours = ['#c2b4cd', ' #887f90'];

	break;

	case house_id >=65 && house_id < 66:
	
		colours = ['#b2d3e3', '#7c949f'];

	break;

	case house_id >=66 && house_id < 69:
	
		colours = ['#b2d3e3', '#7c949f'];

	break;

	case house_id >=69 && house_id < 72:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id == 72:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id == 73:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 74:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=75 && house_id < 77:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=77 && house_id < 79:
	
		colours = ['#dcb18e', '#bf8c6f'];

	break;

	case house_id == 79:
	
		colours = ['#7d9874', '#677f60'];

	break;

	case house_id >=80 && house_id < 82:
	
		colours = ['#dcb18e', '#bf8c6f'];

	break;

	case house_id >=82 && house_id < 85:
	
		colours = ['#4282a1', '#2c566a'];

	break;

	case house_id >=85 && house_id < 88:
	
		colours = ['#c2b4cd', '#887f90'];

	break;

	case house_id >=88 && house_id < 91:
	
		colours = ['#b2d3e3', '#7c949f'];

	break;

	case house_id == 91:
	
		colours = ['#728393', '#4e5a65'];

	break;
	
	case house_id >=91 && house_id < 94:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=94 && house_id < 96:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 96:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=96 && house_id < 101:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 101:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=101 && house_id < 105:
	
		colours = ['#b2d3e3', '#7c949f'];

	break;

	case house_id >=105 && house_id < 107:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id >=107 && house_id < 112:
	
		colours = ['#014a53', '#003036'];

	break;

	case house_id >=112 && house_id < 114:
	
		colours = ['#c2b4cd', '#887f90'];

	break;

	case house_id >=114 && house_id < 116:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id >=116 && house_id < 118:
	
		colours = ['#c2b4cd', '#887f90'];

	break;

	case house_id >=118 && house_id < 120:
	
		colours = ['#4282a1', '#2c566a'];

	break;

	case house_id >=120 && house_id < 123:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id >=123 && house_id < 124:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=124 && house_id < 128:
	
		colours = ['#b2d3e3', '#7c949f'];

	break;

	case house_id >=128 && house_id < 133:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=133 && house_id < 140:
	
		colours = ['#dcb18e', '#bf8c6f'];

	break;

	case house_id >=140 && house_id < 142:
	
		colours = ['#d9a831', '#9a7922'];

	break;

	case house_id == 142:
	
		colours = ['#728393', '#4e5a65'];

	break;

	case house_id >=142 && house_id < 147:
	
		colours = ['#ef784a', '#a7614a'];

	break;

	case house_id >=147 && house_id < 149:
	
		colours = ['#4282a1', '#2c566a'];

	break;

	case house_id >=149 && house_id < 151:
	
		colours = ['#ef784a', '#a7614a'];

	break;


}

return colours

}

function loadData(id){

let url;


// desktop menu
if(document.getElementById('menuButton1').contentDocument){
	document.getElementById('menuButton1').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton2').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton3').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton4').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton5').contentDocument.getElementById("middle").style.fill = 'white'
}

// mobile menu
if(document.getElementById('menuButton1a').contentDocument){
	document.getElementById('menuButton1a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton2a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton3a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton4a').contentDocument.getElementById("middle").style.fill = 'white'
	document.getElementById('menuButton5a').contentDocument.getElementById("middle").style.fill = 'white'
}



//set json & colours
switch(id){

	case 0: //plot number & house type

		if(document.getElementById('menuButton1').contentDocument){
			// document.getElementById('menuButton1').contentDocument.getElementById("middle").style.fill = '#dcb18e';	
			gsap.to(document.getElementById('menuButton1').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});

		}

		if(document.getElementById('menuButton1a').contentDocument){
			// document.getElementById('menuButton1a').contentDocument.getElementById("middle").style.fill = '#dcb18e';	
			gsap.to(document.getElementById('menuButton1a').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}
		
		
		url = '/assets/json/housesbynumbers.json';
		// console.log('0-----')
	break;

	case 1: //not yet released
		
		if(document.getElementById('menuButton2').contentDocument){
			// document.getElementById('menuButton2').contentDocument.getElementById("middle").style.fill = '#728393';	
			gsap.to(document.getElementById('menuButton2').contentDocument.getElementById("middle"), 1, {fill: "#728393"});
		}

		if(document.getElementById('menuButton2a').contentDocument){
			// document.getElementById('menuButton2a').contentDocument.getElementById("middle").style.fill = '#728393';	
			gsap.to(document.getElementById('menuButton2a').contentDocument.getElementById("middle"), 1, {fill: "#728393"});
		}

		url = '/assets/json/housesbynotyetreleased.json';
		// console.log('1-----')
	break;

	case 2: //for sale

		if(document.getElementById('menuButton3').contentDocument){
			// document.getElementById('menuButton3').contentDocument.getElementById("middle").style.fill = '#d9a831';	
			gsap.to(document.getElementById('menuButton3').contentDocument.getElementById("middle"), 1, {fill: "#d9a831"});
		}

		if(document.getElementById('menuButton3a').contentDocument){
			// document.getElementById('menuButton3a').contentDocument.getElementById("middle").style.fill = '#d9a831';	
			gsap.to(document.getElementById('menuButton3a').contentDocument.getElementById("middle"), 1, {fill: "#d9a831"});
		}

		url = '/assets/json/housesbysale.json';
		// console.log('2-----')
	break;

	case 3: //reserved

		if(document.getElementById('menuButton4').contentDocument){
			// document.getElementById('menuButton4').contentDocument.getElementById("middle").style.fill = '#ef784a';	
			gsap.to(document.getElementById('menuButton4').contentDocument.getElementById("middle"), 1, {fill: "#ef784a"});
		}

		if(document.getElementById('menuButton4a').contentDocument){
			// document.getElementById('menuButton4a').contentDocument.getElementById("middle").style.fill = '#ef784a';	
			gsap.to(document.getElementById('menuButton4a').contentDocument.getElementById("middle"), 1, {fill: "#ef784a"});
		}

		url = '/assets/json/housesbyreserved.json';
		// console.log('3-----')
	break;

	case 4: //sold

		if(document.getElementById('menuButton5').contentDocument){
			// document.getElementById('menuButton5').contentDocument.getElementById("middle").style.fill = '#d21e3d';
			gsap.to(document.getElementById('menuButton5').contentDocument.getElementById("middle"), 1, {fill: "#d21e3d"});
		}

		if(document.getElementById('menuButton5a').contentDocument){
			// document.getElementById('menuButton5a').contentDocument.getElementById("middle").style.fill = '#d21e3d';
			gsap.to(document.getElementById('menuButton5a').contentDocument.getElementById("middle"), 1, {fill: "#d21e3d"});
		}

		url = '/assets/json/housesbysold.json';
		// console.log('4-----')
	break;

	default: //plot number & house type

		if(document.getElementById('menuButton1').contentDocument){
			// document.getElementById('menuButton1').contentDocument.getElementById("middle").style.fill = '#dcb18e';	
			gsap.to(document.getElementById('menuButton1').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}

		if(document.getElementById('menuButton1a').contentDocument){
			// document.getElementById('menuButton1a').contentDocument.getElementById("middle").style.fill = '#dcb18e';	
			gsap.to(document.getElementById('menuButton1a').contentDocument.getElementById("middle"), 1, {fill: "#dcb18e"});
		}

		url = '/assets/json/housesbynumbers.json';

	break;

}

fetch(url)
  .then(function (response) {
    // The JSON data will arrive here
    return response.json()
  }).then((data) => {
      
  	  json = data;

      colourHouses(id);
 	  animateHouses();
  }).catch(function (err) {
    // If an error occured, you will catch it here
  });



}

function hideInfo(){

document.getElementsByClassName('houseInfo')[0].style.visibility = 'hidden';
}

function showInfo(e){

let house = _.find(json, { 'house_id': e.target.parentNode.id });
document.getElementsByClassName('houseInfo')[0].style.visibility = 'visible';
document.getElementsByClassName('houseInfo')[0].style.left = Number(e.clientX-popupPosX) +'px';
document.getElementsByClassName('houseInfo')[0].style.top = Number(e.clientY+popupPosY) +'px';
document.getElementsByClassName('houseInfo1')[0].innerHTML = '<b>Plot '+house.house_id+'</b> - '+house.num_of_bedrooms+' bedrooms';
// document.getElementsByClassName('houseInfo1b')[0].innerHTML = house.num_of_bedrooms+' bedrooms';
document.getElementsByClassName('houseInfo2')[0].innerHTML = '<i>House Type</i>'+house.house_name;

}

function showInfoStart(){

document.getElementsByClassName('houseInfo')[0].style.visibility = 'visible';
document.getElementsByClassName('houseInfo')[0].style.left = '300px';
document.getElementsByClassName('houseInfo')[0].style.top = '600px'
document.getElementsByClassName('houseInfo1')[0].innerHTML = '';
document.getElementsByClassName('houseInfo2')[0].innerHTML = 'Click on a plot to';
document.getElementsByClassName('houseInfo3')[0].innerHTML = 'discover more';

}

function defineHouses(){


// add button to the houses
let numHouses = 151;
for(let i=1;i<numHouses;i++){

	let house = document.getElementById("_"+i);

	house.addEventListener('click', showInfo);
    
}

}

function colourHouses(house_type){
	

let svgElement = document.getElementsByClassName("houses")[0];

if(svgElement){
	
	// get houses svg
	let svgHouses = svgElement.children[0].children;
	
	for(let i=0;i<svgHouses.length;i++){

		let element = svgHouses[i];

		let wallColour;
		let roofColour;
		
		// if plot number & house type filter
		if(house_type==0){ 
			
			let colourArray = getHouseColours(house_type, element.id);

			if(colourArray){
				wallColour = colourArray[0];
				roofColour = colourArray[1];	
			}
		}
		else{

			wallColour = '#c2b4cd';
			roofColour = '#887f90';

		}
		
		
		for(let j=0;j<element.children.length;j++){

			// colour roof
			let roof = _.includes(element.children[j].id,'roof')
			if(roof){

				element.children[j].style.fill = roofColour;
			}

			// colour wall
			let wall = _.includes(element.children[j].id,'wall')
			if(wall){

				element.children[j].style.fill = wallColour;
			}

		}

	}
	

}

}

function animateHouses(){

// hideInfo();

// hide all houses
let numHouses = 151;
for(let i=0;i<numHouses;i++){

	let house = document.getElementById("_"+i);

	if(house)
	gsap.set(house, {scale:0, transformOrigin:"50% 50%"});
    
}

// animate selected houses
for(let i=0;i<json.length;i++){

	let house = document.getElementById(json[i].house_id);

	if(house){
		gsap.set(house, {scale:0, transformOrigin:"50% 50%"})
    	gsap.to(house, 0.2, {scale:1, transformOrigin:"50% 50%", delay:1} );
	}
 
}
}