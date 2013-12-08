var clicks1 = 0;
var map;
var circles1 = [];
var lines1 = [];
var lines12 = [];
var line1 = [];
var line11 = [];
var sgmline1 = [];
var distancesCircle1 = [];
var distancesVer1 = [];
var distancesHor1 = [];
var markerc11;
var markerc12;
var markerv11;
var markerv12;
var markerh11;
var markerh12;
var markerl11;
var markerl12;
var markerl111;
var markerl121;
var markersgml11;
var markersgml12;

var iconline1 = new google.maps.MarkerImage('markers/tool1/line.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconline11 = new google.maps.MarkerImage('markers/tool1/line1.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconver1 = new google.maps.MarkerImage('markers/tool1/ver.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconhor1 = new google.maps.MarkerImage('markers/tool1/hor.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);
var iconcir1 = new google.maps.MarkerImage('markers/tool1/cir.png',
	null,
	null,
	new google.maps.Point(8, 26),
	new google.maps.Size(16, 26)
);

function initialize1() {
	var verCol1 = "#c11196";
	var horCol1 = "#f0ff00";
	var cirCol1 = "#1143c1";
	var lineCol1 = "#ff0000";
	var lineCol11 = "#ff0000";
	document.getElementById('ver1').style.color = verCol1;
	document.getElementById('hor1').style.color = horCol1;
	document.getElementById('cir1').style.color = cirCol1;
	document.getElementById('line1').style.color = lineCol1;
	document.getElementById('line11').style.color = lineCol1;

	getdistancesCircle1();
	getdistancesVer1();
	getdistancesHor1();
	$('#fibCircle1').keyup(function (event) {
		getdistancesCircle1();
	});
	$('#fibVer1').keyup(function (event) {
		getdistancesVer1();
	});
	$('#fibHor1').keyup(function (event) {
		getdistancesHor1();
	});
	$(".marker1Tip1").hide();
	$(".marker1Tip2").hide();
	$(".marker1Drag").hide();
	$(".select1").show();

}

function selectTool1(id) {

	$(".marker1Tip1").show();
	google.maps.event.clearListeners(map, 'click');
	var coordinates1 = [];
	switch(id) {
	case 1:
		clearTool1(circles1, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distCircle1').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 2:
		clearTool1(lines1, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distVer1').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 3:
		clearTool1(lines12, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distHor1').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 5:
		clearTool1(line1, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distLine1').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 6:
		clearTool1(sgmline1, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distsgmLine1').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 7:
		clearTool1(line11, 0);
		$(".marker1Tip1").show();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").hide();
		document.getElementById('distLine11').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		break;
	case 4:
		clearTool1(circles1, 0);
		clearTool1(lines1, 0);
		clearTool1(lines12, 0);
		clearTool1(line1, 0);
		clearTool1(line11, 0);
		document.getElementById('distCircle1').value = "";
		document.getElementById('distVer1').value = "";
		document.getElementById('distHor1').value = "";
		document.getElementById('distLine1').value = "";
		document.getElementById('distLine11').value = "";
		if(clicks1 == 1)
			clicks1 = 0;
		$(".marker1Tip1").hide();
		$(".marker1Tip2").hide();
		$(".marker1Drag").hide();
		$(".select1").show();
		return;
	}

	var listen1 = google.maps.event.addListener(map, 'click', function (event) {
		coordinates1.push(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
		clicks1++;

		if(clicks1 == 2) {
			google.maps.event.removeListener(listen1);
			$(".marker1Tip1").hide();
			$(".marker1Tip2").hide();
			$(".select1").hide();
			$(".marker1Drag").show();
			clicks1 = 0;
			switch(id) {
			case 1: //call circles1
				document.getElementById('distCircle1').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 0);
				fib_circles1(coordinates1);
				break;
			case 2: //call vertical lines1
				document.getElementById('distVer1').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 1);
				fib_lines1(coordinates1);
				break;
			case 3: //call horizontal lines1
				document.getElementById('distHor1').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 2);
				fib_lines12(coordinates1);
				break;
			case 5: //call line
				document.getElementById('distLine1').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 3);
				lin1(coordinates1);
				break;
			case 7: //call line 2
				document.getElementById('distLine11').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 3);
				lin11(coordinates1);
				break;
			case 6: //call line
				document.getElementById('distsgmLine1').value = distance(coordinates1[0].lat(), coordinates1[0].lng(), coordinates1[1].lat(), coordinates1[1].lng(), 3);
				sgmlin1(coordinates1);
				break;
			}
		}
		if(clicks1 == 1) {
			$(".marker1Tip1").hide();
			$(".marker1Tip2").show();
			$(".marker1Drag").hide();
			$(".select1").hide();
		}
	});
	
}

function fib_circles1(coordinates1) {
	// Get the center point
	var x1 = coordinates1[0].lat();
	var y1 = coordinates1[0].lng();

	//add the center marker
	markerc11 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Center point",
		icon: iconcir1,
		draggable: true
	});
	circles1.push(markerc11);

	//radius marker
	markerc12 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "First radius",
		icon: iconcir1,
		draggable: true
	});
	circles1.push(markerc12);
	
	google.maps.event.addListener(markerc11, 'dragend', function () {
		coordinates1[0] = markerc11.getPosition();
		clearTool1(circles1, 1);
		fib_circles1(coordinates1);
	});

	google.maps.event.addListener(markerc12, 'dragend', function () {
		coordinates1[1] = markerc12.getPosition();
		clearTool1(circles1, 1);
		fib_circles1(coordinates1);
	});
	google.maps.event.addListener(markerc11, 'drag', function () {
		document.getElementById('distCircle1').value = distance(markerc11.getPosition().lat(), markerc11.getPosition().lng(), markerc12.getPosition().lat(), markerc12.getPosition().lng(), 0);
	});
	google.maps.event.addListener(markerc12, 'drag', function () {
		document.getElementById('distCircle1').value = distance(markerc11.getPosition().lat(), markerc11.getPosition().lng(), markerc12.getPosition().lat(), markerc12.getPosition().lng(), 0);
	});
	//calculate radius    
	var d = Math.round(google.maps.geometry.spherical.computeDistanceBetween(coordinates1[1], coordinates1[0]));
	var i = 0;
	var dis = -1;
	while((dis = custom_distanceCircle1(d, i++)) < 10000e3) {
		circles1.push(drawCircle1(x1, y1, dis));
		if(dis == -1)
			break;
	}
}

