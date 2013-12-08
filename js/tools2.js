var clicks2 = 0;
var map;
var circles2 = [];
var lines2 = [];
var lines22 = [];
var line2 = [];
var line21 = [];
var distancesCircle2 = [];
var distancesVer2 = [];
var distancesHor2 = [];
var markerc21;
var markerc22;
var markerv21;
var markerv22;
var markerh21;
var markerh22;
var markerl21;
var markerl22;
var markerl211;
var markerl221;
var markersgml21;
var markersgml22;


var iconline2 = new google.maps.MarkerImage('markers/tool2/line.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconline21 = new google.maps.MarkerImage('markers/tool2/line1.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconver2 = new google.maps.MarkerImage('markers/tool2/ver.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconhor2 = new google.maps.MarkerImage('markers/tool2/hor.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconcir2 = new google.maps.MarkerImage('markers/tool2/cir.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);


function initialize2() {
	document.getElementById('ver2').style.color='#000000';
	document.getElementById('hor2').style.color='#be9400';
	document.getElementById('cir2').style.color='#c11147';
	document.getElementById('line2').style.color='#806b7b';
	document.getElementById('line21').style.color='#806b7b';
	
	getdistancesCircle2();
	getdistancesVer2();
	getdistancesHor2();
	$('#fibCircle2').keyup(function (event) {
		getdistancesCircle2();
	});
	$('#fibVer2').keyup(function (event) {
		getdistancesVer2();
	});
	$('#fibHor2').keyup(function (event) {
		getdistancesHor2();
	});
	$(".marker2Tip1").hide();
	$(".marker2Tip2").hide();
	$(".marker2Drag").hide();
	$(".select2").show();
}

function selectTool2(id) {

	$(".marker2Tip1").show();
	google.maps.event.clearListeners(map, 'click');
	var coordinates2 = [];
	switch(id) {
		case 1:
			clearTool2(circles2,0);
			$(".marker2Tip1").show();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").hide();
			document.getElementById('distCircle2').value = "";
			if(clicks2 == 1)
				clicks2 = 0;
			break;
		case 2:
			clearTool2(lines2,0);
			$(".marker2Tip1").show();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").hide();
			document.getElementById('distVer2').value = "";
			if(clicks2 == 1)
				clicks2 = 0;
			break;
		case 3:
			clearTool2(lines22,0);
			$(".marker2Tip1").show();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").hide();
			document.getElementById('distHor2').value = "";
			if(clicks2 == 1)
				clicks2 = 0;
			break;
		case 5:
			clearTool2(line2,0);
			$(".marker2Tip1").show();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").hide();
			document.getElementById('distLine2').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 7:
			clearTool2(line21,0);
			$(".marker2Tip1").show();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").hide();
			document.getElementById('distLine21').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 4:
			clearTool2(circles2,0);
			clearTool2(lines2,0);
			clearTool2(lines22,0);
			clearTool2(line2,0);
			clearTool2(line21,0);
			document.getElementById('distCircle2').value = "";
			document.getElementById('distVer2').value = "";
			document.getElementById('distHor2').value = "";
			document.getElementById('distLine2').value = "";
			document.getElementById('distLine21').value = "";
			if(clicks2 == 1)
					clicks2 = 0;
			$(".marker2Tip1").hide();
			$(".marker2Tip2").hide();
			$(".marker2Drag").hide();
			$(".select2").show();
			return;
	}
	
	var listen2 = google.maps.event.addListener(map, 'click', function (event) {
		coordinates2.push(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
		clicks2++;

		if(clicks2 == 2) {
			$(".marker2Tip1").hide();
			$(".marker2Tip2").hide();
			$(".marker2Drag").show();
			$(".select2").hide();
			clicks2 = 0;
			google.maps.event.removeListener(listen2);
			switch(id) {
			case 1: //call circles2
				document.getElementById('distCircle2').value = distance( coordinates2[0].lat(), coordinates2[0].lng(), coordinates2[1].lat(), coordinates2[1].lng(), 0);
				fib_circles2(coordinates2);
				break;
			case 2: //call vertical lines2
				document.getElementById('distVer2').value = distance( coordinates2[0].lat(), coordinates2[0].lng(), coordinates2[1].lat(), coordinates2[1].lng(), 1 );
				fib_lines2(coordinates2);
				break;
			case 3: //call horizontal lines2
				document.getElementById('distHor2').value = distance( coordinates2[0].lat(), coordinates2[0].lng(), coordinates2[1].lat(), coordinates2[1].lng(), 2 );
				fib_lines22(coordinates2);
				break;
			case 5: //call line
				document.getElementById('distLine2').value = distance( coordinates2[0].lat(), coordinates2[0].lng(), coordinates2[1].lat(), coordinates2[1].lng(), 3 );
				lin2(coordinates2);
				break;
			case 7: //call line 2
				document.getElementById('distLine21').value = distance( coordinates2[0].lat(), coordinates2[0].lng(), coordinates2[1].lat(), coordinates2[1].lng(), 3 );
				lin21(coordinates2);
				break;
			}
		}
		if(clicks2 == 1) {
			$(".marker2Tip1").hide();
			$(".marker2Tip2").show();
			$(".marker2Drag").hide();
			$(".select2").hide();
		}
	});
	
}

function fib_circles2(coordinates2) {
	// Get the center point
	var x1 = coordinates2[0].lat();
	var y1 = coordinates2[0].lng();

	//add the center marker
	markerc21 = new google.maps.Marker({
		position: coordinates2[0],
		map: map,
		title: "Center point",
		icon: iconcir2,
		draggable: true
	});
	circles2.push(markerc21);

	//radius marker
	markerc22 = new google.maps.Marker({
		position: coordinates2[1],
		map: map,
		title: "First radius",
		icon: iconcir2,
		draggable: true
	});
	circles2.push(markerc22);
	  
	google.maps.event.addListener(markerc21, 'dragend', function () {
		coordinates2[0] = markerc21.getPosition();
		clearTool2(circles2,1);
		fib_circles2(coordinates2);
	});
  
	google.maps.event.addListener(markerc22, 'dragend', function () {
		coordinates2[1] = markerc22.getPosition();
		clearTool2(circles2,1);
		fib_circles2(coordinates2);
	});
	google.maps.event.addListener(markerc21, 'drag', function () {
		document.getElementById('distCircle2').value = distance( markerc21.getPosition().lat(), markerc21.getPosition().lng(), markerc22.getPosition().lat(), markerc22.getPosition().lng(), 0 );
	});
	google.maps.event.addListener(markerc22, 'drag', function () {
		document.getElementById('distCircle2').value = distance( markerc21.getPosition().lat(), markerc21.getPosition().lng(), markerc22.getPosition().lat(), markerc22.getPosition().lng(), 0 );
	});
	//calculate radius    
	var d = Math.round( google.maps.geometry.spherical.computeDistanceBetween(coordinates2[1], coordinates2[0]) );
	var i = 0;
	var dis = -1;
	while( (dis = custom_distanceCircle2(d, i++)) < 10000e3 ){
		circles2.push(drawCircle2(x1, y1, dis));
		if( dis==-1 )
			break;
	}
}

function drawCircle2(x, y, radius) {
	var options = {
		strokeColor: "#c11147",
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillOpacity: 0.0,
		map: map,
		center: new google.maps.LatLng(x, y),
		radius: radius
	};
	return new google.maps.Circle(options);
}


function fib_lines2(coordinates2) {
	var y1 = coordinates2[0].lng();
	var y2 = coordinates2[1].lng();

	markerv21 = new google.maps.Marker({
		position: coordinates2[0],
		map: map,
		title: "Click Point",
		icon: iconver2,
		draggable: true
	}); 
	lines2.push(markerv21);

	markerv22 = new google.maps.Marker({
		position: coordinates2[1],
		map: map,
		title: "Second Point",
		icon: iconver2,
		draggable: true
	});
	lines2.push(markerv22); 
	
	google.maps.event.addListener(markerv21, 'dragend', function () {
		coordinates2[0] = markerv21.getPosition();
		clearTool2(lines2,1);
		fib_lines2(coordinates2);
	});
	google.maps.event.addListener(markerv22, 'dragend', function () {
		coordinates2[1] = markerv22.getPosition();
		clearTool2(lines2,1);
		fib_lines2(coordinates2);
	});
	
	google.maps.event.addListener(markerv21, 'drag', function () {
		document.getElementById('distVer2').value = distance( markerv21.getPosition().lat(), markerv21.getPosition().lng(), markerv22.getPosition().lat(), markerv22.getPosition().lng(), 1 );
	});
	google.maps.event.addListener(markerv22, 'drag', function () {
		document.getElementById('distVer2').value = distance( markerv21.getPosition().lat(), markerv21.getPosition().lng(), markerv22.getPosition().lat(), markerv22.getPosition().lng(), 1 );
	});
	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distanceVer2(c, i++)) != -1) {
		lines2.push(drawlines2(y1 + dis));
		lines2.push(drawlines2(y1 - dis));
	}
}
function drawlines2(y1) {
	var lines2coordinates2 = [
		new google.maps.LatLng(33.815666, y1),
		new google.maps.LatLng(41.828642, y1)
	];

	var linePath = new google.maps.Polyline({
		path: lines2coordinates2,
		strokeColor: "#000000",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function fib_lines22(coordinates2) {
	var y1 = coordinates2[0].lat();
	var y2 = coordinates2[1].lat();
	markerh21 = new google.maps.Marker({
		position: coordinates2[0],
		map: map,
		title: "Click Point",
		icon: iconhor2,
		draggable: true
	});
	lines22.push(markerh21);
	
	markerh22 = new google.maps.Marker({
		position: coordinates2[1],
		map: map,
		title: "Second Point",
		icon: iconhor2,
		draggable: true
	});
	lines22.push(markerh22);
    
	google.maps.event.addListener(markerh21, 'dragend', function () {
		coordinates2[0] = markerh21.getPosition();
		clearTool2(lines22,1);
		fib_lines22(coordinates2);
	});
	google.maps.event.addListener(markerh22, 'dragend', function () {
		coordinates2[1] = markerh22.getPosition();
		clearTool2(lines22,1);
		fib_lines22(coordinates2);
	});
	google.maps.event.addListener(markerh21, 'drag', function () {
		document.getElementById('distHor2').value = distance( markerh21.getPosition().lat(), markerh21.getPosition().lng(), markerh22.getPosition().lat(), markerh22.getPosition().lng(), 2 );
	});
	google.maps.event.addListener(markerh22, 'drag', function () {
		document.getElementById('distHor2').value = distance( markerh21.getPosition().lat(), markerh21.getPosition().lng(), markerh22.getPosition().lat(), markerh22.getPosition().lng(), 2 );
	});

	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distanceHor2(c, i++)) != -1) {
		lines22.push(drawlines22(y1 + dis));
		lines22.push(drawlines22(y1 - dis));
	}
}

function drawlines22(y1) {
	var lines2coordinates2 = [
		new google.maps.LatLng(y1, 34.495),
		new google.maps.LatLng(y1, 18.30)
	];

	var linePath = new google.maps.Polyline({
		path: lines2coordinates2,
		strokeColor: "#be9400",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}


function lin2(coordinates2) {
	var x1 = coordinates2[0].lat();
	var y1 = coordinates2[0].lng();
	var x2 = coordinates2[1].lat();
	var y2 = coordinates2[1].lng();

	markerl21 = new google.maps.Marker({
		position: coordinates2[0],
		map: map,
		title: "Click Point",
		icon: iconline2,
		draggable: true
	}); 
	line2.push(markerl21);

	markerl22 = new google.maps.Marker({
		position: coordinates2[1],
		map: map,
		title: "Second Point",
		icon: iconline2,
		draggable: true
	});
	line2.push(markerl22); 
	
	google.maps.event.addListener(markerl21, 'dragend', function () {
		coordinates2[0] = markerl21.getPosition();
		clearTool2(line2,1);
		lin2(coordinates2);
	});
	google.maps.event.addListener(markerl22, 'dragend', function () {
		coordinates2[1] = markerl22.getPosition();
		clearTool2(line2,1);
		lin2(coordinates2);
	});
	
	google.maps.event.addListener(markerl21, 'drag', function () {
		document.getElementById('distLine2').value = distance( markerl21.getPosition().lat(), markerl21.getPosition().lng(), markerl22.getPosition().lat(), markerl22.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl22, 'drag', function () {
		document.getElementById('distLine2').value = distance( markerl21.getPosition().lat(), markerl21.getPosition().lng(), markerl22.getPosition().lat(), markerl22.getPosition().lng(), 3 );
	});

	line2.push(drawline2(x1, y1, x2, y2) );
}
function drawline2(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#806b7b",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function lin21(coordinates2) {
	var x1 = coordinates2[0].lat();
	var y1 = coordinates2[0].lng();
	var x2 = coordinates2[1].lat();
	var y2 = coordinates2[1].lng();

	markerl211 = new google.maps.Marker({
		position: coordinates2[0],
		map: map,
		title: "Click Point",
		icon: iconline21,
		draggable: true
	}); 
	line21.push(markerl211);

	markerl221 = new google.maps.Marker({
		position: coordinates2[1],
		map: map,
		title: "Second Point",
		icon: iconline21,
		draggable: true
	});
	line21.push(markerl221); 
	
	google.maps.event.addListener(markerl211, 'dragend', function () {
		coordinates2[0] = markerl211.getPosition();
		clearTool2(line21,1);
		lin21(coordinates2);
	});
	google.maps.event.addListener(markerl221, 'dragend', function () {
		coordinates2[1] = markerl221.getPosition();
		clearTool2(line21,1);
		lin21(coordinates2);
	});
	
	google.maps.event.addListener(markerl211, 'drag', function () {
		document.getElementById('distLine21').value = distance( markerl211.getPosition().lat(), markerl211.getPosition().lng(), markerl221.getPosition().lat(), markerl221.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl221, 'drag', function () {
		document.getElementById('distLine21').value = distance( markerl211.getPosition().lat(), markerl211.getPosition().lng(), markerl221.getPosition().lat(), markerl221.getPosition().lng(), 3 );
	});

	line21.push(drawline21(x1, y1, x2, y2) );
}
function drawline21(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#806b7b",
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
function custom_distanceCircle2(initial, num) {
	if(distancesCircle2[num] == undefined)
		return -1;
	return initial * distancesCircle2[num];
}
function custom_distanceVer2(initial, num) {
	if(distancesVer2[num] == undefined)
		return -1;
	return initial * distancesVer2[num];
}
function custom_distanceHor2(initial, num) {
	if(distancesHor2[num] == undefined)
		return -1;
	return initial * distancesHor2[num];
}

/* 
  toggle all lines2 from maps
*/
function clearTool2(tool,val) {
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

function getdistancesCircle2() {
	distancesCircle2 = ($("#fibCircle2").val()).split(",");
}
function getdistancesVer2() {
	distancesVer2 = ($("#fibVer2").val()).split(",");
}
function getdistancesHor2() {
	distancesHor2 = ($("#fibHor2").val()).split(",");
}

function hidemarkers2() {
	if( document.getElementById("hide2").value==0 ){
		document.getElementById("hide2").value = 1;
		document.getElementById("hidea2").innerHTML = "Show markers";
		if( markerc21!=undefined )
			markerc21.setVisible(false);
		if( markerc22!=undefined )
			markerc22.setVisible(false);
		if( markerv21!=undefined )
			markerv21.setVisible(false);
		if( markerv22!=undefined )
			markerv22.setVisible(false);
		if( markerh21!=undefined )
			markerh21.setVisible(false);
		if( markerh22!=undefined )
			markerh22.setVisible(false);
		if( markerl21!=undefined )
			markerl21.setVisible(false);
		if( markerl22!=undefined )
			markerl22.setVisible(false);
		if( markerl211!=undefined )
			markerl211.setVisible(false);
		if( markerl221!=undefined )
			markerl221.setVisible(false);
		if( markersgml21!=undefined )
			markersgml21.setvisible(false);
		if( markersgml22!=undefined )
			markersgml22.setvisible(false);
		markerstart.setvisible(false);
		markerfin.setvisible(false);
	}else{
		document.getElementById("hide2").value = 0;
		document.getElementById("hidea2").innerHTML = "Hide markers";
		if( markerc21!=undefined )
			markerc21.setVisible(true);
		if( markerc22!=undefined )
			markerc22.setVisible(true);
		if( markerv21!=undefined )
			markerv21.setVisible(true);
		if( markerv22!=undefined )
			markerv22.setVisible(true);
		if( markerh21!=undefined )
			markerh21.setVisible(true);
		if( markerh22!=undefined )
			markerh22.setVisible(true);
		if( markerl21!=undefined )
			markerl21.setVisible(true);
		if( markerl22!=undefined )
			markerl22.setVisible(true);
		if( markerl211!=undefined )
			markerl211.setVisible(true);
		if( markerl221!=undefined )
			markerl221.setVisible(true);
		if( markersgml21!=undefined )
			markersgml21.setvisible(true);
		if( markersgml22!=undefined )
			markersgml22.setvisible(true);
		markerstart.setvisible(true);
		markerfin.setvisible(true);
	}
}
google.maps.event.addDomListener(window, 'load', initialize2);