var clicks4 = 0;
var map;
var circles4 = [];
var lines4 = [];
var lines42 = [];
var line4 = [];
var line41 = [];
var distancesCircle4 = [];
var distancesVer4 = [];
var distancesHor4 = [];
var markerc41;
var markerc42;
var markerv41;
var markerv42;
var markerh41;
var markerh42;
var markerl41;
var markerl42;
var markerl411;
var markerl421;
var markersgml41;
var markersgml42;

var iconline4 = new google.maps.MarkerImage('markers/tool4/line.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconline41 = new google.maps.MarkerImage('markers/tool4/line1.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconver4 = new google.maps.MarkerImage('markers/tool4/ver.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconhor4 = new google.maps.MarkerImage('markers/tool4/hor.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconcir4 = new google.maps.MarkerImage('markers/tool4/cir.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
function initialize4() {

	document.getElementById('ver4').style.color='#6bb231';
	document.getElementById('hor4').style.color='#ad9952';
	document.getElementById('cir4').style.color='#ffde00';
	document.getElementById('line4').style.color='#660f8a';
	document.getElementById('line41').style.color='#660f8a';
	
	getdistancesCircle4();
	getdistancesVer4();
	getdistancesHor4();
	$('#fibCircle4').keyup(function (event) {
		getdistancesCircle4();
	});
	$('#fibVer4').keyup(function (event) {
		getdistancesVer4();
	});
	$('#fibHor4').keyup(function (event) {
		getdistancesHor4();
	});
	$(".marker3Tip1").hide();
	$(".marker3Tip2").hide();
	$(".marker3Drag").hide();
	$(".select3").show();
}

function selectTool4(id) {

	$(".marker3Tip1").show();
	google.maps.event.clearListeners(map, 'click');
	var coordinates4 = [];
	switch(id) {
		case 1:
			cleartool4(circles4,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distCircle4').value = "";
			if(clicks4 == 1)
				clicks4 = 0;
			break;
		case 2:
			cleartool4(lines4,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distVer4').value = "";
			if(clicks4 == 1)
				clicks4 = 0;
			break;
		case 3:
			cleartool4(lines42,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distHor4').value = "";
			if(clicks4 == 1)
				clicks4 = 0;
			break;
		case 5:
			cleartool4(line4,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distLine4').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 7:
			cleartool4(line41,0);
			$(".marker3Tip1").show();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").hide();
			document.getElementById('distLine41').value = "";
			if(clicks1 == 1)
				clicks1 = 0;
		break;
		case 4:
			cleartool4(circles4,0);
			cleartool4(lines4,0);
			cleartool4(lines42,0);
			cleartool4(line4,0);
			cleartool4(line41,0);
			document.getElementById('distCircle4').value = "";
			document.getElementById('distVer4').value = "";
			document.getElementById('distHor4').value = "";
			document.getElementById('distLine4').value = "";
			document.getElementById('distLine41').value = "";
			if(clicks4 == 1)
					clicks4 = 0;
			$(".marker3Tip1").hide();
			$(".marker3Tip2").hide();
			$(".marker3Drag").hide();
			$(".select3").show();
			return;
	}
	
	var listen4 = google.maps.event.addListener(map, 'click', function (event) {
	
    
		coordinates4.push(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
		clicks4++;

		if(clicks4 == 2) {
			$(".marker3Tip1").hide();
			$(".marker3Tip2").hide();
			$(".marker3Drag").show();
			$(".select3").hide();
			clicks4 = 0;
			google.maps.event.removeListener(listen4);
			switch(id) {
			case 1: //call circles4
				document.getElementById('distCircle4').value = distance( coordinates4[0].lat(), coordinates4[0].lng(), coordinates4[1].lat(), coordinates4[1].lng(), 0);
				fib_circles4(coordinates4);
				break;
			case 2: //call vertical lines4
				document.getElementById('distVer4').value = distance( coordinates4[0].lat(), coordinates4[0].lng(), coordinates4[1].lat(), coordinates4[1].lng(), 1 );
				fib_lines4(coordinates4);
				break;
			case 3: //call horizontal lines4
				document.getElementById('distHor4').value = distance( coordinates4[0].lat(), coordinates4[0].lng(), coordinates4[1].lat(), coordinates4[1].lng(), 2 );
				fib_lines42(coordinates4);
				break;
			case 5: //call line
				document.getElementById('distLine4').value = distance( coordinates4[0].lat(), coordinates4[0].lng(), coordinates4[1].lat(), coordinates4[1].lng(), 3 );
				lin4(coordinates4);
				break;
			case 7: //call line 2
				document.getElementById('distLine41').value = distance( coordinates4[0].lat(), coordinates4[0].lng(), coordinates4[1].lat(), coordinates4[1].lng(), 3 );
				lin41(coordinates4);
				break;
			}
		}
		if(clicks4 == 1) {
			$(".marker3Tip1").hide();
			$(".marker3Tip2").show();
			$(".marker3Drag").hide();
			$(".select3").hide();
		}
	});
	
}

function fib_circles4(coordinates4) {
	// Get the center point
	var x1 = coordinates4[0].lat();
	var y1 = coordinates4[0].lng();

	//add the center marker
	markerc41 = new google.maps.Marker({
		position: coordinates4[0],
		map: map,
		title: "Center point",
		icon: iconcir4,
		draggable: true
	});
	circles4.push(markerc41);

	//radius marker
	markerc42 = new google.maps.Marker({
		position: coordinates4[1],
		map: map,
		title: "First radius",
		icon: iconcir4,
		draggable: true
	});
	circles4.push(markerc42);
	  
	google.maps.event.addListener(markerc41, 'dragend', function () {
		coordinates4[0] = markerc41.getPosition();
		cleartool4(circles4,1);
		fib_circles4(coordinates4);
	});
  
	google.maps.event.addListener(markerc42, 'dragend', function () {
		coordinates4[1] = markerc42.getPosition();
		cleartool4(circles4,1);
		fib_circles4(coordinates4);
	});
	google.maps.event.addListener(markerc41, 'drag', function () {
		document.getElementById('distCircle4').value = distance( markerc41.getPosition().lat(), markerc41.getPosition().lng(), markerc42.getPosition().lat(), markerc42.getPosition().lng(), 0 );
	});
	google.maps.event.addListener(markerc42, 'drag', function () {
		document.getElementById('distCircle4').value = distance( markerc41.getPosition().lat(), markerc41.getPosition().lng(), markerc42.getPosition().lat(), markerc42.getPosition().lng(), 0 );
	});
	//calculate radius    
	var d = Math.round( google.maps.geometry.spherical.computeDistanceBetween(coordinates4[1], coordinates4[0]) );
	var i = 0;
	var dis = -1;
	while( (dis = custom_distanceCircle4(d, i++)) < 10000e3 ){
		circles4.push(drawCircle4(x1, y1, dis));
		if( dis==-1 )
			break;
	}
}

function drawCircle4(x, y, radius) {
	var options = {
		strokeColor: "#ffde00",
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillOpacity: 0.0,
		map: map,
		center: new google.maps.LatLng(x, y),
		radius: radius
	};
	return new google.maps.Circle(options);
}

function fib_lines4(coordinates4) {
	var y1 = coordinates4[0].lng();
	var y2 = coordinates4[1].lng();

	markerv41 = new google.maps.Marker({
		position: coordinates4[0],
		map: map,
		title: "Click Point",
		icon: iconver4,
		draggable: true
	}); 
	lines4.push(markerv41);

	markerv42 = new google.maps.Marker({
		position: coordinates4[1],
		map: map,
		title: "Second Point",
		icon: iconver4,
		draggable: true
	});
	lines4.push(markerv42); 
	
	google.maps.event.addListener(markerv41, 'dragend', function () {
		coordinates4[0] = markerv41.getPosition();
		cleartool4(lines4,1);
		fib_lines4(coordinates4);
	});
	google.maps.event.addListener(markerv42, 'dragend', function () {
		coordinates4[1] = markerv42.getPosition();
		cleartool4(lines4,1);
		fib_lines4(coordinates4);
	});
	
	google.maps.event.addListener(markerv41, 'drag', function () {
		document.getElementById('distVer4').value = distance( markerv41.getPosition().lat(), markerv41.getPosition().lng(), markerv42.getPosition().lat(), markerv42.getPosition().lng(), 1 );
	});
	google.maps.event.addListener(markerv42, 'drag', function () {
		document.getElementById('distVer4').value = distance( markerv41.getPosition().lat(), markerv41.getPosition().lng(), markerv42.getPosition().lat(), markerv42.getPosition().lng(), 1 );
	});
	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distancever4(c, i++)) != -1) {
		lines4.push(drawlines4(y1 + dis));
		lines4.push(drawlines4(y1 - dis));
	}
}
function drawlines4(y1) {
	var lines4coordinates4 = [
		new google.maps.LatLng(33.815666, y1),
		new google.maps.LatLng(41.828642, y1)
	];

	var linePath = new google.maps.Polyline({
		path: lines4coordinates4,
		strokeColor: "#6bb231",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function fib_lines42(coordinates4) {
	var y1 = coordinates4[0].lat();
	var y2 = coordinates4[1].lat();
	markerh41 = new google.maps.Marker({
		position: coordinates4[0],
		map: map,
		title: "Click Point",
		icon: iconhor4,
		draggable: true
	});
	lines42.push(markerh41);
	
	markerh42 = new google.maps.Marker({
		position: coordinates4[1],
		map: map,
		title: "Second Point",
		icon: iconhor4,
		draggable: true
	});
	lines42.push(markerh42);
    
	google.maps.event.addListener(markerh41, 'dragend', function () {
		coordinates4[0] = markerh41.getPosition();
		cleartool4(lines42,1);
		fib_lines42(coordinates4);
	});
	google.maps.event.addListener(markerh42, 'dragend', function () {
		coordinates4[1] = markerh42.getPosition();
		cleartool4(lines42,1);
		fib_lines42(coordinates4);
	});
	google.maps.event.addListener(markerh41, 'drag', function () {
		document.getElementById('distHor4').value = distance( markerh41.getPosition().lat(), markerh41.getPosition().lng(), markerh42.getPosition().lat(), markerh42.getPosition().lng(), 2 );
	});
	google.maps.event.addListener(markerh42, 'drag', function () {
		document.getElementById('distHor4').value = distance( markerh41.getPosition().lat(), markerh41.getPosition().lng(), markerh42.getPosition().lat(), markerh42.getPosition().lng(), 2 );
	});

	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distancehor4(c, i++)) != -1) {
		lines42.push(drawlines42(y1 + dis));
		lines42.push(drawlines42(y1 - dis));
	}
}

function drawlines42(y1) {
	var lines4coordinates4 = [
		new google.maps.LatLng(y1, 34.495),
		new google.maps.LatLng(y1, 18.30)
	];

	var linePath = new google.maps.Polyline({
		path: lines4coordinates4,
		strokeColor: "#ad9952",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}




function lin4(coordinates4) {
	var x1 = coordinates4[0].lat();
	var y1 = coordinates4[0].lng();
	var x2 = coordinates4[1].lat();
	var y2 = coordinates4[1].lng();

	markerl41 = new google.maps.Marker({
		position: coordinates4[0],
		map: map,
		title: "Click Point",
		icon: iconline4,
		draggable: true
	}); 
	line4.push(markerl41);

	markerl42 = new google.maps.Marker({
		position: coordinates4[1],
		map: map,
		title: "Second Point",
		icon: iconline4,
		draggable: true
	});
	line4.push(markerl42); 
	
	google.maps.event.addListener(markerl41, 'dragend', function () {
		coordinates4[0] = markerl41.getPosition();
		cleartool4(line4,1);
		lin4(coordinates4);
	});
	google.maps.event.addListener(markerl42, 'dragend', function () {
		coordinates4[1] = markerl42.getPosition();
		cleartool4(line4,1);
		lin4(coordinates4);
	});
	
	google.maps.event.addListener(markerl41, 'drag', function () {
		document.getElementById('distLine4').value = distance( markerl41.getPosition().lat(), markerl41.getPosition().lng(), markerl42.getPosition().lat(), markerl42.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl42, 'drag', function () {
		document.getElementById('distLine4').value = distance( markerl41.getPosition().lat(), markerl41.getPosition().lng(), markerl42.getPosition().lat(), markerl42.getPosition().lng(), 3 );
	});

	line4.push(drawline4(x1, y1, x2, y2) );
}
function drawline4(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#660f8a",
		strokeOpacity: 0.8,
	//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}


function lin41(coordinates4) {
	var x1 = coordinates4[0].lat();
	var y1 = coordinates4[0].lng();
	var x2 = coordinates4[1].lat();
	var y2 = coordinates4[1].lng();

	markerl411 = new google.maps.Marker({
		position: coordinates4[0],
		map: map,
		title: "Click Point",
		icon: iconline41,
		draggable: true
	}); 
	line41.push(markerl411);

	markerl421 = new google.maps.Marker({
		position: coordinates4[1],
		map: map,
		title: "Second Point",
		icon: iconline41,
		draggable: true
	});
	line41.push(markerl421); 
	
	google.maps.event.addListener(markerl411, 'dragend', function () {
		coordinates4[0] = markerl411.getPosition();
		cleartool4(line41,1);
		lin41(coordinates4);
	});
	google.maps.event.addListener(markerl421, 'dragend', function () {
		coordinates4[1] = markerl421.getPosition();
		cleartool4(line41,1);
		lin41(coordinates4);
	});
	
	google.maps.event.addListener(markerl411, 'drag', function () {
		document.getElementById('distLine41').value = distance( markerl411.getPosition().lat(), markerl411.getPosition().lng(), markerl421.getPosition().lat(), markerl421.getPosition().lng(), 3 );
	});
	google.maps.event.addListener(markerl421, 'drag', function () {
		document.getElementById('distLine41').value = distance( markerl411.getPosition().lat(), markerl411.getPosition().lng(), markerl421.getPosition().lat(), markerl421.getPosition().lng(), 3 );
	});

	line41.push(drawline41(x1, y1, x2, y2) );
}
function drawline41(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#660f8a",
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
function custom_distanceCircle4(initial, num) {
	if(distancesCircle4[num] == undefined)
		return -1;
	return initial * distancesCircle4[num];
}
function custom_distancever4(initial, num) {
	if(distancesVer4[num] == undefined)
		return -1;
	return initial * distancesVer4[num];
}
function custom_distancehor4(initial, num) {
	if(distancesHor4[num] == undefined)
		return -1;
	return initial * distancesHor4[num];
}

/* 
  toggle all lines4 from maps
*/
function cleartool4(tool,val) {
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

function getdistancesCircle4() {
	distancesCircle4 = ($("#fibCircle4").val()).split(",");
}
function getdistancesVer4() {
	distancesVer4 = ($("#fibVer4").val()).split(",");
}
function getdistancesHor4() {
	distancesHor4 = ($("#fibHor4").val()).split(",");
}

function hidemarkers4() {
	if( document.getElementById("hide4").value==0 ){
		document.getElementById("hide4").value = 1;
		document.getElementById("hidea4").innerHTML = "Show markers";
		if( markerc41!=undefined )
			markerc41.setVisible(false);
		if( markerc42!=undefined )
			markerc42.setVisible(false);
		if( markerv42!=undefined )
			markerv42.setVisible(false);
		if( markerv42!=undefined )
			markerv42.setVisible(false);
		if( markerh41!=undefined )
			markerh41.setVisible(false);
		if( markerh42!=undefined )
			markerh42.setVisible(false);
		if( markerl41!=undefined )
			markerl41.setVisible(false);
		if( markerl42!=undefined )
			markerl42.setVisible(false);
		if( markerl411!=undefined )
			markerl411.setVisible(false);
		if( markerl421!=undefined )
			markerl421.setVisible(false);
		if( markersgml41!=undefined )
			markersgml41.setvisible(false);
		if( markersgml42!=undefined )
			markersgml42.setvisible(false);
		markerstart.setvisible(false);
		markerfin.setvisible(false);
	}else{
		document.getElementById("hide4").value = 0;
		document.getElementById("hidea4").innerHTML = "Hide markers";
		if( markerc41!=undefined )
			markerc41.setVisible(true);
		if( markerc42!=undefined )
			markerc42.setVisible(true);
		if( markerv42!=undefined )
			markerv42.setVisible(true);
		if( markerv42!=undefined )
			markerv42.setVisible(true);
		if( markerh41!=undefined )
			markerh41.setVisible(true);
		if( markerh42!=undefined )
			markerh42.setVisible(true);
		if( markerl41!=undefined )
			markerl41.setVisible(true);
		if( markerl42!=undefined )
			markerl42.setVisible(true);
		if( markerl411!=undefined )
			markerl411.setVisible(true);
		if( markerl421!=undefined )
			markerl421.setVisible(true);
		if( markersgml41!=undefined )
			markersgml41.setvisible(true);
		if( markersgml42!=undefined )
			markersgml42.setvisible(true);
		markerstart.setvisible(true);
		markerfin.setvisible(true);
	}
}

google.maps.event.addDomListener(window, 'load', initialize4);