function drawCircle1(x, y, radius) {
	var options = {
		strokeColor: "#1143c1",
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillOpacity: 0.0,
		map: map,
		center: new google.maps.LatLng(x, y),
		radius: radius
	};
	return new google.maps.Circle(options);
}

function fib_lines1(coordinates1) {
	var y1 = coordinates1[0].lng();
	var y2 = coordinates1[1].lng();

	markerv11 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Click Point",
		icon: iconver1,
		draggable: true
	});
	lines1.push(markerv11);

	markerv12 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "Second Point",
		icon: iconver1,
		draggable: true
	});
	lines1.push(markerv12);

	google.maps.event.addListener(markerv11, 'dragend', function () {
		coordinates1[0] = markerv11.getPosition();
		clearTool1(lines1, 1);
		fib_lines1(coordinates1);
	});
	google.maps.event.addListener(markerv12, 'dragend', function () {
		coordinates1[1] = markerv12.getPosition();
		clearTool1(lines1, 1);
		fib_lines1(coordinates1);
	});

	google.maps.event.addListener(markerv11, 'drag', function () {
		document.getElementById('distVer1').value = distance(markerv11.getPosition().lat(), markerv11.getPosition().lng(), markerv12.getPosition().lat(), markerv12.getPosition().lng(), 1);
	});
	google.maps.event.addListener(markerv12, 'drag', function () {
		document.getElementById('distVer1').value = distance(markerv11.getPosition().lat(), markerv11.getPosition().lng(), markerv12.getPosition().lat(), markerv12.getPosition().lng(), 1);
	});
	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distanceVer1(c, i++)) != -1) {
		lines1.push(drawlines1(y1 + dis));
		lines1.push(drawlines1(y1 - dis));
	}
}

