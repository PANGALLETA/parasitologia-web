import ImageViewer from "./ImageViewer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bug,
    ChevronLeft,
    ChevronRight,
    Search,
} from "lucide-react";

export default function Partes({ partes }) {

    const [actual, setActual] =useState(0);
    const [viewer, setViewer] = useState(false);

    if (!partes || partes.length === 0) {

        return (

            <section className="py-20">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="
                        w-24
                        h-24
                        rounded-full
                        bg-green-100
                        flex
                        items-center
                        justify-center
                        mx-auto
                    ">

                        <Bug
                            size={42}
                            className="text-green-700"
                        />

                    </div>

                    <h2 className="mt-8 text-5xl font-black text-green-900">

                        Partes Anatómicas

                    </h2>

                    <p className="mt-6 text-lg text-gray-600">

                        Este parásito aún no tiene partes registradas.

                    </p>

                </div>

            </section>

        );

    }

    const parte = partes[actual];

    function siguiente() {

        setActual((actual + 1) % partes.length);

    }

    function anterior() {

        setActual(

            actual === 0

                ? partes.length - 1

                : actual - 1

        );

    }

    return (

        <section>

            {/* ENCABEZADO */}

            <div className="mb-14">

                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                    🕷️ Anatomía

                </span>

                <h2 className="mt-5 text-5xl font-black text-green-900">

                    Partes del Parásito

                </h2>

                <p className="mt-5 text-lg text-gray-600 max-w-3xl leading-8">

                    Explora cada estructura anatómica mediante imágenes científicas
                    de alta resolución.

                </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">

                {/* ================= IMAGEN ================= */}

                <motion.div

                    whileHover={{ y: -6 }}

                    transition={{ duration: .25 }}

                    className="
                        bg-white
                        rounded-[32px]
                        overflow-hidden
                        border
                        border-green-100
                        shadow-2xl
                    "

                >

                    {/* CABECERA */}

                    <div className="
                        flex
                        items-center
                        justify-between
                        px-8
                        py-5
                        bg-gradient-to-r
                        from-green-50
                        to-white
                        border-b
                    ">

                        <div>

                            <h3 className="text-2xl font-bold text-green-900">

                                Vista Anatómica

                            </h3>

                            <p className="text-gray-500">

                                Imagen científica HD

                            </p>

                        </div>

                        <button

                            onClick={() => setViewer(true)}

                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-green-600
                                hover:bg-green-700
                                text-white
                                flex
                                items-center
                                justify-center
                                shadow-lg
                                transition
                            "

                        >

                            <Search size={24} />

                        </button>

                    </div>

                    {/* IMAGEN */}

                    <div className="
                        bg-black
                        h-[620px]
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                    ">

                        <AnimatePresence mode="wait">

                            <motion.img

                                onClick={() => setViewer(true)}

                                key={parte.id}

                                src={parte.imagen}

                                alt={parte.nombre}

                                initial={{

                                    opacity:0,

                                    scale:.95

                                }}

                                animate={{

                                    opacity:1,

                                    scale:1

                                }}

                                exit={{

                                    opacity:0

                                }}

                                transition={{

                                    duration:.35

                                }}

                                whileHover={{

                                    scale:1.05

                                }}

                                className="
                                    max-w-full
                                    max-h-full
                                    object-contain
                                    cursor-zoom-in
                                "

                            />

                        </AnimatePresence>

                    </div>

                    {/* FOOTER */}

                    <div className="
                        flex
                        items-center
                        justify-between
                        px-8
                        py-6
                        border-t
                        bg-white
                    ">

                        <span className="text-gray-500">

                            Parte

                            <span className="ml-2 font-bold text-green-700">

                                {actual + 1}

                            </span>

                            de

                            <span className="ml-2 font-bold text-green-700">

                                {partes.length}

                            </span>

                        </span>

                        <span className="text-green-600 font-semibold">

                            Haz clic para ampliar

                        </span>

                    </div>

                </motion.div>

                {/* ================= INFORMACIÓN ================= */}

                <AnimatePresence mode="wait">

                    <motion.div

                        key={parte.id}

                        initial={{

                            opacity:0,

                            x:40

                        }}

                        animate={{

                            opacity:1,

                            x:0

                        }}

                        exit={{

                            opacity:0,

                            x:-40

                        }}

                        className="
                            bg-white
                            rounded-[32px]
                            border
                            border-green-100
                            shadow-2xl
                            p-10
                            flex
                            flex-col
                        "

                    >

                        <span className="
                            inline-flex
                            w-fit
                            px-4
                            py-2
                            rounded-full
                            bg-green-100
                            text-green-700
                            font-semibold
                        ">

                            Parte Anatómica

                        </span>

                        <h2 className="
                            mt-6
                            text-5xl
                            font-black
                            text-green-900
                        ">

                            {parte.nombre}

                        </h2>

                        <p className="
                            mt-8
                            text-lg
                            leading-9
                            text-gray-600
                            flex-1
                        ">

                            {parte.descripcion}

                        </p>

                        {/* Indicadores */}

                        <div className="
                            flex
                            justify-center
                            gap-3
                            mt-10
                        ">

                            {

                                partes.map((_, index) => (

                                    <button

                                        key={index}

                                        onClick={() => setActual(index)}

                                        className={`
                                            w-3
                                            h-3
                                            rounded-full
                                            transition-all
                                            duration-300
                                            ${
                                                actual === index

                                                    ? "bg-green-600 scale-125"

                                                    : "bg-green-200 hover:bg-green-400"
                                            }
                                        `}

                                    />

                                ))

                            }

                        </div>

                        {/* Navegación */}

                        <div className="
                            mt-12
                            flex
                            justify-between
                        ">

                            <button

                                onClick={anterior}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-green-100
                                    hover:bg-green-200
                                    transition
                                "

                            >

                                <ChevronLeft size={20} />

                                Anterior

                            </button>

                            <button

                                onClick={siguiente}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-green-600
                                    hover:bg-green-700
                                    text-white
                                    transition
                                "

                            >

                                Siguiente

                                <ChevronRight size={20} />

                            </button>

                        </div>

                    </motion.div>

                </AnimatePresence>

            </div>

            <ImageViewer
                open={viewer}
                image={parte.imagen}
                title={parte.nombre}
                onClose={() => setViewer(false)}
            />
        </section>
    );
}