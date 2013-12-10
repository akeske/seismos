var clicks3 = 0;
var map;
var circles3 = [];
var lines3 = [];
var lines32 = [];
var line3 = [];
var line31 = [];
var distancesCircle3 = [];
var distancesVer3 = [];
var distancesHor3 = [];
var markerc31;
var markerc32;
var markerv31;
var markerv32;
var markerh31;
var markerh32;
var markerl31;
var markerl32;
var markerl311;
var markerl321;
var markersgml31;
var markersgml32;

var iconline3 = new google.maps.MarkerImage('markers/tool3/line.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconline31 = new google.maps.MarkerImage('markers/tool3/line1.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconver3 = new google.maps.MarkerImage('markers/tool3/ver.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconhor3 = new google.maps.MarkerImage('markers/tool3/hor.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconcir3 = new google.maps.MarkerImage('markers/tool3/cir.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
function initialize3() {

	document.getElementById('ver3').style.color='#3171b2';
	document.getElementById('hor3').style.color='#fff2c5';
	document.getElementById('cir3').style.color='#0a9206';
	document.getElementById('line3').style.color='#8a120f';
	document.getElementById('line31').style.color='#8a120f';
	
	getdistancesCircle3();
	getdistancesVer3();
	getdistancesHor3();
	$('#fibCircle3').keyup(function (event) {
		getdistancesCircle3();
	});
	$('#fibVer3').keyup(function (event) {
		getdistancesVer3();
	});
	$('#fibHor3').keyup(function (event) {
		getdistancesHor3();
	});
	$(".marker3Tip1").hide();
	$(".marker3Tip2").hide();
	$(".marker3Drag").hide();
	$(".select3").show();
}

function selectTool3(id) {

	$(".marker3Tip1").show();
	google.maps.event.clearListeners(map, 'click');
	var coordinates3 = [];
	switch(id) {
		case 1:
			clearTool3(circles3,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distCircle3').value = "";
			if(clicks3 == 1)
				clicks3 = 0;
			break;
		case 2:
			clearTool3(lines3,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distVer3').value = "";
			if(clicks3 == 1)
				clicks3 = 0;
			break;
		case 3:
			clearTool3(lines32,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distHor3').value = "";
			if(clicks3 == 1)
				clicks3 = 0;
			break;
		case 5:
			clearTool3(line3,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distLine3').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 7:
			clearTool3(line31,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distLine31').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 4:
			clearTool3(circles3,0);
			clearTool3(lines3,0);
			clearTool3(lines32,0);
			clearTool3(line3,0);
			clearTool3(line31,0);
			document.getElementById('distCircle3').value = "";
			document.getElementById('distVer3').value = "";
			document.getElementById('distHor3').value = "";
			document.getElementById('distLine3').value = "";
			document.getElementById('distLine31').value = "";
			if(clicks3 == 1)
					clicks3 = 0;
			$(".marker3Tip1").hide();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").show();
			return;
	}
	
	var listen3 = google.maps.event.addListener(map, 'click', function (event) {
	
    
		coordinates3.push(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
		clicks3++;

		if(clicks3 == 2) {
			$(".marker3Tip1").hide();
			$(".marker3Tip2").hide();
			$(".marker3Drag").show();
			$(".select3").hide();
			clicks3 = 0;
			google.maps.event.removeListener(listen3);
			switch(id) {
			case 1: //call circles3
				document.getElementById('distCircle3').value = distance( coordinates3[0].lat(), coordinates3[0].lng(), coordinates3[1].lat(), coordinates3[1].lng(), 0);
				fib_circles3(coordinates3);
				break;
			case 2: //call vertical lines3
				document.getElementById('distVer3').value = distance( coordinates3[0].lat(), coordinates3[0].lng(), coordinates3[1].lat(), coordinates3[1].lng(), 1 );
				fib_lines3(coordinates3);
				break;
			case 3: //call horizontal lines3
				document.getElementById('distHor3').value = distance( coordinates3[0].lat(), coordinates3[0].lng(), coordinates3[1].lat(), coordinates3[1].lng(), 2 );
				fib_lines32(coordinates3);
				break;
			case 5: //call line
				document.getElementById('distLine3').value = distance( coordinates3[0].lat(), coordinates3[0].lng(), coordinates3[1].lat(), coordinates3[1].lng(), 3 );
				lin3(coordinates3);
				break;
			case 7: //call line 2
				document.getElementById('distLine31').value = distance( coordinates3[0].lat(), coordinates3[0].lng(), coordinates3[1].lat(), coordinates3[1].lng(), 3 );
				lin31(coordinates3);
				break;
			}
		}
		if(clicks3 == 1) {
			$(".marker3Tip1").hide();
			$(".marker3Tip2").show();
			$(".marker3Drag").hide();
			$(".select3").hide();
		}
	});
	
}

function fib_circles3(coordinates3) {
	// Get the center point
	var x1 = coordinates3[0].lat();
	var y1 = coordinates3[0].lng();

	//add the center marker
	markerc31 = new google.maps.Marker({
		position: coordinates3[0],
		map: map,
		title: "Center point",
		icon: iconcir3,
		draggable: true
	});
	circles3.push(markerc31);

	//radius marker
	markerc32 = new google.maps.Marker({
		position: coordinates3[1],
		map: map,
		title: "First radius",
		icon: iconcir3,
		draggable: true
	});
	circles3.push(markerc32);
	  
	google.maps.event.addListener(markerc31, 'dragend', function () {
		coordinates3[0] = markerc31.getPosition();
		clearTool3(circles3,1);
		fib_circles3(coordinates3);
	});
  
	google.maps.event.addListener(markerc32, 'dragend', function () {
		coordinates3[1] = markerc32.getPosition();
		clearTool3(circles3,1);
		fib_circles3(coordinates3);
	});
	google.maps.event.addListener(markerc31, 'drag', function () {
		document.getElementById('distCircle3').value = distance( markerc31.getPosition().lat(), markerc31.getPosition().lng(), markerc32.getPosition().lat(), markerc32.getPosition().lng(), 0 );
	});
	google.maps.event.addListener(markerc32, 'drag', function () {
		document.getElementById('distCircle3').value = distance( markerc31.getPosition().lat(), markerc31.getPosition().lng(), markerc32.getPosition().lat(), markerc32.getPosition().lng(), 0 );
	});
	//calculate radius    
	var d = Math.round( google.maps.geometry.spherical.computeDistanceBetween(coordinates3[1], coordinates3[0]) );
	var i = 0;
	var dis = -1;
	while( (dis = custom_distanceCircle3(d, i++)) < 10000e3 ){
		circles3.push(drawCircle3(x1, y1, dis));
		if( dis==-1 )
			break;
	}
}

function drawCircle3(x, y, radius) {
	var options = {
		strokeColor: "#0a9206",
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillOpacity: 0.0,
		map: map,
		center: new google.maps.LatLng(x, y),
		radius: radius
	};
	return new google.maps.Circle(options);
}

function fib_lines3(coordinates3) {
	var y1 = coordinates3[0].lng();
	var y2 = coordinates3[1].lng();

	markerv31 = new google.maps.Marker({
		position: coordinates3[0],
		map: map,
		title: "Click Point",
		icon: iconver3,
		draggable: true
	}); 
	lines3.push(markerv31);

	markerv32 = new google.maps.Marker({
		position: coordinates3[1],
		map: map,
		title: "Second Point",
		icon: iconver3,
		draggable: true
	});
	lines3.push(markerv32); 
	
	google.maps.event.addListener(markerv31, 'dragend', function () {
		coordinates3[0] = markerv31.getPosition();
		clearTool3(lines3,1);
		fib_lines3(coordinates3);
	});
	google.maps.event.addListener(markerv32, 'dragend', function () {
		coordinates3[1] = markerv32.getPosition();
		clearTool3(lines3,1);
		fib_lines3(coordinates3);
	});
	
	google.maps.event.addListener(markerv31, 'drag', function () {
		document.getElementById('distVer3').value = distance( markerv31.getPosition().lat(), markerv31.getPosition().lng(), markerv32.getPosition().lat(), markerv32.getPosition().lng(), 1 );
	});
	google.maps.event.addListener(markerv32, 'drag', function () {
		document.getElementById('distVer3').value = distance( markerv31.getPosition().lat(), markerv31.getPosition().lng(), markerv32.getPosition().lat(), markerv32.getPosition().lng(), 1 );
	});
	if(distancesVer3[1]-distancesVer3[0]>0){
		var c = y2 - y1;
		var i = 0;
		while((dis = custom_distanceVer3(c, i++, 1)) != -1) {
			lines3.push(drawlines3(y1 + dis));
			lines3.push(drawlines3(y1 - dis));
		}
	}else{
		lines3.push(drawlines3(y1));
		lines3.push(drawlines3(y2));
		var c = y2 - y1;
		var lastrigh = y2;
		var lastleft = y1;
		var diafora = distancesVer3[0] - distancesVer3[1];
		var monada = c / diafora;
		var i = 2;
		while((dis = custom_distanceVer3(monada, i++, 2)) != -1) {
			lines3.push(drawlines3(lastrigh + dis));
			lines3.push(drawlines3(lastleft - dis));
			lastrigh = lastrigh+dis;
			lastleft = lastleft-dis;
		}
	}
}
function drawlines3(y1) {
	var lines3coordinates3 = [
		new google.maps.LatLng(33.815666, y1),
		new google.maps.LatLng(41.828642, y1)
	];

	var linePath = new google.maps.Polyline({
		path: lines3coordinates3,
		strokeColor: "#3171b2",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function fib_lines32(coordinates3) {
	var y1 = coordinates3[0].lat();
	var y2 = coordinates3[1].lat();
	markerh31 = new google.maps.Marker({
		position: coordinates3[0],
		map: map,
		title: "Click Point",
		icon: iconhor3,
		draggable: true
	});
	lines32.push(markerh31);
	
	markerh32 = new google.maps.Marker({
		position: coordinates3[1],
		map: map,
		title: "Second Point",
		icon: iconhor3,
		draggable: true
	});
	lines32.push(markerh32);
    
	google.maps.event.addListener(markerh31, 'dragend', function () {
		coordinates3[0] = markerh31.getPosition();
		clearTool3(lines32,1);
		fib_lines32(coordinates3);
	});
	google.maps.event.addListener(markerh32, 'dragend', function () {
		coordinates3[1] = markerh32.getPosition();
		clearTool3(lines32,1);
		fib_lines32(coordinates3);
	});
	google.maps.event.addListener(markerh31, 'drag', function () {
		document.getElementById('distHor3').value = distance( markerh31.getPosition().lat(), markerh31.getPosition().lng(), markerh32.getPosition().lat(), markerh32.getPosition().lng(), 2 );
	});
	google.maps.event.addListener(markerh32, 'drag', function () {
		document.getElementById('distHor3').value = distance( markerh31.getPosition().lat(), markerh31.getPosition().lng(), markerh32.getPosition().lat(), markerh32.getPosition().lng(), 2 );
	});

	if(distancesHor3[1]-distancesHor3[0]>0){
		var c = y2 - y1;
		var i = 0;
		while((dis = custom_distanceHor3(c, i++, 1)) != -1) {
			lines32.push(drawlines32(y1 + dis));
			lines32.push(drawlines32(y1 - dis));
		}
	}else{
		lines32.push(drawlines32(y1));
		lines32.push(drawlines32(y2));
		var c = y2 - y1;
		var lastrigh = y2;
		var lastleft = y1;
		var diafora = distancesHor3[0] - distancesHor3[1];
		var monada = c / diafora;
		var i = 2;
		while((dis = custom_distanceHor3(monada, i++, 2)) != -1) {
			lines32.push(drawlines32(lastrigh + dis));
			lines32.push(drawlines32(lastleft - dis));
			lastrigh = lastrigh+dis;
			lastleft = lastleft-dis;
		}
	}
}
function drawlines32(y1) {
	var lines3coordinates3 = [
		new google.maps.LatLng(y1, 34.495),
		new google.maps.LatLng(y1, 18.30)
	];

	var linePath = new google.maps.Polyline({
		path: lines3coordinates3,
		strokeColor: "#fff2c5",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}




function lin3(coordinates3) {
	var x1 = coordinates3[0].lat();
	var y1 = coordinates3[0].lng();
	var x2 = coordinates3[1].lat();
	var y2 = coordinates3[1].lng();

	markerl31 = new google.maps.Marker({
		position: coordinates3[0],
		map: map,
		title: "Click Point",
		icon: iconline3,
		draggable: true
	}); 
	line3.push(markerl31);

	markerl32 = new google.maps.Marker({
		position: coordinates3[1],
		map: map,
		title: "Second Point",
		icon: iconline3,
		draggable: true
	});
	line3.push(markerl32); 
	
	google.maps.event.addListener(markerl31, 'dragend', function () {
		coordinates3[0] = markerl31.getPosition();
		clearTool3(line3,1);
		lin3(coordinates3);
	});
	google.maps.event.addListener(markerl32, 'dragend', function () {
		coordinates3[1] = markerl32.getPosition();
		clearTool3(line3,1);
		lin3(coordinates3);
	});
	
	google.maps.event.addListener(markerl31, 'drag', function () {
		document.getElementById('distLine3').value = distance( markerl31.getPosition().lat(), markerl31.getPosition().lng(), markerl32.getPosition().lat(), markerl32.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl32, 'drag', function () {
		document.getElementById('distLine3').value = distance( markerl31.getPosition().lat(), markerl31.getPosition().lng(), markerl32.getPosition().lat(), markerl32.getPosition().lng(), 3 );
	});

	line3.push(drawline3(x1, y1, x2, y2) );
}
function drawline3(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#8a120f",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}


function lin31(coordinates3) {
	var x1 = coordinates3[0].lat();
	var y1 = coordinates3[0].lng();
	var x2 = coordinates3[1].lat();
	var y2 = coordinates3[1].lng();

	markerl311 = new google.maps.Marker({
		position: coordinates3[0],
		map: map,
		title: "Click Point",
		icon: iconline31,
		draggable: true
	}); 
	line31.push(markerl311);

	markerl321 = new google.maps.Marker({
		position: coordinates3[1],
		map: map,
		title: "Second Point",
		icon: iconline31,
		draggable: true
	});
	line31.push(markerl321); 
	
	google.maps.event.addListener(markerl311, 'dragend', function () {
		coordinates3[0] = markerl311.getPosition();
		clearTool3(line31,1);
		lin31(coordinates3);
	});
	google.maps.event.addListener(markerl321, 'dragend', function () {
		coordinates3[1] = markerl321.getPosition();
		clearTool3(line31,1);
		lin31(coordinates3);
	});
	
	google.maps.event.addListener(markerl311, 'drag', function () {
		document.getElementById('distLine31').value = distance( markerl311.getPosition().lat(), markerl311.getPosition().lng(), markerl321.getPosition().lat(), markerl321.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl321, 'drag', function () {
		document.getElementById('distLine31').value = distance( markerl311.getPosition().lat(), markerl311.getPosition().lng(), markerl321.getPosition().lat(), markerl321.getPosition().lng(), 3 );
	});

	line31.push(drawline31(x1, y1, x2, y2) );
}
function drawline31(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#8a120f",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}
/* 
  Calculates the "num" fibonacci distance
*/
function custom_distanceCircle3(initial, num) {
	if(distancesCircle3[num] == undefined)
		return -1;
	return initial * distancesCircle3[num];
}
function custom_distanceVer3(initial, num, type) {
	if( type==1 ){
		if(distancesVer3[num] == undefined)
			return -1;
		return initial * distancesVer3[num];
	}else{	
		if(distancesVer3[num] == undefined)
			return -1;
		var dist = initial * (distancesVer3[num-1] - distancesVer3[num]);
		return dist;
	}
}
function custom_distanceHor3(initial, num, type) {
	if( type==1 ){
		if(distancesHor3[num] == undefined)
			return -1;
		return initial * distancesHor3[num];
	}else{	
		if(distancesHor3[num] == undefined)
			return -1;
		var dist = initial * (distancesHor3[num-1] - distancesHor3[num]);
		return dist;
	}
}

/* 
  toggle all lines3 from maps
*/
function clearTool3(tool,val) {
	for(var i = 0; i < tool.length; i++){
		tool[i].setMap(null);
		
		if(val==0){
		if ( tool[i] instanceof google.maps.Marker  ) {
			if( markerc11==tool[i] )
				markerc11 = null;
			if( markerc12==tool[i] )
				markerc12 = null;
				
			if( markerv11==tool[i] )
				markerv11 = null;
			if( markerv12==tool[i] )
				markerv12 = null;
				
			if( markerh11==tool[i] )
				markerh11 = null;
			if( markerh12==tool[i] )
				markerh12 = null;
				
			if( markerl11==tool[i] )
				markerl11 = null;
			if( markerl21==tool[i] )
				markerl21 = null;
				
			if( markerl111==tool[i] )
				markerl111 = null;
			if( markerl121==tool[i] )
				markerl121 = null;

				//tool2
			if( markerc21==tool[i] )
				markerc21 = null;
			if( markerc22==tool[i] )
				markerc22 = null;
				
			if( markerv21==tool[i] )
				markerv21 = null;
			if( markerv22==tool[i] )
				markerv22 = null;
				
			if( markerh21==tool[i] )
				markerh21 = null;
			if( markerh22==tool[i] )
				markerh22 = null;
				
			if( markerl21==tool[i] )
				markerl21 = null;
			if( markerl22==tool[i] )
				markerl22 = null;
				
			if( markerl211==tool[i] )
				markerl211 = null;
			if( markerl221==tool[i] )
				markerl221 = null;
				
				//tool3
			if( markerc31==tool[i] )
				markerc31 = null;
			if( markerc32==tool[i] )
				markerc32 = null;
				
			if( markerv31==tool[i] )
				markerv31 = null;
			if( markerv32==tool[i] )
				markerv32 = null;
				
			if( markerh31==tool[i] )
				markerh31 = null;
			if( markerh32==tool[i] )
				markerh32 = null;
				
			if( markerl31==tool[i] )
				markerl31 = null;
			if( markerl32==tool[i] )
				markerl32 = null;
			
			if( markerl311==tool[i] )
				markerl311 = null;
			if( markerl321==tool[i] )
				markerl321 = null;

				//tool4
			if( markerc41==tool[i] )
				markerc41 = null;
			if( markerc42==tool[i] )
				markerc42 = null;
				
			if( markerv42==tool[i] )
				markerv42 = null;
			if( markerv42==tool[i] )
				markerv42 = null;
				
			if( markerh41==tool[i] )
				markerh41 = null;
			if( markerh42==tool[i] )
				markerh42 = null;
				
			if( markerl41==tool[i] )
				markerl41 = null;
			if( markerl42==tool[i] )
				markerl42 = null;
			
			if( markerl411==tool[i] )
				markerl411 = null;
			if( markerl421==tool[i] )
				markerl421 = null;
			}
		}
	}
}

function getdistancesCircle3() {
	distancesCircle3 = ($("#fibCircle3").val()).split(",");
}
function getdistancesVer3() {
	distancesVer3 = ($("#fibVer3").val()).split(",");
}
function getdistancesHor3() {
	distancesHor3 = ($("#fibHor3").val()).split(",");
}

function hidemarkers3() {
	if( document.getElementById("hide3").value==0 ){
		document.getElementById("hide3").value = 1;
		document.getElementById("hidea3").innerHTML = "Show markers";
		if( markerc31!=undefined )
			markerc31.setVisible(false);
		if( markerc32!=undefined )
			markerc32.setVisible(false);
		if( markerv31!=undefined )
			markerv31.setVisible(false);
		if( markerv32!=undefined )
			markerv32.setVisible(false);
		if( markerh31!=undefined )
			markerh31.setVisible(false);
		if( markerh32!=undefined )
			markerh32.setVisible(false);
		if( markerl31!=undefined )
			markerl31.setVisible(false);
		if( markerl32!=undefined )
			markerl32.setVisible(false);
		if( markerl311!=undefined )
			markerl311.setVisible(false);
		if( markerl321!=undefined )
			markerl321.setVisible(false);
		if( markersgml31!=undefined )
			markersgml31.setvisible(false);
		if( markersgml32!=undefined )
			markersgml32.setvisible(false);
		markerstart.setvisible(false);
		markerfin.setvisible(false);
	}else{
		document.getElementById("hide3").value = 0;
		document.getElementById("hidea3").innerHTML = "Hide markers";
		if( markerc31!=undefined )
			markerc31.setVisible(true);
		if( markerc32!=undefined )
			markerc32.setVisible(true);
		if( markerv31!=undefined )
			markerv31.setVisible(true);
		if( markerv32!=undefined )
			markerv32.setVisible(true);
		if( markerh31!=undefined )
			markerh31.setVisible(true);
		if( markerh32!=undefined )
			markerh32.setVisible(true);
		if( markerl31!=undefined )
			markerl31.setVisible(true);
		if( markerl32!=undefined )
			markerl32.setVisible(true);
		if( markerl311!=undefined )
			markerl311.setVisible(true);
		if( markerl321!=undefined )
			markerl321.setVisible(true);
		if( markersgml31!=undefined )
			markersgml31.setvisible(true);
		if( markersgml32!=undefined )
			markersgml32.setvisible(true);
		markerstart.setvisible(true);
		markerfin.setvisible(true);
	}
}

google.maps.event.addDomListener(window, 'load', initialize3);