import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Pregunta({

    pregunta,

    indice,

    total,

    respuestaSeleccionada,

    mostrarResultado,

    onSeleccionar,

    onSiguiente,

}) {

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="bg-white rounded-3xl shadow-xl p-10"

        >

            <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                Pregunta {indice + 1} de {total}

            </span>

            <h2 className="mt-6 text-3xl font-bold text-green-900">

                {pregunta.pregunta}

            </h2>

            <div className="space-y-5 mt-10">

                {pregunta.respuestas.map((respuesta) => {

                    let estilos =
                        "border-gray-200 hover:border-green-400";

                    let icono = null;

                    if (mostrarResultado) {

                        if (respuesta.es_correcta) {

                            estilos =
                                "border-green-600 bg-green-100";

                            icono =
                                <CheckCircle2 className="text-green-600" />;

                        }

                        else if (
                            respuesta.id === respuestaSeleccionada
                        ) {

                            estilos =
                                "border-red-600 bg-red-100";

                            icono =
                                <XCircle className="text-red-600" />;

                        }

                    }

                    else if (
                        respuesta.id === respuestaSeleccionada
                    ) {

                        estilos =
                            "border-green-600 bg-green-50";

                    }

                    return (

                        <button

                            key={respuesta.id}

                            disabled={mostrarResultado}

                            onClick={() => onSeleccionar(respuesta.id)}

                            className={`

                                w-full
                                rounded-2xl
                                border-2
                                p-6
                                flex
                                justify-between
                                items-center
                                text-left
                                transition

                                ${estilos}

                            `}

                        >

                            <span>

                                {respuesta.respuesta}

                            </span>

                            {icono}

                        </button>

                    );

                })}

            </div>

            <div className="flex justify-end mt-10">

                <button

                    disabled={
                        !respuestaSeleccionada ||
                        mostrarResultado
                    }

                    onClick={onSiguiente}

                    className="

                        px-8
                        py-4
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        disabled:bg-gray-300
                        text-white
                        font-semibold

                    "

                >

                    Siguiente →

                </button>

            </div>

        </motion.div>

    );

}