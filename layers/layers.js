var wms_layers = [];

var format_Gush100150_0 = new ol.format.GeoJSON();
var features_Gush100150_0 = format_Gush100150_0.readFeatures(json_Gush100150_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gush100150_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gush100150_0.addFeatures(features_Gush100150_0);
var lyr_Gush100150_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gush100150_0, 
                style: style_Gush100150_0,
                interactive: true,
                title: '<img src="styles/legend/Gush100150_0.png" /> Gush 100150'
            });
var format_Afersimplify_1 = new ol.format.GeoJSON();
var features_Afersimplify_1 = format_Afersimplify_1.readFeatures(json_Afersimplify_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Afersimplify_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Afersimplify_1.addFeatures(features_Afersimplify_1);
var lyr_Afersimplify_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Afersimplify_1, 
                style: style_Afersimplify_1,
                interactive: true,
                title: '<img src="styles/legend/Afersimplify_1.png" /> Afer simplify'
            });

lyr_Gush100150_0.setVisible(true);lyr_Afersimplify_1.setVisible(true);
var layersList = [lyr_Gush100150_0,lyr_Afersimplify_1];
lyr_Gush100150_0.set('fieldAliases', {'GUSH_NUM': 'GUSH_NUM', 'GUSH_SUFFI': 'GUSH_SUFFI', 'SHEET_K_ID': 'SHEET_K_ID', 'SCALE': 'SCALE', 'STATUS': 'STATUS', 'STATUS_TEX': 'STATUS_TEX', 'LOCALITY_I': 'LOCALITY_I', 'LOCALITY_N': 'LOCALITY_N', 'REG_MUN_ID': 'REG_MUN_ID', 'REG_MUN_NA': 'REG_MUN_NA', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY_NAM': 'COUNTY_NAM', 'REGION_ID': 'REGION_ID', 'REGION_NAM': 'REGION_NAM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Afersimplify_1.set('fieldAliases', {'GUSH_NUM': 'GUSH_NUM', 'GUSH_SUFFI': 'GUSH_SUFFI', 'SHEET_K_ID': 'SHEET_K_ID', 'SCALE': 'SCALE', 'STATUS': 'STATUS', 'STATUS_TEX': 'STATUS_TEX', 'LOCALITY_I': 'LOCALITY_I', 'LOCALITY_N': 'LOCALITY_N', 'REG_MUN_ID': 'REG_MUN_ID', 'REG_MUN_NA': 'REG_MUN_NA', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY_NAM': 'COUNTY_NAM', 'REGION_ID': 'REGION_ID', 'REGION_NAM': 'REGION_NAM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Gush100150_0.set('fieldImages', {'GUSH_NUM': '', 'GUSH_SUFFI': '', 'SHEET_K_ID': '', 'SCALE': '', 'STATUS': '', 'STATUS_TEX': '', 'LOCALITY_I': '', 'LOCALITY_N': '', 'REG_MUN_ID': '', 'REG_MUN_NA': '', 'COUNTY_ID': '', 'COUNTY_NAM': '', 'REGION_ID': '', 'REGION_NAM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Afersimplify_1.set('fieldImages', {'GUSH_NUM': 'TextEdit', 'GUSH_SUFFI': 'TextEdit', 'SHEET_K_ID': 'TextEdit', 'SCALE': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_TEX': 'TextEdit', 'LOCALITY_I': 'TextEdit', 'LOCALITY_N': 'TextEdit', 'REG_MUN_ID': 'TextEdit', 'REG_MUN_NA': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'REGION_ID': 'TextEdit', 'REGION_NAM': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Gush100150_0.set('fieldLabels', {'GUSH_NUM': 'no label', 'GUSH_SUFFI': 'no label', 'SHEET_K_ID': 'no label', 'SCALE': 'no label', 'STATUS': 'no label', 'STATUS_TEX': 'no label', 'LOCALITY_I': 'no label', 'LOCALITY_N': 'no label', 'REG_MUN_ID': 'no label', 'REG_MUN_NA': 'no label', 'COUNTY_ID': 'no label', 'COUNTY_NAM': 'no label', 'REGION_ID': 'no label', 'REGION_NAM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Afersimplify_1.set('fieldLabels', {'GUSH_NUM': 'no label', 'GUSH_SUFFI': 'no label', 'SHEET_K_ID': 'no label', 'SCALE': 'no label', 'STATUS': 'no label', 'STATUS_TEX': 'no label', 'LOCALITY_I': 'no label', 'LOCALITY_N': 'no label', 'REG_MUN_ID': 'no label', 'REG_MUN_NA': 'no label', 'COUNTY_ID': 'no label', 'COUNTY_NAM': 'no label', 'REGION_ID': 'no label', 'REGION_NAM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Afersimplify_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});