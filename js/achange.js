
// Define the overlay, derived from google.maps.OverlayView
function Label(opt_options) {
	// Initialization
	this.setValues(opt_options);

	// Label specific
	var span = this.span_ = document.createElement('span');
	span.style.cssText = 'position: relative; left: -50%; top: -25px; ' +
		'white-space: nowrap; border: 1px solid blue; ' +
		'padding: 1px; background-color: white; z-index: 0; font-size:14px;';

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



// Define the overlay, derived from google.maps.OverlayView
function LabelX(opt_options) {
	// Initialization
	this.setValues(opt_options);

	// Label specific
	var span = this.span_ = document.createElement('span');
	span.style.cssText = 'position: relative; left: -50%; top: -25px; ' +
		'white-space: nowrap; border: 1px solid blue; ' +
		'padding: 2px; background-color: white; z-index: 0; font-size:14px;';

	var div = this.div_ = document.createElement('div');
	div.appendChild(span);
	div.style.cssText = 'position: absolute; display: none';
}
LabelX.prototype = new google.maps.OverlayView;
// Implement onAdd
LabelX.prototype.onAdd = function () {
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
LabelX.prototype.onRemove = function () {
	this.div_.parentNode.removeChild(this.div_);

	//    Label is removed from the map, stop updating its position/text.
	for(var i = 0, I = this.listeners_.length; i < I; ++i) {
		google.maps.event.removeListener(this.listeners_[i]);
	}
};

// Implement draw
LabelX.prototype.draw = function () {
	var projection = this.getProjection();
	var position = projection.fromLatLngToDivPixel(this.get('position'));

	var div = this.div_;
	div.style.left = position.x + 'px';
	div.style.top = position.y + 'px';
	div.style.display = 'block';

	this.span_.innerHTML = this.get('text').toString();
};





// Define the overlay, derived from google.maps.OverlayView
function LabelY(opt_options) {
	// Initialization
	this.setValues(opt_options);

	// Label specific
	var span = this.span_ = document.createElement('span');
	span.style.cssText = 'position: relative; left: -110%; top: -10px; ' +
		'white-space: nowrap; border: 1px solid blue; ' +
		'padding: 2px; background-color: white; z-index: 0; font-size:14px;';

	var div = this.div_ = document.createElement('div');
	div.appendChild(span);
	div.style.cssText = 'position: absolute; display: none';
}
LabelY.prototype = new google.maps.OverlayView;
// Implement onAdd
LabelY.prototype.onAdd = function () {
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
LabelY.prototype.onRemove = function () {
	this.div_.parentNode.removeChild(this.div_);

	//    Label is removed from the map, stop updating its position/text.
	for(var i = 0, I = this.listeners_.length; i < I; ++i) {
		google.maps.event.removeListener(this.listeners_[i]);
	}
};
// Implement draw
LabelY.prototype.draw = function () {
	var projection = this.getProjection();
	var position = projection.fromLatLngToDivPixel(this.get('position'));

	var div = this.div_;
	div.style.left = position.x + 'px';
	div.style.top = position.y + 'px';
	div.style.display = 'block';

	this.span_.innerHTML = this.get('text').toString();
};


/*
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


*/


// - 3
var icon1 = new google.maps.MarkerImage('images/black.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var icon1Last = new google.maps.MarkerImage('images/redGif.gif',
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
var icon2Last = new google.maps.MarkerImage('images/redGif.gif',
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
var icon3Last = new google.maps.MarkerImage('images/greenGif.gif',
	null,
	null,
	new google.maps.Point(6, 6),
	new google.maps.Size(12, 12)
);
// 5 - 6
var icon4 = new google.maps.MarkerImage('images/red.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var icon4Last = new google.maps.MarkerImage('images/redGif.gif',
	null,
	null,
	new google.maps.Point(6, 6),
	new google.maps.Size(12, 12)
);
// 6 - 
var icon5 = new google.maps.MarkerImage('images/yellow.png',
	null,
	null,
	new google.maps.Point(3, 3),
	new google.maps.Size(6, 6)
);
var icon5Last = new google.maps.MarkerImage('images/yellowGif.gif',
	null,
	null,
	new google.maps.Point(6, 6),
	new google.maps.Size(12, 12)
);
// prediction
var icon6 = new google.maps.MarkerImage('images/pink.png',
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
customIcons["6"] = icon6;

customIcons["7"] = icon1Last;
customIcons["8"] = icon2Last;
customIcons["9"] = icon3Last;
customIcons["10"] = icon4Last;
customIcons["11"] = icon5Last;
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

/*
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
*/

function getIcon(color) {
	return new google.maps.MarkerImage('http:// google.com/mapfiles/ms/micons/' + color + '.png',
		new google.maps.Size(32, 32),
		new google.maps.Point(0, 0)
	);

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
	Alat = null;
	Blat = null;
	Alng = null;
	Blng = null;
	delete Alat;
	delete Blat;
	delete Alng;
	delete Blng;

}

function updateMarkerfrom(marker) {
	var latlng = marker.getPosition();
	document.getElementById("fromlat").value = latlng.lat();
	document.getElementById("fromlng").value = latlng.lng();
	Alat = latlng;
	delete latlng;
}

function updateMarkerto(marker) {
	var latlng = marker.getPosition();
	document.getElementById("tolat").value = latlng.lat();
	document.getElementById("tolng").value = latlng.lng();
	Alat = latlng;
	delete latlng;
}

var map;

var infowindow;
var counter = 0;

var markerstart;
var markerfin;
var markersPeriod1 = [];
var markersPeriod2 = [];
var markersPeriod3 = [];
var markerGroups1 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": []
};
var markerGroups2 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": []
};
var markerGroups3 = {
	"1": [],
	"2": [],
	"3": [],
	"4": [],
	"5": []
};
var markersPredictions = [];
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counterPredictions = 0;
var lab = [];


var coordinatesSpecialMarker;
function specialMarkers(){

	var specMarker;
	
	var listenSpecial = google.maps.event.addListener(map, 'click', function (event) {
		coordinatesSpecialMarker = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());		
	});
	var point1 = new google.maps.LatLng(44, 19);
	//	google.maps.event.removeListener(listenSpecial);
		specMarker = new google.maps.Marker({
			position: point1,
			map: map,
			title: 'scecialMarker',
			clickable: false,
			//	icon: startYellow,
			draggable: true
		});

		google.maps.event.addListener(specMarker, 'dragend', function () {
			
		});
}
google.maps.event.addDomListener(window, 'load', specialMarkers);
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
		mapTypeId: google.maps.MapTypeId.SATELLITE
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
//	var color = getColor(true);
	markerstart = new google.maps.Marker({
		position: point1,
		map: map,
		title: 'start',
		clickable: false,
		// icon: getIcon("red"),
		//	icon: startYellow,
		draggable: true
	});
	markerfin = new google.maps.Marker({
		position: point2,
		map: map,
		title: 'end',
		clickable: false,
		// icon: getIcon("orange"),
		//	icon: startYellow,
		draggable: true
	});

	google.maps.event.addListener(markerstart, 'dragend', function () {
		updateMarkerfrom(markerstart);
	});
	google.maps.event.addListener(markerfin, 'dragend', function () {
		updateMarkerto(markerfin);
	});

	google.maps.event.addListener(map, 'mousemove', function (event) {
		document.getElementById('coordslat').value = event.latLng.lat().toFixed(6);
		document.getElementById('coordslng').value = event.latLng.lng().toFixed(6);
	});

	var i;
	var j;
	var size;
	var cat;

	downloadUrl("phpsqlajax_xmlD1.php", function (data) {
		var latchess = [];
		var lngchess = [];
		var line1 = [];
		var line2 = [];
		var lat;
		var lng;
		var polyline1;
		var polyline2;
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
					if(j!=lng.length){	
						var markerY = new google.maps.Marker({
							position: latlng2,
							map: null,
							title: 'pointsgrid',
							clickable: false,
							icon: customIcons["1"],
							//	icon: startYellow,
							draggable: false
						});
						var gridlabelY = new LabelY();
						gridlabelY.bindTo('position', markerY, 'position');
						gridlabelY.set('text', latlng2.lat().toFixed(2));
						gridlabelY.setMap(map);
					}
				} else {
					latlng1 = new google.maps.LatLng(latchess[size], lngchess[j]);
					latlng2 = new google.maps.LatLng(latchess[j], lngchess[size]);
					// && j!=0
					if(j!=lng.length){	
						var markerX = new google.maps.Marker({
							position: latlng1,
							map: null,
							title: 'pointsgrid',
							clickable: false,
							icon: customIcons["1"],
							//	icon: startYellow,
							draggable: false
						});
						var gridlabelX = new LabelX();
						gridlabelX.bindTo('position', markerX, 'position');
						gridlabelX.set('text', latlng1.lng().toFixed(2));
						gridlabelX.setMap(map);
					}
				}
				line1.push(latlng1);
				line2.push(latlng2);
			}
			polyline1 = new google.maps.Polyline({
				path: line1,
				strokeColor: '#CC0000',
				strokeOpacity: 1,
				//	geodesic: true,
				strokeWeight: 2
			});
			polyline2 = new google.maps.Polyline({
				path: line2,
				strokeColor: '#CC0000',
				strokeOpacity: 1,
				//	geodesic: true,
				strokeWeight: 2
			});
			polyline1.setMap(map);
			polyline2.setMap(map);
			polyline1 = [];
			polyline2 = [];
			line1 = [];
			line2 = [];

			
		}
		gridlabelX = null;
	});

	function addCommas(n){
		var rx=  /(\d+)(\d{3})/;
		return String(n).replace(/^\d+/, function(w){
			while(rx.test(w)){
				w= w.replace(rx, '$1.$2');
			}
			return w;
		});
	}
	downloadUrl("phpsqlajax_xmlD1.php", function (data) {
		size = data.documentElement.getElementsByTagName("size");
		cat = 1;
		var k = 0;
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var energy1 = 0;

			var markersXML = data.documentElement.getElementsByTagName("marker" + j);
			var qntMarkers = markersXML.length-1;
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

				var marker = createMarker(id, latlng, megethos, vathos, type, typeSize, date, cat, lat, lng, qntMarkers);
				markersPeriod1.push( marker );
				counter1 = markersPeriod1.length;

				// orizei tin metavliti counter me to plithos twn markers
				variable();

				if( i==qntMarkers ){
					document.getElementById('coordslatlast').value = parseFloat(lat).toFixed(2);
					document.getElementById('coordslnglast').value = parseFloat(lng).toFixed(2);
				}
				var meg = parseFloat(megethos);
				var logenergy1 = 1.5*meg+4.7;
				var ener1 = Math.pow(10, logenergy1);
				var ener = Math.pow(ener1, 2/3);
				energy1 += ener;
				var energyRound1 = Math.round( energy1 );
				var energyRoundComma1 = addCommas(energyRound1);
				k++;
				document.getElementById('energy1'+j).innerHTML = energyRoundComma1+" J";

			}
		}
	});