function drawlines1(y1) {
	var lines1coordinates1 = [
		new google.maps.LatLng(33.815666, y1),
		new google.maps.LatLng(41.828642, y1)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#c11196",
		strokeOpacity: 0.8,
		//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function fib_lines12(coordinates1) {
	var y1 = coordinates1[0].lat();
	var y2 = coordinates1[1].lat();
	markerh11 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Click Point",
		icon: iconhor1,
		draggable: true
	});
	lines12.push(markerh11);

	markerh12 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "Second Point",
		icon: iconhor1,
		draggable: true
	});
	lines12.push(markerh12);

	google.maps.event.addListener(markerh11, 'dragend', function () {
		coordinates1[0] = markerh11.getPosition();
		clearTool1(lines12, 1);
		fib_lines12(coordinates1);
	});
	google.maps.event.addListener(markerh12, 'dragend', function () {
		coordinates1[1] = markerh12.getPosition();
		clearTool1(lines12, 1);
		fib_lines12(coordinates1);
	});
	google.maps.event.addListener(markerh11, 'drag', function () {
		document.getElementById('distHor1').value = distance(markerh11.getPosition().lat(), markerh11.getPosition().lng(), markerh12.getPosition().lat(), markerh12.getPosition().lng(), 2);
	});
	google.maps.event.addListener(markerh12, 'drag', function () {
		document.getElementById('distHor1').value = distance(markerh11.getPosition().lat(), markerh11.getPosition().lng(), markerh12.getPosition().lat(), markerh12.getPosition().lng(), 2);
	});

	var c = y2 - y1;
	var i = 0;
	while((dis = custom_distanceHor1(c, i++)) != -1) {
		lines12.push(drawlines12(y1 + dis));
		lines12.push(drawlines12(y1 - dis));
	}
}

function drawlines12(y1) {
	var lines1coordinates1 = [
		new google.maps.LatLng(y1, 34.495),
		new google.maps.LatLng(y1, 18.30)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#f0ff00",
		strokeOpacity: 0.8,
	//		geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function lin1(coordinates1) {
	var x1 = coordinates1[0].lat();
	var y1 = coordinates1[0].lng();
	var x2 = coordinates1[1].lat();
	var y2 = coordinates1[1].lng();

	markerl11 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Click Point",
		icon: iconline1,
		draggable: true
	});
	line1.push(markerl11);

	markerl12 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "Second Point",
		icon: iconline1,
		draggable: true
	});
	line1.push(markerl12);

	google.maps.event.addListener(markerl11, 'dragend', function () {
		coordinates1[0] = markerl11.getPosition();
		clearTool1(line1, 1);
		lin1(coordinates1);
	});
	google.maps.event.addListener(markerl12, 'dragend', function () {
		coordinates1[1] = markerl12.getPosition();
		clearTool1(line1, 1);
		lin1(coordinates1);
	});

	google.maps.event.addListener(markerl11, 'drag', function () {
		document.getElementById('distLine1').value = distance(markerl11.getPosition().lat(), markerl11.getPosition().lng(), markerl12.getPosition().lat(), markerl12.getPosition().lng(), 3);
	});
	google.maps.event.addListener(markerl12, 'drag', function () {
		document.getElementById('distLine1').value = distance(markerl11.getPosition().lat(), markerl11.getPosition().lng(), markerl12.getPosition().lat(), markerl12.getPosition().lng(), 3);
	});

	line1.push(drawline1(x1, y1, x2, y2));
}

