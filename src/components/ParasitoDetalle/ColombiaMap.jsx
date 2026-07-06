import { useEffect, useRef, useState } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

function FitMap({ geoData }) {

    const map = useMap();

    useEffect(() => {

        if (!geoData) return;

        const layer = L.geoJSON(geoData);

        map.fitBounds(layer.getBounds(), {

            padding: [10, 10],
            maxZoom: 7,

        });

    }, [geoData, map]);

    return null;

}

export default function ColombiaMap({ mapas, onSelect }) {

    const [geoData, setGeoData] = useState(null);

    const geoRef = useRef();

    useEffect(() => {

        fetch("/geojson/colombia_departamentos.geojson")
            .then((r) => r.json())
            .then(setGeoData);

    }, []);

    function registro(nombre) {

        return mapas.find(

            m =>

                m.departamento.toUpperCase() === nombre.toUpperCase()

        );

    }

    function color(nombre) {

        const item = registro(nombre);

        if (!item) return "#eef5ef";

        switch (item.nivel_presencia) {

            case "alta":

                return "#ef4444";

            case "media":

                return "#f59e0b";

            case "baja":

                return "#22c55e";

            default:

                return "#eef5ef";

        }

    }

    function style(feature) {

        return {

            fillColor: color(

                feature.properties.NOMBRE_DPT

            ),

            weight: 2,

            color: "#ffffff",

            fillOpacity: 1,

        };

    }

    function onEachFeature(feature, layer) {

        const nombre = feature.properties.NOMBRE_DPT;

        const item = registro(nombre);

        layer.bindTooltip(nombre, {

            sticky: true,

            direction: "top",

            className: "tooltip-mapa",

        });

        layer.on({

            mouseover(e) {

                e.target.setStyle({

                    weight: 3,

                    color: "#065f46",

                    fillOpacity: 1,

                });

                e.target.bringToFront();

            },

            mouseout(e) {

                geoRef.current.resetStyle(e.target);

            },

            click(e) {

                geoRef.current.resetStyle();

                e.target.setStyle({

                    weight: 4,

                    color: "#064e3b",

                });

                e.target.bringToFront();

                onSelect(

                    item ?? {

                        departamento: nombre,

                        nivel_presencia: "Sin registros",

                        observaciones:

                            "No existen registros epidemiológicos para este departamento."

                    }

                );

            }

        });

    }

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 20,

            }}

            animate={{

                opacity: 1,

                y: 0,

            }}

            className="
                bg-white
                rounded-[30px]
                shadow-2xl
                overflow-hidden
            "

        >

            <MapContainer

                zoomControl={false}

                attributionControl={false}

                scrollWheelZoom={false}

                dragging={false}

                doubleClickZoom={false}

                touchZoom={false}

                keyboard={false}

                boxZoom={false}

                style={{

                    width: "100%",

                    height: "850px",

                    background: "#ffffff",

                }}

            >

                {

                    geoData &&

                    <>

                        <FitMap

                            geoData={geoData}

                        />

                        <GeoJSON

                            ref={geoRef}

                            data={geoData}

                            style={style}

                            onEachFeature={onEachFeature}

                        />

                    </>

                }

            </MapContainer>

        </motion.div>

    );

}