var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_yes_1 = new ol.format.GeoJSON();
var features_building_yes_1 = format_building_yes_1.readFeatures(json_building_yes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_1.addFeatures(features_building_yes_1);
var lyr_building_yes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_yes_1, 
                style: style_building_yes_1,
                popuplayertitle: 'building_yes',
                interactive: true,
                title: '<img src="styles/legend/building_yes_1.png" /> building_yes'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway2_3 = new ol.format.GeoJSON();
var features_highway2_3 = format_highway2_3.readFeatures(json_highway2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway2_3.addFeatures(features_highway2_3);
var lyr_highway2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway2_3, 
                style: style_highway2_3,
                popuplayertitle: 'highway 2',
                interactive: true,
                title: '<img src="styles/legend/highway2_3.png" /> highway 2'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_yes_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway2_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_yes_1,lyr_building_2,lyr_highway2_3,lyr_highway_4];
lyr_building_yes_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name:en': 'name:en', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'name:ru': 'name:ru', 'start_date': 'start_date', 'building:levels:underground': 'building:levels:underground', 'power': 'power', 'religion': 'religion', 'denomination': 'denomination', 'operator': 'operator', 'fuel:octane_92': 'fuel:octane_92', 'website': 'website', 'layer': 'layer', 'opening_hours': 'opening_hours', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_80': 'fuel:octane_80', 'fuel:diesel': 'fuel:diesel', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'building:levels': 'building:levels', 'addr:place': 'addr:place', 'addr:housenumber': 'addr:housenumber', 'shop': 'shop', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'type': 'type', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:colour': 'roof:colour', 'construction': 'construction', 'check_date': 'check_date', 'construction:addr:housenumber': 'construction:addr:housenumber', 'parking': 'parking', 'name:en': 'name:en', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'name:ru': 'name:ru', 'substation': 'substation', 'building:parts': 'building:parts', 'building:min_level': 'building:min_level', 'description': 'description', 'barrier': 'barrier', 'religion': 'religion', 'denomination': 'denomination', 'fuel:octane_98': 'fuel:octane_98', 'fuel:lpg': 'fuel:lpg', 'brand': 'brand', 'power': 'power', 'operator': 'operator', 'fuel:octane_92': 'fuel:octane_92', 'website': 'website', 'layer': 'layer', 'opening_hours': 'opening_hours', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_80': 'fuel:octane_80', 'fuel:diesel': 'fuel:diesel', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'width': 'width', 'length': 'length', 'height': 'height', 'design:ref': 'design:ref', 'design': 'design', 'shop': 'shop', 'name': 'name', 'addr:street': 'addr:street', 'addr:country': 'addr:country', 'start_date': 'start_date', 'energy_class': 'energy_class', 'building:levels:underground': 'building:levels:underground', 'building:levels': 'building:levels', 'building:flats': 'building:flats', 'addr:postcode': 'addr:postcode', 'addr:place': 'addr:place', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', 'amenity': 'amenity', 'address': 'address', });
lyr_highway2_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'parking': 'parking', 'amenity': 'amenity', 'motor_vehicle': 'motor_vehicle', 'traffic_signals:direction': 'traffic_signals:direction', 'natural': 'natural', 'name:ja': 'name:ja', 'tunnel': 'tunnel', 'access': 'access', 'traffic_calming': 'traffic_calming', 'kerb': 'kerb', 'description': 'description', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing:signals': 'crossing:signals', 'crossing:island': 'crossing:island', 'button_operated': 'button_operated', 'railway': 'railway', 'old_name': 'old_name', 'tactile_paving': 'tactile_paving', 'lit': 'lit', 'bin': 'bin', 'bench': 'bench', 'shelter': 'shelter', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'crossing': 'crossing', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tunnel': 'tunnel', 'horse': 'horse', 'tracktype': 'tracktype', 'name:etymology:wikidata': 'name:etymology:wikidata', 'motor_vehicle': 'motor_vehicle', 'check_date:surface': 'check_date:surface', 'leisure': 'leisure', 'tactile_paving': 'tactile_paving', 'ramp:bicycle': 'ramp:bicycle', 'ramp': 'ramp', 'handrail': 'handrail', 'incline': 'incline', 'living_street': 'living_street', 'footway': 'footway', 'covered': 'covered', 'ref': 'ref', 'name:en': 'name:en', 'maxheight': 'maxheight', 'highway:category': 'highway:category', 'motorcar': 'motorcar', 'layer': 'layer', 'bridge': 'bridge', 'foot': 'foot', 'bicycle': 'bicycle', 'service': 'service', 'lane_markings': 'lane_markings', 'maxspeed': 'maxspeed', 'postal_code': 'postal_code', 'access': 'access', 'addr:postcode': 'addr:postcode', 'noname': 'noname', 'name:ru': 'name:ru', 'name': 'name', 'hgv': 'hgv', 'smoothness': 'smoothness', 'surface': 'surface', 'oneway': 'oneway', 'lit': 'lit', 'lanes': 'lanes', });
lyr_building_yes_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name:en': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand:en': '', 'brand': '', 'name:ru': '', 'start_date': '', 'building:levels:underground': '', 'power': '', 'religion': '', 'denomination': '', 'operator': '', 'fuel:octane_92': '', 'website': '', 'layer': '', 'opening_hours': '', 'fuel:octane_95': '', 'fuel:octane_80': '', 'fuel:diesel': '', 'contact:website': '', 'contact:phone': '', 'contact:email': '', 'building:levels': '', 'addr:place': '', 'addr:housenumber': '', 'shop': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:country': '', 'addr:city': '', 'type': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'roof:colour': 'TextEdit', 'construction': 'TextEdit', 'check_date': 'TextEdit', 'construction:addr:housenumber': 'TextEdit', 'parking': 'TextEdit', 'name:en': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand:en': 'TextEdit', 'name:ru': 'TextEdit', 'substation': 'TextEdit', 'building:parts': 'TextEdit', 'building:min_level': 'TextEdit', 'description': 'TextEdit', 'barrier': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'fuel:octane_98': 'TextEdit', 'fuel:lpg': 'TextEdit', 'brand': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'fuel:octane_92': 'TextEdit', 'website': 'TextEdit', 'layer': 'TextEdit', 'opening_hours': 'TextEdit', 'fuel:octane_95': 'TextEdit', 'fuel:octane_80': 'TextEdit', 'fuel:diesel': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:email': 'TextEdit', 'width': 'TextEdit', 'length': 'TextEdit', 'height': 'TextEdit', 'design:ref': 'TextEdit', 'design': 'TextEdit', 'shop': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:country': 'TextEdit', 'start_date': 'TextEdit', 'energy_class': 'TextEdit', 'building:levels:underground': 'TextEdit', 'building:levels': 'TextEdit', 'building:flats': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:place': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'amenity': 'TextEdit', 'address': 'TextEdit', });
lyr_highway2_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'parking': '', 'amenity': '', 'motor_vehicle': '', 'traffic_signals:direction': '', 'natural': '', 'name:ja': '', 'tunnel': '', 'access': '', 'traffic_calming': '', 'kerb': '', 'description': '', 'traffic_signals:sound': '', 'crossing:signals': '', 'crossing:island': '', 'button_operated': '', 'railway': '', 'old_name': '', 'tactile_paving': '', 'lit': '', 'bin': '', 'bench': '', 'shelter': '', 'public_transport': '', 'name': '', 'bus': '', 'motorcycle': '', 'motorcar': '', 'horse': '', 'foot': '', 'bicycle': '', 'barrier': '', 'crossing': '', });
lyr_highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tunnel': 'TextEdit', 'horse': 'TextEdit', 'tracktype': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'motor_vehicle': 'TextEdit', 'check_date:surface': 'TextEdit', 'leisure': 'TextEdit', 'tactile_paving': 'TextEdit', 'ramp:bicycle': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'incline': 'TextEdit', 'living_street': 'TextEdit', 'footway': 'TextEdit', 'covered': 'TextEdit', 'ref': 'TextEdit', 'name:en': 'TextEdit', 'maxheight': 'TextEdit', 'highway:category': 'TextEdit', 'motorcar': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'lane_markings': 'TextEdit', 'maxspeed': 'TextEdit', 'postal_code': 'TextEdit', 'access': 'TextEdit', 'addr:postcode': 'TextEdit', 'noname': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', 'smoothness': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'lit': 'TextEdit', 'lanes': 'TextEdit', });
lyr_building_yes_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name:en': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'name:ru': 'no label', 'start_date': 'no label', 'building:levels:underground': 'no label', 'power': 'no label', 'religion': 'no label', 'denomination': 'no label', 'operator': 'no label', 'fuel:octane_92': 'no label', 'website': 'no label', 'layer': 'no label', 'opening_hours': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_80': 'no label', 'fuel:diesel': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'building:levels': 'no label', 'addr:place': 'no label', 'addr:housenumber': 'no label', 'shop': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'type': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:colour': 'no label', 'construction': 'no label', 'check_date': 'no label', 'construction:addr:housenumber': 'no label', 'parking': 'no label', 'name:en': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'name:ru': 'no label', 'substation': 'no label', 'building:parts': 'no label', 'building:min_level': 'no label', 'description': 'no label', 'barrier': 'no label', 'religion': 'no label', 'denomination': 'no label', 'fuel:octane_98': 'no label', 'fuel:lpg': 'no label', 'brand': 'no label', 'power': 'no label', 'operator': 'no label', 'fuel:octane_92': 'no label', 'website': 'no label', 'layer': 'no label', 'opening_hours': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_80': 'no label', 'fuel:diesel': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'width': 'no label', 'length': 'no label', 'height': 'no label', 'design:ref': 'no label', 'design': 'no label', 'shop': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:country': 'no label', 'start_date': 'no label', 'energy_class': 'no label', 'building:levels:underground': 'no label', 'building:levels': 'no label', 'building:flats': 'no label', 'addr:postcode': 'no label', 'addr:place': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', 'amenity': 'no label', 'address': 'no label', });
lyr_highway2_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'parking': 'no label', 'amenity': 'no label', 'motor_vehicle': 'no label', 'traffic_signals:direction': 'no label', 'natural': 'no label', 'name:ja': 'no label', 'tunnel': 'no label', 'access': 'no label', 'traffic_calming': 'no label', 'kerb': 'no label', 'description': 'no label', 'traffic_signals:sound': 'no label', 'crossing:signals': 'no label', 'crossing:island': 'no label', 'button_operated': 'no label', 'railway': 'no label', 'old_name': 'no label', 'tactile_paving': 'no label', 'lit': 'no label', 'bin': 'no label', 'bench': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'crossing': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tunnel': 'no label', 'horse': 'no label', 'tracktype': 'no label', 'name:etymology:wikidata': 'no label', 'motor_vehicle': 'no label', 'check_date:surface': 'no label', 'leisure': 'no label', 'tactile_paving': 'no label', 'ramp:bicycle': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'incline': 'no label', 'living_street': 'no label', 'footway': 'no label', 'covered': 'no label', 'ref': 'no label', 'name:en': 'no label', 'maxheight': 'no label', 'highway:category': 'no label', 'motorcar': 'no label', 'layer': 'no label', 'bridge': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'service': 'no label', 'lane_markings': 'no label', 'maxspeed': 'no label', 'postal_code': 'no label', 'access': 'no label', 'addr:postcode': 'no label', 'noname': 'no label', 'name:ru': 'no label', 'name': 'no label', 'hgv': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'oneway': 'no label', 'lit': 'no label', 'lanes': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});