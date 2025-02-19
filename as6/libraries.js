// I added in "libraries = " so I can access this data in index.html...
var libraries = {
    "type": "FeatureCollection",
    "name": "Libraries",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
            "type": "Feature",
            "properties": {
                "OBJECTID": 1,
                "NAME": "Ancaster Library",
                "BUILDING_SQ_FT": 7500,
                "HOLDINGS": 58884,
                "CIRCULATION": 247037,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.97666063192372",
                "LATITUDE": "43.22530917335925",
                "ADDRESS": "300 WIlson Street East",
                "COMMUNITY": "Ancaster"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.976660631923636, 43.225309172422755]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 2,
                "NAME": "Barton Library",
                "BUILDING_SQ_FT": 6272,
                "HOLDINGS": 25027,
                "CIRCULATION": 69297,
                "RANKING": "-2",
                "RADIUS_KM": 1,
                "LONGITUDE": "-79.84121898077925",
                "LATITUDE": "43.258031699157776",
                "ADDRESS": "571 Barton Street East",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.841218980779161, 43.258031698221245]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 3,
                "NAME": "Binbrook Library",
                "BUILDING_SQ_FT": 3192,
                "HOLDINGS": 18858,
                "CIRCULATION": 46545,
                "RANKING": "-1",
                "RADIUS_KM": 10,
                "LONGITUDE": "-79.80342947186979",
                "LATITUDE": "43.1217043785817",
                "ADDRESS": "2641 Regional Road 56",
                "COMMUNITY": "Glanbrook"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.80342947186972, 43.121704377645443]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 4,
                "NAME": "Carlisle Library",
                "BUILDING_SQ_FT": 2491,
                "HOLDINGS": 18434,
                "CIRCULATION": 45113,
                "RANKING": "-1",
                "RADIUS_KM": 10,
                "LONGITUDE": "-79.98108621069434",
                "LATITUDE": "43.396053385940036",
                "ADDRESS": "1496 Centre Road",
                "COMMUNITY": "Flamborough"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.981086210694258, 43.396053385003249]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 5,
                "NAME": "Concession Library",
                "BUILDING_SQ_FT": 8380,
                "HOLDINGS": 47689,
                "CIRCULATION": 173618,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.85136825137424",
                "LATITUDE": "43.24104159893363",
                "ADDRESS": "565 Concession Street",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.851368251374154, 43.241041597997139]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 6,
                "NAME": "Dundas Library",
                "BUILDING_SQ_FT": 13712,
                "HOLDINGS": 86203,
                "CIRCULATION": 280443,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.95494871190127",
                "LATITUDE": "43.2654838918564",
                "ADDRESS": "18 Ogilvie Street",
                "COMMUNITY": "Dundas"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.954948711901181, 43.265483890919867]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 7,
                "NAME": "Freelton Library",
                "BUILDING_SQ_FT": null,
                "HOLDINGS": 0,
                "CIRCULATION": 0,
                "RANKING": null,
                "RADIUS_KM": 0,
                "LONGITUDE": "-80.03876645340884",
                "LATITUDE": "43.39793340863621",
                "ADDRESS": "1803 Brock Road",
                "COMMUNITY": "Flamborough"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.038766453408755, 43.397933407699433]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 8,
                "NAME": "Greensville Library",
                "BUILDING_SQ_FT": null,
                "HOLDINGS": 0,
                "CIRCULATION": 0,
                "RANKING": null,
                "RADIUS_KM": 0,
                "LONGITUDE": "-79.99612469236381",
                "LATITUDE": "43.2752802704378",
                "ADDRESS": "59 Kirby Avenue",
                "COMMUNITY": "Flamborough"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.996124692363722, 43.275280269501231]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 9,
                "NAME": "Hamilton Central Library",
                "BUILDING_SQ_FT": 146131,
                "HOLDINGS": 146131,
                "CIRCULATION": 830909,
                "RANKING": "-5",
                "RADIUS_KM": 5,
                "LONGITUDE": "-79.87069971542475",
                "LATITUDE": "43.25894156052855",
                "ADDRESS": "55 York Boulevard",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.870699715424664, 43.258941559592031]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 10,
                "NAME": "Kenilworth Library",
                "BUILDING_SQ_FT": 8000,
                "HOLDINGS": 46702,
                "CIRCULATION": 145651,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.80884162904492",
                "LATITUDE": "43.24349823689495",
                "ADDRESS": "103 Kenilworth Avenue North",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.808841629044835, 43.243498235958455]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 11,
                "NAME": "Locke Library",
                "BUILDING_SQ_FT": 1451,
                "HOLDINGS": 23853,
                "CIRCULATION": 92902,
                "RANKING": "-2",
                "RADIUS_KM": 1,
                "LONGITUDE": "-79.88702203815019",
                "LATITUDE": "43.251822854043446",
                "ADDRESS": "285 Locke Street South",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.887022038150107, 43.251822853106923]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 12,
                "NAME": "Lynden Library",
                "BUILDING_SQ_FT": 4000,
                "HOLDINGS": 0,
                "CIRCULATION": 0,
                "RANKING": null,
                "RADIUS_KM": 0,
                "LONGITUDE": "-80.14659537018215",
                "LATITUDE": "43.236560205302546",
                "ADDRESS": "110 Lynden Road",
                "COMMUNITY": "Flamborough"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.146595370182069, 43.236560204366015]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 13,
                "NAME": "Mount Hope Library",
                "BUILDING_SQ_FT": 2230,
                "HOLDINGS": 15457,
                "CIRCULATION": 31195,
                "RANKING": "-1",
                "RADIUS_KM": 10,
                "LONGITUDE": "-79.91206219956915",
                "LATITUDE": "43.16057987102941",
                "ADDRESS": "3027 Homestead Drive",
                "COMMUNITY": "Glanbrook"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.912062199569064, 43.160579870093059]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 14,
                "NAME": "Red Hill Library",
                "BUILDING_SQ_FT": 11760,
                "HOLDINGS": 61550,
                "CIRCULATION": 236902,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.7719447194834",
                "LATITUDE": "43.23028211412345",
                "ADDRESS": "695 Queenston Road",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.771944719483329, 43.230282113187002]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 15,
                "NAME": "Saltfleet Library",
                "BUILDING_SQ_FT": 15481,
                "HOLDINGS": 70643,
                "CIRCULATION": 252049,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.74507509271776",
                "LATITUDE": "43.22229244915966",
                "ADDRESS": "131 Gray Road",
                "COMMUNITY": "Stoney Creek"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.74507509271767, 43.222292448223229]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 16,
                "NAME": "Sherwood Library",
                "BUILDING_SQ_FT": 20400,
                "HOLDINGS": 74754,
                "CIRCULATION": 333168,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.82861768559614",
                "LATITUDE": "43.22656912860486",
                "ADDRESS": "467 Upper Ottawa Street",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.828617685596058, 43.226569127668391]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 17,
                "NAME": "Stoney Creek Library",
                "BUILDING_SQ_FT": 6404,
                "HOLDINGS": 32989,
                "CIRCULATION": 87659,
                "RANKING": "-2",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.69140529637862",
                "LATITUDE": "43.212864346614744",
                "ADDRESS": "777 Highway 8",
                "COMMUNITY": "Stoney Creek"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.691405296378534, 43.212864345678355]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 18,
                "NAME": "Terryberry Library",
                "BUILDING_SQ_FT": 30000,
                "HOLDINGS": 121339,
                "CIRCULATION": 590659,
                "RANKING": "-4",
                "RADIUS_KM": 5,
                "LONGITUDE": "-79.88674908233428",
                "LATITUDE": "43.23031427967188",
                "ADDRESS": "100 Mohawk Road West",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.886749082334191, 43.230314278735399]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 19,
                "NAME": "Turner Park Library",
                "BUILDING_SQ_FT": 23918,
                "HOLDINGS": 58400,
                "CIRCULATION": 0,
                "RANKING": null,
                "RADIUS_KM": 0,
                "LONGITUDE": "-79.87862786073158",
                "LATITUDE": "43.198467046756825",
                "ADDRESS": "352 Rymal Road East",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.878627860731498, 43.198467045820408]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 20,
                "NAME": "Valley Park Library",
                "BUILDING_SQ_FT": 3100,
                "HOLDINGS": 23668,
                "CIRCULATION": 94484,
                "RANKING": "-2",
                "RADIUS_KM": 1,
                "LONGITUDE": "-79.7979000120333",
                "LATITUDE": "43.19309594024885",
                "ADDRESS": "1050 Paramount Drive, Unit 12",
                "COMMUNITY": "Stoney Creek"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.79790001203321, 43.193095939312464]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 21,
                "NAME": "Waterdown Library",
                "BUILDING_SQ_FT": 3410,
                "HOLDINGS": 31253,
                "CIRCULATION": 143223,
                "RANKING": "-2",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.90479819387768",
                "LATITUDE": "43.323629399517934",
                "ADDRESS": "163 Dundas Street East",
                "COMMUNITY": "Flamborough"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.904798193877582, 43.323629398581296]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 22,
                "NAME": "Westdale Library",
                "BUILDING_SQ_FT": 9950,
                "HOLDINGS": 56499,
                "CIRCULATION": 274285,
                "RANKING": "-3",
                "RADIUS_KM": 2,
                "LONGITUDE": "-79.90347676550954",
                "LATITUDE": "43.26256862166229",
                "ADDRESS": "955 King Street West",
                "COMMUNITY": "Hamilton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.903476765509453, 43.262568620725752]
            }
        }
    ]
}