/*
	
Magnitude	   Released Energy (to the nearest integer)
1	   794,328 J
1.5	   4,466,836 J
2	   25,118,864 J
2.5	   141,253,754 J
3	   794,328,235 J
3.5	   4,466,835,922 J
4	   25,118,864,315 J
4.5	   141,253,754,462 J
5	   794,328,234,724 J
5.5	   4,466,835,921,510 J
6	   25,118,864,315,096 J
6.5	   141,253,754,462,275 J
7	   794,328,234,724,282 J
7.5	   4,466,835,921,509,631 J
8	   25,118,864,315,095,801 J
8.5	   141,253,754,62,275,430 J
9	   794,328,234,724,281,502 J

*/

	downloadUrl("phpsqlajax_xmlD2.php", function (data) {
		size = data.documentElement.getElementsByTagName("size");
		cat = 2;
		var k = 0;
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var energy2 = 0;
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

				var marker = createMarker(id, latlng, megethos, vathos, type, typeSize, date, cat, lat, lng);
				markersPeriod2.push( marker );
				counter2 = markersPeriod2.length;

				var meg = parseFloat(megethos);
				var logenergy2 = 1.5*meg+4.7;
				var ener2 = Math.pow(10, logenergy2);
				var ener = Math.pow(ener2, 2/3);
				energy2 += ener;
				var energyRound2 = Math.round( energy2 );
				var energyRoundComma2 = addCommas(energyRound2);
				k++;
				document.getElementById('energy2'+j).innerHTML = energyRoundComma2+" J";
			}
		}
	});
	
	downloadUrl("phpsqlajax_xmlD3.php", function (data) {
		size = data.documentElement.getElementsByTagName("size");
		cat = 3;
		var k = 0;
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var energy3 = 0;
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

				var marker = createMarker(id, latlng, megethos, vathos, type, typeSize, date, cat, lat, lng);
				markersPeriod3.push( marker );
				counter3 = markersPeriod3.length;
				
				var meg = parseFloat(megethos);
				var logenergy3 = 1.5*meg+4.7;
				var ener3 = Math.pow(10, logenergy3);
				var ener = Math.pow(ener3, 2/3);
				energy3 += ener;
				var energyRound3 = Math.round( energy3 );
				var energyRoundComma3 = addCommas(energyRound3);
				k++;
				document.getElementById('energy3'+j).innerHTML = energyRoundComma3+" J";
			}
		}
	});

	downloadUrl("csvxml.php", function (data) {
		var max=-9999;
		var min=9999;
		var markersXML = data.documentElement.getElementsByTagName("marker");
		for(i = 0; i < markersXML.length; i++) {
			var id = markersXML[i].getAttribute("id");
			var num = markersXML[i].getAttribute("num");
			var lat = markersXML[i].getAttribute("lat");
			var lng = markersXML[i].getAttribute("lng");
			var latlng = new google.maps.LatLng(parseFloat(markersXML[i].getAttribute("lat")),
					parseFloat(markersXML[i].getAttribute("lng")));

			var fromPred = parseInt( document.getElementById('fromPred').value );
			var toPred = parseInt( document.getElementById('toPred').value );

			if( num>=fromPred && num<=toPred){
				var marker = createMarkerPred(id, latlng, num);
				markersPredictions.push( marker );
			}
			num = parseInt( num );
			if( num>max ){
				max = num;
			}
			if( num<min ){
				min = num;
			}
		}
		counterPredictions = markersPredictions.length;
		document.getElementById("predInfo").innerHTML = min+"&nbsp;->&nbsp;"+max+"&nbsp;&nbsp;";
	//	document.getElementById("fromPred").value = min;
	//	document.getElementById("toPred").value = max;

	});

	downloadUrl("phpsqlajax_xmlD1.php", function (data) {
		var max=-999;
		var min=999;
		size = data.documentElement.getElementsByTagName("size");
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var markersXML = data.documentElement.getElementsByTagName("marker" + j);
			var max = 0;
			var min = 10;
			var megethos=new Array();
			for(i = 0; i < markersXML.length; i++) {
				megethos[i] = parseFloat( markersXML[i].getAttribute("megethos") );
				if(megethos[i]>max){
					max = megethos[i];
				}
				if(megethos[i]<min){
					min = megethos[i];
				}
			}
			var diafora = max-min;
			var DM = 0.2;
			var totalSteps = Math.ceil( diafora/DM );
			var sumParanomastis = 0;
			for(j2=1; j2<=totalSteps; j2++){
				var tempMax = min + j2*DM;
				var counterMagn = 0;
				for(i=0; i<megethos.length; i++){
					if(megethos[i]>=min && megethos[i]<=tempMax){
						counterMagn++;
					}
				}
				sumParanomastis += j2*counterMagn;
			}

			var logarithmos = 1 + megethos.length/sumParanomastis;
			var logbase10 = Math.log(logarithmos)/Math.log(10);
			var b1 = Math.round( logbase10/DM *10000 ) / 10000;
			document.getElementById('b1'+j).innerHTML = b1;
		}
	});

	downloadUrl("phpsqlajax_xmlD2.php", function (data) {
		var max=-999;
		var min=999;
		size = data.documentElement.getElementsByTagName("size");
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var markersXML = data.documentElement.getElementsByTagName("marker" + j);
			var max = 0;
			var min = 10;
			var megethos=new Array();
			for(i = 0; i < markersXML.length; i++) {
				megethos[i] = parseFloat( markersXML[i].getAttribute("megethos") );
				if(megethos[i]>max){
					max = megethos[i];
				}
				if(megethos[i]<min){
					min = megethos[i];
				}
			}
			var diafora = max-min;
			var DM = 0.2;
			var totalSteps = Math.ceil( diafora/DM );
			var sumParanomastis = 0;
			for(j2=1; j2<=totalSteps; j2++){
				var tempMax = min + j2*DM;
				var counterMagn = 0;
				for(i=0; i<megethos.length; i++){
					if(megethos[i]>=min && megethos[i]<=tempMax){
						counterMagn++;
					}
				}
				sumParanomastis += j2*counterMagn;
			}
			var logarithmos = 1 + megethos.length/sumParanomastis;
			var logbase10 = Math.log(logarithmos)/Math.log(10);
			var b2 = Math.round( logbase10/DM *10000 ) / 10000;
			document.getElementById('b2'+j).innerHTML = b2;
		}
	});

	downloadUrl("phpsqlajax_xmlD3.php", function (data) {
		size = data.documentElement.getElementsByTagName("size");
		size = parseFloat(size[0].getAttribute("size"));

		for(j = 0; j < size * size; j++) {
			var markersXML = data.documentElement.getElementsByTagName("marker" + j);
			var max = 0;
			var min = 10;
			var megethos=new Array();
			for(i = 0; i < markersXML.length; i++) {
				megethos[i] = parseFloat( markersXML[i].getAttribute("megethos") );
				if(megethos[i]>max){
					max = megethos[i];
				}
				if(megethos[i]<min){
					min = megethos[i];
				}
			}
			var diafora = max-min;
			var DM = 0.2;
			var totalSteps = Math.ceil( diafora/DM );
			var sumParanomastis = 0;
			for(j2=1; j2<=totalSteps; j2++){
				var tempMax = min + j2*DM;
				var counterMagn = 0;
				for(i=0; i<megethos.length; i++){
					if(megethos[i]>=min && megethos[i]<=tempMax){
						counterMagn++;
					}
				}
				sumParanomastis += j2*counterMagn;
			}
			var logarithmos = 1 + megethos.length/sumParanomastis;
			var logbase10 = Math.log(logarithmos)/Math.log(10);
			var b3 = Math.round( logbase10/DM *10000 ) / 10000;
			document.getElementById('b3'+j).innerHTML = b3;
		}
	});

}

