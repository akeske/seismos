// 0 - 15
var iconM0 = new google.maps.MarkerImage('images/blue.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var iconM1 = new google.maps.MarkerImage('images/blue.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM2 = new google.maps.MarkerImage('images/blue.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM3 = new google.maps.MarkerImage('images/starBlue.png',
	null,
	null,
	new google.maps.Point(9, 9),
	new google.maps.Size(18, 18)
);

// 15 - 30
var iconM4 = new google.maps.MarkerImage('images/green.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var iconM5 = new google.maps.MarkerImage('images/green.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM6 = new google.maps.MarkerImage('images/green.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM7 = new google.maps.MarkerImage('images/starGreen.png',
	null,
	null,
	new google.maps.Point(9, 9),
	new google.maps.Size(18, 18)
);

// 30 - 60
var iconM8 = new google.maps.MarkerImage('images/yellow.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var iconM9 = new google.maps.MarkerImage('images/yellow.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM10 = new google.maps.MarkerImage('images/yellow.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM11 = new google.maps.MarkerImage('images/starYellow.png',
	null,
	null,
	new google.maps.Point(9, 9),
	new google.maps.Size(18, 18)
);

// 60 - 100
var iconM12 = new google.maps.MarkerImage('images/orange.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var iconM13 = new google.maps.MarkerImage('images/orange.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM14 = new google.maps.MarkerImage('images/orange.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM15 = new google.maps.MarkerImage('images/starOrange.png',
	null,
	null,
	new google.maps.Point(9, 9),
	new google.maps.Size(18, 18)
);

// 100 -
var iconM16 = new google.maps.MarkerImage('images/blue.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var iconM17 = new google.maps.MarkerImage('images/red.png',
	null,
	null,
	new google.maps.Point(5, 5),
	new google.maps.Size(10, 10)
);
var iconM18 = new google.maps.MarkerImage('images/red.png',
	null,
	null,
	new google.maps.Point(7, 7),
	new google.maps.Size(14, 14)
);
var iconM19 = new google.maps.MarkerImage('images/starRed.png',
	null,
	null,
	new google.maps.Point(9, 9),
	new google.maps.Size(18, 18)
);

// - 3
var icon1 = new google.maps.MarkerImage('images/black.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
// 3 - 4
var icon2 = new google.maps.MarkerImage('images/blue.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
// 4 - 5
var icon3 = new google.maps.MarkerImage('images/green.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
// 5 - 6
var icon4 = new google.maps.MarkerImage('images/red.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
// 6 - 
var icon5 = new google.maps.MarkerImage('images/yellow.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var customIcons = [];
customIcons["1"] = icon1;
customIcons["2"] = icon2;
customIcons["3"] = icon3;
customIcons["4"] = icon4;
customIcons["5"] = icon5;
/*
var customIcons = [];
customIcons["0"] = iconM0;
customIcons["1"] = iconM1;
customIcons["2"] = iconM2;
customIcons["3"] = iconM3;
customIcons["4"] = iconM4;
customIcons["5"] = iconM5;
customIcons["6"] = iconM6;
customIcons["7"] = iconM7;
customIcons["8"] = iconM8;
customIcons["9"] = iconM9;
customIcons["10"] = iconM10;
customIcons["11"] = iconM11;
customIcons["12"] = iconM12;
customIcons["13"] = iconM13;
customIcons["14"] = iconM14;
customIcons["15"] = iconM15;
customIcons["16"] = iconM16;
customIcons["17"] = iconM17;
customIcons["18"] = iconM18;
customIcons["19"] = iconM19;
*/
var markerGroups1 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": [],
	"6": [],
	"7": []
};
var markerGroups2 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": [],
	"6": [],
	"7": []
};
var markerGroups3 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": [],
	"6": [],
	"7": []
};
var polyline = {
	"1": [],
	"2": [],
	"3": []
};
var polylinemarkers1 = [];
var polylinemarkers2 = [];
var polylinemarkers3 = [];

var markers1 = {
	"1": [],
	"2": [],
	"3": []
};
var lab = [];

var colorIndex_ = 0;
var COLORS = [
	["red", "#ff0000"],
	["orange", "#ff8800"],
	["green", "#008000"],
	["blue", "#000080"],
	["purple", "#800080"]
];

function getColor(named) {
	return COLORS[(colorIndex_++) % COLORS.length][named ? 0 : 1];
}

function getIcon(color) {
	var icon = new google.maps.MarkerImage('http://google.com/mapfiles/ms/micons/' + color + '.png',
		new google.maps.Size(32, 32),
		new google.maps.Point(0, 0)
	);
	return icon;
}

function check() {
	var Alat = parseFloat(document.getElementById('fromlat').value);
	var Blat = parseFloat(document.getElementById('tolat').value);
	var Alng = parseFloat(document.getElementById("fromlng").value);
	var Blng = parseFloat(document.getElementById("tolng").value);
	if(Alat > Blat) {
		document.getElementById('fromlat').value = Blat;
		document.getElementById('tolat').value = Alat;
	}
	if(Alng > Blng) {
		document.getElementById('fromlng').value = Blng;
		document.getElementById('tolng').value = Alng;
	}
	var Amagn = parseFloat(document.getElementById('frommagn').value);
	var Bmagn = parseFloat(document.getElementById('tomagn').value);
	if(Amagn > Bmagn) {
		document.getElementById('frommagn').value = Bmagn;
		document.getElementById('tomagn').value = Amagn;
	}
	var Adepth = parseFloat(document.getElementById("fromdpth").value);
	var Bdepth = parseFloat(document.getElementById("todpth").value);
	if(Adepth > Bdepth) {
		document.getElementById('fromdpth').value = Bdepth;
		document.getElementById('todpth').value = Adepth;
	}
}

function updateMarkerfrom(marker) {
	latlng = marker.getPosition();
	document.getElementById("fromlat").value = latlng.lat();
	document.getElementById("fromlng").value = latlng.lng();
}

function updateMarkerto(marker) {
	latlng = marker.getPosition();
	document.getElementById("tolat").value = latlng.lat();
	document.getElementById("tolng").value = latlng.lng();
}

var map;
var infowindow;

var markerstart;
var markerfin;
var markers = [];
var counter = 0;

function load() {
	var latlng = new google.maps.LatLng(37.8, 26.7);
	var settings = {
		zoom: 6,
		center: latlng,
		scrollwheel: false,
		scaleControl: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN]
		},
		draggable: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		navigationControl: false,

		//	navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};

	map = new google.maps.Map(document.getElementById("map"), settings);

	var imageBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(39.5, 35.5),
		new google.maps.LatLng(42.5, 39.5));

	//	var oldmap = new google.maps.GroundOverlay(
	//		"images/info.png",
	//		imageBounds);
	//	oldmap.setMap(map);

	var point2 = new google.maps.LatLng(33.98, 34.82);
	var point1 = new google.maps.LatLng(41.40, 18.8);
	var color = getColor(true);
	markerstart = new google.maps.Marker({
		position: point1,
		map: map,
		title: 'start',
		clickable: false,
		icon: getIcon(color),
		//	icon: startYellow,
		draggable: true
	});
	markerfin = new google.maps.Marker({
		position: point2,
		map: map,
		title: 'end',
		clickable: false,
		icon: getIcon(color),
		//	icon: startYellow,
		draggable: true
	});

	google.maps.event.addListener(markerstart, 'dragend', function () {
		updateMarkerfrom(markerstart);
	});
	google.maps.event.addListener(markerfin, 'dragend', function () {
		updateMarkerto(markerfin);
	});

	var list = google.maps.event.addListener(map, 'mousemove', function (event) {
		document.getElementById('coordslat').value = event.latLng.lat().toFixed(6);
		document.getElementById('coordslng').value = event.latLng.lng().toFixed(6);
	});

	var i;
	var j;
	var size;
	var l;

	downloadUrl("phpsqlajax_xmlD1.php", function (data) {
		var latchess = [];
		var lngchess = [];
		var line1 = [];
		var line2 = [];
		var lat;
		var lng;
		var polyline1 = {
			"1": []
		};
		var polyline2 = {
			"1": []
		};
		size = data.documentElement.getElementsByTagName("size");
		size = parseFloat(size[0].getAttribute("size"));

		lat = data.documentElement.getElementsByTagName("lat");
		for(i = 0; i < lat.length; i++) {
			latchess[i] = lat[i].getAttribute("lat");
		}
		lng = data.documentElement.getElementsByTagName("lng");
		for(i = 0; i < lng.length; i++) {
			lngchess[i] = lng[i].getAttribute("lng");
		}
		for(j = 0; j < lng.length + 1; j++) {
			for(var i = 0; i < 2; i++) {
				if(i == 0) {
					var latlng1 = new google.maps.LatLng(latchess[0], lngchess[j]);
					var latlng2 = new google.maps.LatLng(latchess[j], lngchess[0]);
				} else {
					latlng1 = new google.maps.LatLng(latchess[size], lngchess[j]);
					latlng2 = new google.maps.LatLng(latchess[j], lngchess[size]);
				}
				line1.push(latlng1);
				line2.push(latlng2);
			}
			polyline1 = new google.maps.Polyline({
				path: line1,
				strokeColor: '#CC0000',
				strokeOpacity: 0.5,
				//	geodesic: true,
				strokeWeight: 2
			});
			polyline2 = new google.maps.Polyline({
				path: line2,
				strokeColor: '#CC0000',
				strokeOpacity: 0.5,
				//	geodesic: true,
				strokeWeight: 2
			});
			polyline1.setMap(map);
			polyline2.setMap(map);
			line1 = [];
			line2 = [];
		}

	});

	downloadUrl("phpsqlajax_xmlD1.php", function (data) {
		size = data.documentElement.getElementsByTagName("size");
		l = 1;
		var k = 0;
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var markersXML = data.documentElement.getElementsByTagName("marker" + j);
			for(i = 0; i < markersXML.length; i++) {
				var id = markersXML[i].getAttribute("id");
				var type = markersXML[i].getAttribute("type");
				var typeSize = markersXML[i].getAttribute("typeSize");
				var date = markersXML[i].getAttribute("date");
				var megethos = markersXML[i].getAttribute("megethos");
				var vathos = markersXML[i].getAttribute("vathos");
				var lat = markersXML[i].getAttribute("lat");
				var lng = markersXML[i].getAttribute("lng");
				var latlng = new google.maps.LatLng(parseFloat(markersXML[i].getAttribute("lat")),
					parseFloat(markersXML[i].getAttribute("lng")));

				var marker = createMarker(id, latlng, megethos, vathos, type, typeSize, date, l, lat, lng);
				markers.push( marker );
				counter = markers.length;
				k++;
				
			}
		}
	});

}
var counter = 0;
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function markersShowHide() {
	if( document.getElementById("showmarkersHidden").value==0 ){
		document.getElementById("showmarkersHidden").value = 1;
		document.getElementById("showmarkers").innerHTML = "Show";
		counter = 0;
		setAllMap(null);
	}else{
		document.getElementById("showmarkersHidden").value = 0;
		document.getElementById("showmarkers").innerHTML = "Hide";
		 counter = markers.length;
		setAllMap(map);
	}
}
function nextMarker() {
	if( counter<markers.length ){
		markers[counter].setMap(map);
		counter++;
	}
	if( counter==markers.length){
		document.getElementById("showmarkersHidden").value = 0;
		document.getElementById("showmarkers").innerHTML = "Hide";
	}
}
function prevMarker() {
	if( counter>0 ){
		counter--;
		markers[counter].setMap(null);
	}
	if( counter==0 ){
		document.getElementById("showmarkersHidden").value = 1;
		document.getElementById("showmarkers").innerHTML = "Show";
	}
}
// Define the overlay, derived from google.maps.OverlayView
function Label(opt_options) {
	// Initialization
	this.setValues(opt_options);

	// Label specific
	var span = this.span_ = document.createElement('span');
	span.style.cssText = 'position: relative; left: -45%; top: -20px; ' +
		'white-space: nowrap; border: 1px solid blue; ' +
		'padding: 2px; background-color: white; z-index: 0; font-size:14px;';

	var div = this.div_ = document.createElement('div');
	div.appendChild(span);
	div.style.cssText = 'position: absolute; display: none';
}
Label.prototype = new google.maps.OverlayView;
// Implement onAdd
Label.prototype.onAdd = function () {
	var pane = this.getPanes().overlayLayer;
	pane.appendChild(this.div_);

	// Ensures the label is redrawn if the text or position is changed.
	var me = this;
	this.listeners_ = [
		google.maps.event.addListener(this, 'position_changed',
			function () {
				me.draw();
			}),
		google.maps.event.addListener(this, 'text_changed',
			function () {
				me.draw();
			})
	];
};
// Implement onRemove
Label.prototype.onRemove = function () {
	this.div_.parentNode.removeChild(this.div_);

	//    Label is removed from the map, stop updating its position/text.
	for(var i = 0, I = this.listeners_.length; i < I; ++i) {
		google.maps.event.removeListener(this.listeners_[i]);
	}
};

// Implement draw
Label.prototype.draw = function () {
	var projection = this.getProjection();
	var position = projection.fromLatLngToDivPixel(this.get('position'));

	var div = this.div_;
	div.style.left = position.x + 'px';
	div.style.top = position.y + 'px';
	div.style.display = 'block';

	this.span_.innerHTML = this.get('text').toString();
};

function createMarker(id, latlng, megethos, vathos, type, typeSize, date, l, lat, lng) {
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: id,
		clickable: true,
		icon: customIcons[typeSize]
	});
	var arr = date.split("-");
	var time = arr[2].split(":");
	var day = time[0].split(" ");

	var newDate = day[0]+"-"+arr[1]+"-"+arr[0]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+day[1]+":"+time[1]+":"+time[2];
	var html = "<table width='220'><font size='3'>"
	html += "<tr align='left'><td><b><b>Date:   &nbsp;&nbsp;" + newDate + "</b></td></tr>"
	html += "<tr align='left'><td><b><b>Magnitude:</b>  &nbsp; &nbsp; </b>" + megethos + " ML</td></tr>"
	html += "<tr align='left'><td><b><b>Latitude:</b> &nbsp;  &nbsp; </b>" + lat + " N</td></tr>"
	html += "<tr align='left'><td><b><b>Longitude:</b>  &nbsp;&nbsp;  </b>" + lng + " E</td></tr>"
	html += "<tr align='left'><td><b><b>Depth:</b> &nbsp;&nbsp;   </b>" + vathos + " km</td></tr>"
	html += "</font></table>"

	google.maps.event.addListener(marker, "click", function () {
		if(infowindow) {
			infowindow.close();
			infowindow = null;
		} else {
			infowindow = new google.maps.InfoWindow({
				content: html
			});
			infowindow.open(map, marker);
		}
	});

	google.maps.event.addListener(map, 'click', function () {
		infowindow.close();
	});

	
	var stuLabel = new Label();
	stuLabel.bindTo('position', marker, 'position');
	stuLabel.set('text', id+"  -  "+megethos+"R");

	lab.push(stuLabel);
	
	google.maps.event.addListener(marker, 'mouseover', function () {
		stuLabel.setMap(map);
	});
	google.maps.event.addListener(marker, 'mouseout', function () {
		stuLabel.setMap(null);
	});
	
	return marker;
}

function markerdisp1(type) {
	for(i = 0; i < markerGroups1[type].length; i++) {
		if(markerGroups1[type][i].isHidden()) {
			markerGroups1[type][i].show();
			markerGroups1[type][i].hidden = false;
		} else {
			markerGroups1[type][i].hide();
			markerGroups1[type][i].hidden = true;
		}
	}
}

function markerdisp2(type) {
	for(i = 0; i < markerGroups2[type].length; i++) {
		if(markerGroups2[type][i].isHidden()) {
			markerGroups2[type][i].show();
			markerGroups2[type][i].hidden = false;
		} else {
			markerGroups2[type][i].hide();
			markerGroups2[type][i].hidden = true;
		}
	}
}

function markerdisp3(type) {
	for(i = 0; i < markerGroups3[type].length; i++) {
		if(markerGroups3[type][i].isHidden()) {
			markerGroups3[type][i].show();
			markerGroups3[type][i].hidden = false;
		} else {
			markerGroups3[type][i].hide();
			markerGroups3[type][i].hidden = true;
		}
	}
}

function datedisp(type) {
	for(i = 0; i < markers1[type].length; i++) {
		if(markers1[type][i].isHidden()) {
			markers1[type][i].show();
			markers1[type][i].hidden = false;
		} else {
			markers1[type][i].hide();
			markers1[type][i].hidden = true;
		}
	}
}

function polylinedisp(pertype) {
	var pertyp = parseInt(pertype);
	if(pertype == 1) {
		for(j = 0; j < size * size; j++) {
			if(polylinemarkers1[j].isHidden()) {
				polylinemarkers1[j].show();
			} else {
				polylinemarkers1[j].hide();
			}
		}
	}
	if(pertype == 2) {
		for(j = 0; j < size * size; j++) {
			if(polylinemarkers2[j].isHidden()) {
				polylinemarkers2[j].show();
			} else {
				polylinemarkers2[j].hide();
			}
		}
	}
	if(pertype == 3) {
		for(j = 0; j < size * size; j++) {
			if(polylinemarkers3[j].isHidden()) {
				polylinemarkers3[j].show();
			} else {
				polylinemarkers3[j].hide();
			}
		}
	}
}

function dat1() {
	if(document.getElementById('fromdate1').value == "") {
		var month = "01";
		var day = "01";
		var year = "2013";
		var d = day + "/" + month + "/" + year;
		document.getElementById('fromdate1').value = d;
	}
}

function dat2() {
	if(document.getElementById('todate1').value == "") {
		var currentTime = new Date();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		if(month <= 9) {
			month = '0' + month;
		}
		if(day <= 9) {
			day = '0' + day;
		}
		var year = currentTime.getFullYear();
		var d = day + "/" + month + "/" + year;
		document.getElementById('todate1').value = d;
	}
}

function dat3() {
	if(document.getElementById('fromdate1').value != "") {
		var d = document.getElementById('fromdate1').value;
		var dArray = d.split('/');
		var year = parseFloat(dArray[0]) + 10;
		var month = dArray[1];
		var day = dArray[2];
		var df = year + "/" + month + "/" + day;
		document.getElementById('fromdate2').value = df;
	}
}

function dat4() {
	if(document.getElementById('todate1').value != "") {
		var d = document.getElementById('todate1').value;
		var dArray = d.split('/');
		var year = parseFloat(dArray[0]) + 10;
		var month = dArray[1];
		var day = dArray[2];
		var df = year + "/" + month + "/" + day;
		document.getElementById('todate2').value = df;
	}
}

function dat5() {
	if(document.getElementById('fromdate2').value != "") {
		var d = document.getElementById('fromdate2').value;
		var dArray = d.split('/');
		var year = parseFloat(dArray[0]) + 10;
		var month = dArray[1];
		var day = dArray[2];
		var df = year + "/" + month + "/" + day;
		document.getElementById('fromdate3').value = df;
	}
}

function dat6() {
	if(document.getElementById('todate2').value != "") {
		var d = document.getElementById('todate2').value;
		var dArray = d.split('/');
		var year = parseFloat(dArray[0]) + 10;
		var month = dArray[1];
		var day = dArray[2];
		var df = year + "/" + month + "/" + day;
		document.getElementById('todate3').value = df;
	}
}

function diastaseisfun() {
	var A = document.getElementById('diastaseis').value;
	document.getElementById('diastaseis2').value = A;
}

function latitude() {
	var a = parseFloat(document.getElementById('fromlat').value);
	var b = parseFloat(document.getElementById('tolat').value);
	if(a > b) {
		document.getElementById('fromlat').style.backgroundColor = "#FED1D1";
		document.getElementById('tolat').style.backgroundColor = "#FED1D1";
	}
	if(a < b) {
		document.getElementById('fromlat').style.backgroundColor = "#D1D6FE";
		document.getElementById('tolat').style.backgroundColor = "#D1D6FE";
	}
}

function longitude() {
	var a = parseFloat(document.getElementById('fromlng').value);
	var b = parseFloat(document.getElementById('tolng').value);
	if(a > b) {
		document.getElementById('fromlng').style.backgroundColor = "#FED1D1";
		document.getElementById('tolng').style.backgroundColor = "#FED1D1";
	} else {
		document.getElementById('fromlng').style.backgroundColor = "#D1D6FE";
		document.getElementById('tolng').style.backgroundColor = "#D1D6FE";
	}
}

function depth() {
	var a = parseFloat(document.getElementById('fromdpth').value);
	var b = parseFloat(document.getElementById('todpth').value);
	if(a > b) {
		document.getElementById('fromdpth').style.backgroundColor = "#FED1D1";
		document.getElementById('todpth').style.backgroundColor = "#FED1D1";
	} else {
		document.getElementById('fromdpth').style.backgroundColor = "#D1D6FE";
		document.getElementById('todpth').style.backgroundColor = "#D1D6FE";
	}
}

function magnitude() {
	var a = parseFloat(document.getElementById('frommagn').value);
	var b = parseFloat(document.getElementById('tomagn').value);
	if(a > b) {
		document.getElementById('frommagn').style.backgroundColor = "#FED1D1";
		document.getElementById('tomagn').style.backgroundColor = "#FED1D1";
	} else {
		document.getElementById('frommagn').style.backgroundColor = "#D1D6FE";
		document.getElementById('tomagn').style.backgroundColor = "#D1D6FE";
	}
}

function hidegridmarkers() {
	if(document.getElementById("gridmakerstext").value == 0) {
		document.getElementById("gridmakerstext").value = 1;
		document.getElementById("gridmarkesrlink").innerHTML = "Show grid markers";
		markerstart.setVisible(false);
		markerfin.setVisible(false);
	} else {
		document.getElementById("gridmakerstext").value = 0;
		document.getElementById("gridmarkesrlink").innerHTML = "Hide grid markers";
		markerstart.setVisible(true);
		markerfin.setVisible(true);
	}
}

function removeLabels() {
	if(document.getElementById("hidecounterstext").value == 1) {
		for(var i = 0; i < lab.length; i++) {
			lab[i].setMap(null);
		}
		document.getElementById("hidecounterstext").value = 0;
		document.getElementById("hidecounters").innerHTML = "Show counters";
	} else {
		for(var i = 0; i < lab.length; i++) {
			lab[i].setMap(map);
		}
		document.getElementById("hidecounterstext").value = 1;
		document.getElementById("hidecounters").innerHTML = "Hide counters";
	}
}