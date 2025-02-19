// I added in "firestations = " so I can access this data in index.html...
var firestations = {
    "type": "FeatureCollection",
    "name": "Fire_Stations",
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
                "NAME": "Fire Station 28",
                "ADDRESS": "1801 Brock Road",
                "COMMUNITY": "Freelton",
                "HES_EMS": "NO",
                "STATION_NO": "28",
                "TYPE": "Volunteer",
                "LONGITUDE": "-80.03879396567116",
                "LATITUDE": "43.39780379876312"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.038793965109917, 43.397803797467574]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 2,
                "NAME": "Fire Station 27",
                "ADDRESS": "795 Old Highway 8",
                "COMMUNITY": "Rockton",
                "HES_EMS": "NO",
                "STATION_NO": "27",
                "TYPE": "Volunteer",
                "LONGITUDE": "-80.12685026426217",
                "LATITUDE": "43.299733834183314"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.126850264112846, 43.299733833497868]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 3,
                "NAME": "Fire Station 25",
                "ADDRESS": "361 Old Brock Road",
                "COMMUNITY": "Greensville",
                "HES_EMS": "YES",
                "STATION_NO": "25",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.99422717549659",
                "LATITUDE": "43.281883184061044"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.994227176088444, 43.281883183053573]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 4,
                "NAME": "Fire Station 26",
                "ADDRESS": "119 Lynden Road",
                "COMMUNITY": "Lynden",
                "HES_EMS": "YES",
                "STATION_NO": "26",
                "TYPE": "Volunteer",
                "LONGITUDE": "-80.14803960726988",
                "LATITUDE": "43.23699883130726"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.14803960727258, 43.236998830447945]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 5,
                "NAME": "Fire Station 24",
                "ADDRESS": "256 Parkside Drive",
                "COMMUNITY": "Waterdown",
                "HES_EMS": "YES",
                "STATION_NO": "24",
                "TYPE": "Composite",
                "LONGITUDE": "-79.90526597249709",
                "LATITUDE": "43.33578984177393"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.905265972235981, 43.335789841037453]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 6,
                "NAME": "Fire Station 23",
                "ADDRESS": "19 Sydenham Street, Memorial Square",
                "COMMUNITY": "Dundas",
                "HES_EMS": "YES",
                "STATION_NO": "23",
                "TYPE": "Career",
                "LONGITUDE": "-79.95697156232434",
                "LATITUDE": "43.26574231458779"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.956971562631949, 43.265742313570584]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 7,
                "NAME": "Fire Station 13",
                "ADDRESS": "177 Bay Street North",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "13",
                "TYPE": "Mechanical Shop",
                "LONGITUDE": "-79.87176403233612",
                "LATITUDE": "43.26392187361992"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.871764032039209, 43.263921872524506]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 8,
                "NAME": "Fire Station 21",
                "ADDRESS": "365 Wilson Street West",
                "COMMUNITY": "Ancaster",
                "HES_EMS": "YES",
                "STATION_NO": "21",
                "TYPE": "Composite",
                "LONGITUDE": "-80.00216593154448",
                "LATITUDE": "43.20855271030248"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.002165931501366, 43.208552709112006]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 9,
                "NAME": "Fire Station 10",
                "ADDRESS": "1455 Main Street West",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "10",
                "TYPE": "Career",
                "LONGITUDE": "-79.92342327083605",
                "LATITUDE": "43.257299733747864"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.923423270639475, 43.257299732513779]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 10,
                "NAME": "Fire Station 3",
                "ADDRESS": "965 Garth Street",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "3",
                "TYPE": "Career",
                "LONGITUDE": "-79.90158902480677",
                "LATITUDE": "43.23076715491133"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.9015890250203, 43.230767153748815]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 11,
                "NAME": "Fire Station 11",
                "ADDRESS": "24 Ray Street",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "11",
                "TYPE": "Career",
                "LONGITUDE": "-79.88090517563",
                "LATITUDE": "43.25928834384655"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.880905176079338, 43.259288343024913]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 12,
                "NAME": "Fire Station 1",
                "ADDRESS": "35-43 John Street North",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "1",
                "TYPE": "Career",
                "LONGITUDE": "-79.86618024202954",
                "LATITUDE": "43.25708912617981"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.866180241805438, 43.257089125448893]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 13,
                "NAME": "Fire Station 6",
                "ADDRESS": "246 Wentworth Street North",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "6",
                "TYPE": "Career",
                "LONGITUDE": "-79.84533578889997",
                "LATITUDE": "43.25927049124504"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.845335789159208, 43.25927048988558]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 14,
                "NAME": "Fire Station 2",
                "ADDRESS": "1400 Upper Wellington Street",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "2",
                "TYPE": "Career",
                "LONGITUDE": "-79.87969383230556",
                "LATITUDE": "43.21044949225152"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.879693832893466, 43.210449491160631]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 15,
                "NAME": "Fire Station 4",
                "ADDRESS": "729 Upper Sherman Avenue",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "4",
                "TYPE": "Career",
                "LONGITUDE": "-79.85001423245707",
                "LATITUDE": "43.22452936526024"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.85001423246095, 43.224529364199654]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 16,
                "NAME": "Fire Station 5",
                "ADDRESS": "1227 Stone Church Road East",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "5",
                "TYPE": "Career",
                "LONGITUDE": "-79.8349658012201",
                "LATITUDE": "43.19832952363894"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.834965801073679, 43.198329522426228]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 17,
                "NAME": "Training Academy \/ Administration",
                "ADDRESS": "1227 Stone Church Road East",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "22",
                "TYPE": "Training Academy \/ Administration",
                "LONGITUDE": "-79.83595844098394",
                "LATITUDE": "43.19958356475469"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.835958441256992, 43.199583564189155]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 18,
                "NAME": "Fire Station 9",
                "ADDRESS": "125 Kenilworth Avenue North",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "9",
                "TYPE": "Career",
                "LONGITUDE": "-79.80873698696206",
                "LATITUDE": "43.24416472714233"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.808736986839151, 43.244164726131352]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 19,
                "NAME": "Fire Station 8",
                "ADDRESS": "400 Melvin Avenue",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": "8",
                "TYPE": "Career",
                "LONGITUDE": "-79.77928294985733",
                "LATITUDE": "43.24084501316424"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.779282950066829, 43.240845012214507]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 20,
                "NAME": "Fire Station 19",
                "ADDRESS": "3302 Homestead Road",
                "COMMUNITY": "Mount Hope",
                "HES_EMS": "YES",
                "STATION_NO": "19",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.91648420142619",
                "LATITUDE": "43.15335547076264"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.916484201237921, 43.153355469627954]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 21,
                "NAME": "Fire Station 17",
                "ADDRESS": "363 Isaac Brock Street",
                "COMMUNITY": "Stoney Creek",
                "HES_EMS": "YES",
                "STATION_NO": "17",
                "TYPE": "Composite",
                "LONGITUDE": "-79.78936757118126",
                "LATITUDE": "43.19424358851967"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.789367570600874, 43.194243587320571]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 22,
                "NAME": "Fire Station 7",
                "ADDRESS": "225 Quigley Road",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "7",
                "TYPE": "Career",
                "LONGITUDE": "-79.7841725010393",
                "LATITUDE": "43.21576608541664"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.784172500452797, 43.215766084790381]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 23,
                "NAME": "Fire Station 12",
                "ADDRESS": "199 Highway 8",
                "COMMUNITY": "Stoney Creek",
                "HES_EMS": "YES",
                "STATION_NO": "12",
                "TYPE": "Career",
                "LONGITUDE": "-79.74009223428324",
                "LATITUDE": "43.22312915688172"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.740092233977904, 43.223129155592005]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 24,
                "NAME": "Fire Station 15",
                "ADDRESS": "415 Arvin Avenue",
                "COMMUNITY": "Stoney Creek",
                "HES_EMS": "YES",
                "STATION_NO": "15",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.7165233637066",
                "LATITUDE": "43.22993323563134"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.716523363915101, 43.229933234892556]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 25,
                "NAME": "Fire Station 16",
                "ADDRESS": "939 Barton Street",
                "COMMUNITY": "Winona",
                "HES_EMS": "NO",
                "STATION_NO": "16",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.67551240127632",
                "LATITUDE": "43.21714032547456"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.675512401879558, 43.217140324621766]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 26,
                "NAME": "Fire Station 18",
                "ADDRESS": "2636 Regional Rd 56",
                "COMMUNITY": "Binbrook",
                "HES_EMS": "YES",
                "STATION_NO": "18",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.80501144947225",
                "LATITUDE": "43.12170676180546"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.805011449967992, 43.121706760916609]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 27,
                "NAME": "Ems Station 30",
                "ADDRESS": "489 Victoria Avenue North",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "YES",
                "STATION_NO": "30",
                "TYPE": "Fire\/EMS Stores",
                "LONGITUDE": "-79.85048498700186",
                "LATITUDE": "43.26865303239518"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.85048498694546, 43.26865303156071]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 28,
                "NAME": "Fire Station 14",
                "ADDRESS": "585 Chapel Hill Road",
                "COMMUNITY": "Glanbrook",
                "HES_EMS": "NO",
                "STATION_NO": "14",
                "TYPE": "Volunteer",
                "LONGITUDE": "-79.71820761568462",
                "LATITUDE": "43.15857604669918"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.718207615074931, 43.158576045665612]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 29,
                "NAME": "Fire Station 20",
                "ADDRESS": "661 Garner Rd",
                "COMMUNITY": "Ancaster",
                "HES_EMS": "YES",
                "STATION_NO": "20",
                "TYPE": "Career",
                "LONGITUDE": "-79.9536203440199",
                "LATITUDE": "43.206946951793675"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.953620344591783, 43.206946950622395]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 30,
                "NAME": "Fpb (Main Office)",
                "ADDRESS": "55 King William Street ",
                "COMMUNITY": "Hamilton",
                "HES_EMS": "NO",
                "STATION_NO": null,
                "TYPE": "Fire Prevention Main Office ",
                "LONGITUDE": "-79.86665379641964",
                "LATITUDE": "43.25712597622108"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-79.866653796548349, 43.2571259749297]
            }
        }
    ]
}