function variable(){
	//alert(markersPeriod1.length);
	counter = markersPeriod1.length;
}
function setAllMap(map) {
	var tempType = 0;
	for (var i = 0; i < markersPeriod1.length; i++) {
		var max = markersPeriod1.length-1;
	  	if( i==max ){
			tempType = parseInt( markersPeriod1[i].getTitle() );
			tempType += 6;
			markersPeriod1[i].setIcon( customIcons[tempType] );
			markersPeriod1[i].setMap(map);
		}else{
			tempType = parseInt( markersPeriod1[i].getTitle() );
			markersPeriod1[i].setIcon( customIcons[tempType] );
			markersPeriod1[i].setMap(map);
		}
	}
}
function markersShowHide() {
	if( document.getElementById("showmarkersHidden").value==0 ){
		document.getElementById("showmarkersHidden").value = 1;
		document.getElementById("showmarkers").innerHTML = "Show";
		counter = 0;
		document.getElementById('coordslatlast').value = "";
		document.getElementById('coordslnglast').value = "";
		setAllMap(null);
	}else{
		document.getElementById("showmarkersHidden").value = 0;
		document.getElementById("showmarkers").innerHTML = "Hide";
		counter = markersPeriod1.length;
		document.getElementById('coordslatlast').value = markersPeriod1[counter-1].getPosition().lat().toFixed(2);
		document.getElementById('coordslnglast').value = markersPeriod1[counter-1].getPosition().lng().toFixed(2);
		setAllMap(map);
	}
}
function nextMarker() {
	if( counter<markersPeriod1.length ){
		var tempType = 0;
		if( counter==0 ){
			tempType = parseInt( markersPeriod1[counter].getTitle() );
			tempType = tempType + 6;
			markersPeriod1[counter].setIcon( customIcons[tempType] );
			markersPeriod1[counter].setMap(map);
			document.getElementById('coordslatlast').value = markersPeriod1[counter].getPosition().lat().toFixed(2);
			document.getElementById('coordslnglast').value = markersPeriod1[counter].getPosition().lng().toFixed(2);
			counter++;
		}else{
			counter--;
			tempType = parseInt( markersPeriod1[counter].getTitle() );
			markersPeriod1[counter].setIcon( customIcons[tempType] );
			markersPeriod1[counter].setMap(map);
			counter++;
			tempType = parseInt( markersPeriod1[counter].getTitle() );
			tempType = tempType + 6;
			markersPeriod1[counter].setIcon( customIcons[tempType] );
			markersPeriod1[counter].setMap(map);
			document.getElementById('coordslatlast').value = markersPeriod1[counter].getPosition().lat().toFixed(2);
			document.getElementById('coordslnglast').value = markersPeriod1[counter].getPosition().lng().toFixed(2);
			counter++;
		}
	}
	if( counter==markersPeriod1.length ){
		document.getElementById("showmarkersHidden").value = 0;
		document.getElementById("showmarkers").innerHTML = "Hide";
	}
}
function prevMarker() {
	var tempType = 0;
	// eksafanizw to teleutaio
	// kanw to neo teleutaio na anavosvinei
	if( counter>1 ){
		counter--;
		markersPeriod1[counter].setMap(null);
		counter--;
		markersPeriod1[counter].setMap(null);
		tempType = parseInt( markersPeriod1[counter].getTitle() );
		tempType = tempType + 6;
		markersPeriod1[counter].setIcon( customIcons[tempType] );
		markersPeriod1[counter].setMap(map);
		document.getElementById('coordslatlast').value = markersPeriod1[counter].getPosition().lat().toFixed(2);
		document.getElementById('coordslnglast').value = markersPeriod1[counter].getPosition().lng().toFixed(2);
		counter++;
	// gia na mi paei -1, eksafanizw apla to teleytaio
	}else if(counter==1){
		counter--;
		markersPeriod1[counter].setMap(null);
		document.getElementById('coordslatlast').value = markersPeriod1[counter].getPosition().lat().toFixed(2);
		document.getElementById('coordslnglast').value = markersPeriod1[counter].getPosition().lng().toFixed(2);
	}
	if( counter==0 ){
		document.getElementById('coordslatlast').value = "";
		document.getElementById('coordslnglast').value = "";
		document.getElementById("showmarkersHidden").value = 1;
		document.getElementById("showmarkers").innerHTML = "Show";
	}
}

