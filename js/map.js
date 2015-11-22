jQuery(document).ready(function () {
    var map;
    var centerPosition = new google.maps.LatLng(6.8168741, 79.8676929);


    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#E4E4E5"
        }]
    }, {
        "featureType": "road.highway",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#E4E4E5"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }]

    var options = {
        zoom: 14,
        center: centerPosition,
        scrollwheel: false,
        mapTypeControl: true,
        streetViewControl: true,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
    
    var image = {
                url: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png',
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 50)
            };
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
        icon: image
    });
});