function drawline1(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#ff0000",
		strokeOpacity: 0.8,
		//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function lin11(coordinates1) {
	var x1 = coordinates1[0].lat();
	var y1 = coordinates1[0].lng();
	var x2 = coordinates1[1].lat();
	var y2 = coordinates1[1].lng();

	markerl111 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Click Point",
		icon: iconline11,
		draggable: true
	});
	line11.push(markerl111);

	markerl121 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "Second Point",
		icon: iconline11,
		draggable: true
	});
	line11.push(markerl121);

	google.maps.event.addListener(markerl111, 'dragend', function () {
		coordinates1[0] = markerl111.getPosition();
		clearTool1(line11, 1);
		lin11(coordinates1);
	});
	google.maps.event.addListener(markerl121, 'dragend', function () {
		coordinates1[1] = markerl121.getPosition();
		clearTool1(line11, 1);
		lin11(coordinates1);
	});

	google.maps.event.addListener(markerl111, 'drag', function () {
		document.getElementById('distLine11').value = distance(markerl111.getPosition().lat(), markerl111.getPosition().lng(), markerl121.getPosition().lat(), markerl121.getPosition().lng(), 3);
	});
	google.maps.event.addListener(markerl121, 'drag', function () {
		document.getElementById('distLine11').value = distance(markerl111.getPosition().lat(), markerl111.getPosition().lng(), markerl121.getPosition().lat(), markerl121.getPosition().lng(), 3);
	});

	line11.push(drawline11(x1, y1, x2, y2));
}

function drawline11(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(x1, y1),
		new google.maps.LatLng(x2, y2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#ff0000",
		strokeOpacity: 0.8,
		//	geodesic: true,
		strokeWeight: 1
	});

	linePath.setMap(map);
	return linePath;
}

function sgmlin1(coordinates1) {
	var y1 = coordinates1[0].lat();
	var x1 = coordinates1[0].lng();
	var y2 = coordinates1[1].lat();
	var x2 = coordinates1[1].lng();

	markersgml11 = new google.maps.Marker({
		position: coordinates1[0],
		map: map,
		title: "Click Point",
		draggable: true
	});
	sgmline1.push(markersgml11);

	markersgml12 = new google.maps.Marker({
		position: coordinates1[1],
		map: map,
		title: "Second Point",
		draggable: true
	});
	sgmline1.push(markersgml12);

	google.maps.event.addListener(markersgml11, 'dragend', function () {
		coordinates1[0] = markersgml11.getPosition();
		clearTool1(sgmline1, 1);
		sgmlin1(coordinates1);
	});
	google.maps.event.addListener(markersgml12, 'dragend', function () {
		coordinates1[1] = markersgml12.getPosition();
		clearTool1(sgmline1, 1);
		sgmlin1(coordinates1);
	});

	google.maps.event.addListener(markersgml11, 'drag', function () {
		//	document.getElementById('fibVer1').value = markersgml11.getPosition();
		document.getElementById('distLine1').value = distance(markersgml11.getPosition().lat(), markersgml11.getPosition().lng(), markersgml12.getPosition().lat(), markersgml12.getPosition().lng(), 3);
	});
	google.maps.event.addListener(markersgml12, 'drag', function () {
		//	document.getElementById('fibVer2').value = markersgml12.getPosition();
		document.getElementById('distLine1').value = distance(markersgml11.getPosition().lat(), markersgml11.getPosition().lng(), markersgml12.getPosition().lat(), markersgml12.getPosition().lng(), 3);
	});

	if((x2 - x1) != 0) {
		if(x1 > x2) {
			var x1new = x1 + 6;
			var x2new = x2 - 6;
		} else {
			var x1new = x1 - 6;
			var x2new = x2 + 6;
		}
		var l = (y2 - y1) / (x2 - x1);
		var y1new = l * x1new - l * x1 + y1;
		var y2new = l * x2new - l * x2 + y2;
	} else {
		var x1new = x1;
		var x2new = x2;
		if(y1 < y2) {
			var y1new = y1 - 5;
			var y2new = y2 + 5;
		} else {
			var y1new = y1 + 5;
			var y2new = y2 - 5;
		}
	}
	sgmline1.push(drawsgmline1(x1new, y1new, x2new, y2new));
}