function createMarkerPred(id, latlng, num) {
	var marker = new google.maps.Marker({
		position: latlng,
		map: null,
		title: num,
		clickable: true,
		icon: customIcons[6]
	});
	return marker;
}
function predictionsDisplay(){
	if( document.getElementById("predShowHide").value==0 ){
		document.getElementById("predShowHide").value = 1;
		document.getElementById("predictionsDisplay").innerHTML = "Show&nbsp;predictions";
		counterPredictions = 0;
		setAllMapPred(null);
	}else{
		document.getElementById("predShowHide").value = 0;
		document.getElementById("predictionsDisplay").innerHTML = "Hide&nbsp;predictions";
		counterPredictions = markersPredictions.length;
		setAllMapPred(map);
	}
}
function setAllMapPred(map) {
  for (var i = 0; i < markersPredictions.length; i++) {
	markersPredictions[i].setMap(map);
  }
}


function createMarker(id, latlng, megethos, vathos, type, typeSize, date, cat, lat, lng, qntMarkers) {
	var tempTypeSize = parseInt(typeSize);
	if(id==qntMarkers+1){
		tempTypeSize = parseInt(typeSize);
		tempTypeSize += 6;
	}
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: typeSize,
		clickable: true,
		icon: customIcons[tempTypeSize],
		optimized: false
	});
	if (cat == 1) {
		markerGroups1[typeSize].push(marker);
	}
	else if (cat == 2) {
		markerGroups2[typeSize].push(marker);
	}
	else {
		markerGroups3[typeSize].push(marker);
	}
	var arr = date.split("-");
	var time = arr[2].split(":");
	var day = time[0].split(" ");

	var newDate = day[0]+"-"+arr[1]+"-"+arr[0]+"&nbsp;&nbsp;&nbsp;&nbsp;"+day[1]+":"+time[1]+":"+time[2];
	var html = "<table width='220' height='140'><font size='3'>"
	html += "<tr align='left'><td><b><b>Date:</td><td>" + newDate + "</b></td></tr>"
	html += "<tr align='left'><td><b><b>Magnitude:</b></td><td></b>" + megethos + " ML</td></tr>"
	html += "<tr align='left'><td><b><b>Latitude:</b></td><td></b>" + lat + " N</td></tr>"
	html += "<tr align='left'><td><b><b>Longitude:</b></td><td></b>" + lng + " E</td></tr>"
	html += "<tr align='left'><td><b><b>Depth:</b></td><td></b>" + vathos + " km</td></tr>"
	html += "</font></table>"
	arr = null;
	time = null;
	day = null;
	newDate = null;

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
		if( markerGroups1[type][i].getVisible()==true ) {
			markerGroups1[type][i].setVisible(false);
		} else {
			markerGroups1[type][i].setVisible(true);
		}
	}
}

