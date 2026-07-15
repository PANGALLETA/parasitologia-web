import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Microscope,
    ZoomIn,
    ZoomOut,
    BookOpen,
} from "lucide-react";

import Carousel from "./Carousel";

export default function Viewer3D({

    parasito,

    partes = [],

}) {

    const viewer = useRef(null);

    const [rotation, setRotation] = useState({

        x: 0,

        y: 0,

    });

    const [zoom, setZoom] = useState(1);

    const [actual, setActual] = useState(0);

    const [informacion, setInformacion] = useState(null);

    const imagenes = [

        {

            nombre: "Principal",

            imagen: parasito.imagen_principal,

            descripcion: parasito.descripcion_general,

        },

        ...partes.map((parte) => ({

            nombre: parte.nombre,

            imagen: parte.imagen,

            descripcion: parte.descripcion,

        })),

    ];

    const opcionesPrincipal = [

        {

            titulo: "Descripción General",

            contenido: parasito.descripcion_general,

        },

        {

            titulo: "Morfología",

            contenido: parasito.morfologia,

        },

        {

            titulo: "Hospedadores",

            contenido: parasito.hospedadores,

        },

        {

            titulo: "Síntomas",

            contenido: parasito.sintomas,

        },

        {

            titulo: "Tratamiento",

            contenido: parasito.tratamiento,

        },

    ];

    function mover(e) {

        if (!viewer.current) return;

        const rect = viewer.current.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        setRotation({

            x: -((y - centerY) / centerY) * 15,

            y: ((x - centerX) / centerX) * 15,

        });

    }

    function salir() {

        setRotation({

            x: 0,

            y: 0,

        });

    }

    function rueda(e) {

        e.preventDefault();

        setZoom((prev) => {

            let nuevo = prev - e.deltaY * 0.001;

            if (nuevo < 0.8) nuevo = 0.8;

            if (nuevo > 2) nuevo = 2;

            return nuevo;

        });

    }

        return (

        <div className="w-full space-y-10">

            {/* ========================= */}
            {/* VISOR */}
            {/* ========================= */}

            <div

                ref={viewer}

                onMouseMove={mover}

                onMouseLeave={salir}

                onWheel={rueda}

                className="relative flex justify-center items-center overflow-hidden"

                style={{

                    perspective: "2200px",

                    height: "760px",

                }}

            >

                {/* Glow */}

                <motion.div

                    animate={{

                        x: rotation.y * 10,

                        y: rotation.x * 10,

                    }}

                    transition={{

                        type: "spring",

                        stiffness: 60,

                    }}

                    className="absolute w-[600px] h-[600px] rounded-full bg-green-400/20 blur-[150px]"

                />

                {/* Sombra */}

                <motion.div

                    animate={{

                        x: rotation.y * 5,

                        y: -rotation.x * 5,

                        scaleX: 1 + Math.abs(rotation.y) / 35,

                        scaleY: 1 + Math.abs(rotation.x) / 35,

                    }}

                    transition={{

                        type: "spring",

                        stiffness: 120,

                    }}

                    className="absolute bottom-10 w-[520px] h-14 rounded-full bg-black/30 blur-3xl"

                />

                <motion.div

                    animate={{

                        rotateX: rotation.x,

                        rotateY: rotation.y,

                        scale: zoom,

                        y: [-6, 6, -6],

                    }}

                    transition={{

                        rotateX: {

                            type: "spring",

                            stiffness: 120,

                            damping: 15,

                        },

                        rotateY: {

                            type: "spring",

                            stiffness: 120,

                            damping: 15,

                        },

                        scale: {

                            type: "spring",

                            stiffness: 120,

                        },

                        y: {

                            repeat: Infinity,

                            duration: 4,

                            ease: "easeInOut",

                        },

                    }}

                    style={{

                        transformStyle: "preserve-3d",

                    }}

                >

                    <div

                        className="

                            relative

                            bg-white

                            rounded-[35px]

                            overflow-hidden

                            shadow-[0_50px_120px_rgba(0,0,0,.25)]

                            border

                            border-gray-200

                        "

                    >

                        {/* Reflejo */}

                        <motion.div

                            animate={{

                                x: rotation.y * 8,

                                y: rotation.x * 8,

                            }}

                            transition={{

                                type: "spring",

                                stiffness: 80,

                            }}

                            className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-20"

                        />

                        <AnimatePresence mode="wait">

                            <motion.img

                                key={actual}

                                src={imagenes[actual].imagen}

                                draggable={false}

                                initial={{

                                    opacity: 0,

                                    scale: .95,

                                }}

                                animate={{

                                    opacity: 1,

                                    scale: 1,

                                }}

                                exit={{

                                    opacity: 0,

                                    scale: 1.05,

                                }}

                                transition={{

                                    duration: .35,

                                }}

                                className="

                                    w-[760px]

                                    h-[520px]

                                    object-contain

                                    bg-gray-50

                                    select-none

                                "

                            />

                        </AnimatePresence>

                        <div className="p-8">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h2 className="text-4xl font-bold text-green-900">

                                        {parasito.nombre_comun}

                                    </h2>

                                    <p className="italic text-xl text-gray-500 mt-2">

                                        {parasito.nombre_cientifico}

                                    </p>

                                </div>

                                <div className="flex gap-3">

                                    <button

                                        onClick={() =>

                                            setZoom((z) =>

                                                Math.max(.8, z - .1)

                                            )

                                        }

                                        className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center"

                                    >

                                        <ZoomOut

                                            className="text-green-700"

                                        />

                                    </button>

                                    <button

                                        onClick={() =>

                                            setZoom((z) =>

                                                Math.min(2, z + .1)

                                            )

                                        }

                                        className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center"

                                    >

                                        <ZoomIn

                                            className="text-green-700"

                                        />

                                    </button>

                                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                                        <Microscope

                                            size={28}

                                            className="text-green-700"

                                        />

                                    </div>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-5 mt-8">

                                <div className="bg-green-50 rounded-xl p-5">

                                    <div className="text-sm text-gray-500">

                                        Familia

                                    </div>

                                    <div className="font-bold text-green-700 text-lg">

                                        {parasito.familia}

                                    </div>

                                </div>

                                <div className="bg-green-50 rounded-xl p-5">

                                    <div className="text-sm text-gray-500">

                                        Género

                                    </div>

                                    <div className="font-bold text-green-700 text-lg">

                                        {parasito.genero}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* ========================= */}
            {/* CARRUSEL */}
            {/* ========================= */}

            <Carousel

                imagenes={imagenes}

                actual={actual}

                onSelect={(index) => {

                    setActual(index);

                    setInformacion(null);

                }}

            />

            {/* ========================= */}
            {/* PANEL DE INFORMACIÓN */}
            {/* ========================= */}

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Menú */}

                <div className="bg-white rounded-3xl shadow-xl p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <BookOpen

                            className="text-green-700"

                        />

                        <h2 className="text-2xl font-bold text-green-900">

                            Información

                        </h2>

                    </div>

                    {

                        actual === 0 ? (

                            <div className="space-y-3">

                                {

                                    opcionesPrincipal.map((item, index) => (

                                        <button

                                            key={index}

                                            onClick={() =>

                                                setInformacion(item)

                                            }

                                            className="
                                                w-full
                                                rounded-xl
                                                bg-green-50
                                                hover:bg-green-100
                                                transition
                                                p-4
                                                text-left
                                                font-semibold
                                                text-green-900
                                            "

                                        >

                                            {item.titulo}

                                        </button>

                                    ))

                                }

                            </div>

                        ) : (

                            <button

                                onClick={() =>

                                    setInformacion({

                                        titulo: "Descripción",

                                        contenido: imagenes[actual].descripcion,

                                    })

                                }

                                className="
                                    w-full
                                    rounded-xl
                                    bg-green-50
                                    hover:bg-green-100
                                    transition
                                    p-4
                                    text-left
                                    font-semibold
                                    text-green-900
                                "

                            >

                                Descripción

                            </button>

                        )

                    }

                </div>

                {/* Tarjeta */}

                <div className="lg:col-span-2">

                    <AnimatePresence mode="wait">

                        {

                            informacion && (

                                <motion.div

                                    key={informacion.titulo}

                                    initial={{

                                        opacity: 0,

                                        x: 30,

                                    }}

                                    animate={{

                                        opacity: 1,

                                        x: 0,

                                    }}

                                    exit={{

                                        opacity: 0,

                                        x: -30,

                                    }}

                                    transition={{

                                        duration: .35,

                                    }}

                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-xl
                                        p-8
                                        min-h-[320px]
                                    "

                                >

                                    <h2 className="text-3xl font-bold text-green-900">

                                        {informacion.titulo}

                                    </h2>

                                    <div

                                        className="
                                            mt-6
                                            whitespace-pre-line
                                            leading-8
                                            text-gray-700
                                        "

                                    >

                                        {informacion.contenido}

                                    </div>

                                </motion.div>

                            )

                        }

                        {

                            !informacion && (

                                <motion.div

                                    initial={{

                                        opacity: 0,

                                    }}

                                    animate={{

                                        opacity: 1,

                                    }}

                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-xl
                                        min-h-[320px]
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-400
                                        text-xl
                                    "

                                >

                                    Selecciona una opción del panel izquierdo.

                                </motion.div>

                            )

                        }

                    </AnimatePresence>

                </div>

            </div>

        </div>

    );

}