function drawsgmline1(x1, y1, x2, y2) {
	var lines1coordinates1 = [
		new google.maps.LatLng(y1, x1),
		new google.maps.LatLng(y2, x2)
	];

	var linePath = new google.maps.Polyline({
		path: lines1coordinates1,
		strokeColor: "#ff0000",
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
function custom_distanceCircle1(initial, num) {
	if(distancesCircle1[num] == undefined)
		return -1;
	return initial * distancesCircle1[num];
}

function custom_distanceVer1(initial, num) {
	if(distancesVer1[num] == undefined)
		return -1;
	return initial * distancesVer1[num];
}

function custom_distanceHor1(initial, num) {
	if(distancesHor1[num] == undefined)
		return -1;
	return initial * distancesHor1[num];
}

/* 
  toggle all lines1 from maps
*/
function clearTool1(tool, val) {

	for(var i = 0; i < tool.length; i++) {
		tool[i].setMap(null);
		if(val == 0) {
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

function getdistancesCircle1() {
	distancesCircle1 = ($("#fibCircle1").val()).split(",");
}

function getdistancesVer1() {
	distancesVer1 = ($("#fibVer1").val()).split(",");
}

function getdistancesHor1() {
	distancesHor1 = ($("#fibHor1").val()).split(",");
}

function hidemarkers1() {
	if(document.getElementById("hide1").value == 0) {
		document.getElementById("hide1").value = 1;
		document.getElementById("hidea1").innerHTML = "Show markers";
		if(markerc11 != undefined)
			markerc11.setVisible(false);
		if(markerc12 != undefined)
			markerc12.setVisible(false);
		if(markerv11 != undefined)
			markerv11.setVisible(false);
		if(markerv12 != undefined)
			markerv12.setVisible(false);
		if(markerh11 != undefined)
			markerh11.setVisible(false);
		if(markerh12 != undefined)
			markerh12.setVisible(false);
		if(markerl11 != undefined)
			markerl11.setVisible(false);
		if(markerl12 != undefined)
			markerl12.setVisible(false);
		if(markerl111 != undefined)
			markerl111.setVisible(false);
		if(markerl121 != undefined)
			markerl121.setVisible(false);
		if(markersgml11 != undefined)
			markersgml11.setvisible(false);
		if(markersgml12 != undefined)
			markersgml12.setvisible(false);
		markerstart.setvisible(false);
		markerfin.setvisible(false);
	} else {
		document.getElementById("hide1").value = 0;
		document.getElementById("hidea1").innerHTML = "Hide markers";
		if(markerc11 != undefined)
			markerc11.setVisible(true);
		if(markerc12 != undefined)
			markerc12.setVisible(true);
		if(markerv11 != undefined)
			markerv11.setVisible(true);
		if(markerv12 != undefined)
			markerv12.setVisible(true);
		if(markerh11 != undefined)
			markerh11.setVisible(true);
		if(markerh12 != undefined)
			markerh12.setVisible(true);
		if(markerl11 != undefined)
			markerl11.setVisible(true);
		if(markerl12 != undefined)
			markerl12.setVisible(true);
		if(markerl111 != undefined)
			markerl111.setVisible(true);
		if(markerl121 != undefined)
			markerl121.setVisible(true);
		if(markersgml11 != undefined)
			markersgml11.setvisible(true);
		if(markersgml12 != undefined)
			markersgml12.setvisible(true);
		markerstart.setvisible(true);
		markerfin.setvisible(true);
	}
}
google.maps.event.addDomListener(window, 'load', initialize1);