function markerdisp2(type) {
	for(i = 0; i < markerGroups2[type].length; i++) {
		if( markerGroups2[type][i].getVisible()==true ) {
			markerGroups2[type][i].setVisible(false);
		} else {
			markerGroups2[type][i].setVisible(true);
		}
	}
}

function markerdisp3(type) {
	for(i = 0; i < markerGroups3[type].length; i++) {
		if( markerGroups3[type][i].getVisible()==true ) {
			markerGroups3[type][i].setVisible(false);
		} else {
			markerGroups3[type][i].setVisible(true);
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

function dat1() {
	if(document.getElementById('fromdate1').value == "") {
		var month = "01";
		var day = "01";
		var year = "2013";
		var d = day + "/" + month + "/" + year;
		document.getElementById('fromdate1').value = d;
	}
	month = null;
	delete month;
	year = null;
	delete year;
	day = null;
	delete day;
	d = null;
	delete d;
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
	currentTime = null;
	delete currentTime;
	month = null;
	delete month;
	year = null;
	delete year;
	day = null;
	delete day;
	d = null;
	delete d;
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
	d = null;
	delete d;
	dArray = null;
	delete dArray;
	year = null;
	delete year;
	day = null;
	delete day;
	df = null;
	delete df;
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
	d = null;
	delete d;
	dArray = null;
	delete dArray;
	year = null;
	delete year;
	day = null;
	delete day;
	df = null;
	delete df;
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
	d = null;
	delete d;
	dArray = null;
	delete dArray;
	year = null;
	delete year;
	day = null;
	delete day;
	df = null;
	delete df;
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

	d = null;
	delete d;
	dArray = null;
	delete dArray;
	year = null;
	delete year;
	day = null;
	delete day;
	df = null;
	delete df;
}

function diastaseisfun() {
	var a = document.getElementById('diastaseis').value;
	document.getElementById('diastaseis2').value = a;
	a = null;
	delete a;
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
	a = null;
	delete a;
	b = null;
	delete b;
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
	a = null;
	delete a;
	b = null;
	delete b;
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
	a = null;
	delete a;
	b = null;
	delete b;
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
	a = null;
	delete a;
	b = null;
	delete b;
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
