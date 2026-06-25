var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_building_editablebuilding_3 = new ol.format.GeoJSON();
var features_building_editablebuilding_3 = format_building_editablebuilding_3.readFeatures(json_building_editablebuilding_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_editablebuilding_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_editablebuilding_3.addFeatures(features_building_editablebuilding_3);
var lyr_building_editablebuilding_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_editablebuilding_3, 
                style: style_building_editablebuilding_3,
                popuplayertitle: 'building_editable — building',
                interactive: true,
    title: 'building_editable — building<br />\
    <img src="styles/legend/building_editablebuilding_3_0.png" /> 1<br />\
    <img src="styles/legend/building_editablebuilding_3_1.png" /> 2<br />\
    <img src="styles/legend/building_editablebuilding_3_2.png" /> 4<br />\
    <img src="styles/legend/building_editablebuilding_3_3.png" /> 6<br />\
    <img src="styles/legend/building_editablebuilding_3_4.png" /> 8<br />\
    <img src="styles/legend/building_editablebuilding_3_5.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_building_editablebuilding_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,lyr_building_editablebuilding_3];
lyr_building_editablebuilding_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'website': 'website', 'religion': 'religion', 'name': 'name', 'denomination': 'denomination', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'Area_m2': 'Area_m2', 'Floor_Est.': 'Floor_Est.', });
lyr_building_editablebuilding_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'website': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denomination': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'building:levels': 'TextEdit', 'Area_m2': 'TextEdit', 'Floor_Est.': 'Range', });
lyr_building_editablebuilding_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'full_id': 'no label', 'osm_id': 'inline label - visible with data', 'osm_type': 'no label', 'building': 'no label', 'website': 'no label', 'religion': 'no label', 'name': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'Area_m2': 'no label', 'Floor_Est.': 'no label', });
lyr_building_editablebuilding_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});