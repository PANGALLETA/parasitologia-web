import {
    ArrowRight,
    MapPinned,
    Brain,
    Smartphone,
    Layers,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ParasitoCard({ parasito }) {

    return (

        <motion.div

            whileHover={{
                y: -10,
            }}

            transition={{
                duration: .3,
            }}

            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                group
                border
                border-green-100
            "

        >

            {/* Imagen */}

            <div className="relative h-72 overflow-hidden">

                <motion.img

                    whileHover={{
                        scale: 1.08,
                    }}

                    transition={{
                        duration: .5,
                    }}

                    src={parasito.imagen_principal}

                    alt={parasito.nombre_comun}

                    className="
                        w-full
                        h-full
                        object-cover
                    "

                />

                {/* Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/40
                    to-transparent
                " />

                {/* Familia */}

                <div className="
                    absolute
                    top-4
                    left-4
                    bg-green-600/90
                    backdrop-blur
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                ">

                    {parasito.familia}

                </div>

                {/* Nombre */}

                <div className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                        text-white
                    ">

                        {parasito.nombre_comun}

                    </h2>

                    <p className="
                        text-green-100
                        italic
                        mt-1
                    ">

                        {parasito.nombre_cientifico}

                    </p>

                </div>

            </div>

            {/* Contenido */}

            <div className="p-6">

                {/* Recursos */}

                <div className="
                    flex
                    flex-wrap
                    gap-3
                ">

                    {parasito.has_mapa && (

                        <div className="
                            flex
                            items-center
                            gap-2
                            bg-green-50
                            text-green-700
                            px-3
                            py-2
                            rounded-xl
                            text-sm
                        ">

                            <MapPinned size={18} />

                            <span>Mapa</span>

                        </div>

                    )}

                    {parasito.has_partes && (

                        <div className="
                            flex
                            items-center
                            gap-2
                            bg-green-50
                            text-green-700
                            px-3
                            py-2
                            rounded-xl
                            text-sm
                        ">

                            <Layers size={18} />

                            <span>Partes</span>

                        </div>

                    )}

                    {parasito.has_quiz && (

                        <div className="
                            flex
                            items-center
                            gap-2
                            bg-green-50
                            text-green-700
                            px-3
                            py-2
                            rounded-xl
                            text-sm
                        ">

                            <Brain size={18} />

                            <span>Quiz</span>

                        </div>

                    )}

                    {parasito.has_webar && (

                        <div className="
                            flex
                            items-center
                            gap-2
                            bg-green-50
                            text-green-700
                            px-3
                            py-2
                            rounded-xl
                            text-sm
                        ">

                            <Smartphone size={18} />

                            <span>WebAR</span>

                        </div>

                    )}

                </div>

                {/* Botón */}

                <Link

                    to={`/parasito/${parasito.uuid}`}

                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                    "

                >

                    Explorar especie

                    <ArrowRight
                        size={18}
                        className="
                            transition-transform
                            group-hover:translate-x-1
                        "
                    />

                </Link>

            </div>

        </motion.div>

    );

}