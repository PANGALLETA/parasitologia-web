import { useState } from "react";

import ProgressBar from "./ProgressBar";
import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

export default function Quiz({ preguntas = [] }) {

    const [actual, setActual] = useState(0);
    const [puntaje, setPuntaje] = useState(0);

    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

    const [mostrarResultado, setMostrarResultado] = useState(false);

    const [finalizado, setFinalizado] = useState(false);

    if (!preguntas.length) {
        return (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-green-900">
                    Quiz no disponible
                </h2>

                <p className="mt-4 text-gray-500">
                    Este parásito todavía no tiene preguntas.
                </p>
            </div>
        );
    }

    function seleccionarRespuesta(id) {
        if (mostrarResultado) return;
        setRespuestaSeleccionada(id);
    }

    function siguientePregunta() {

        if (!respuestaSeleccionada) return;

        setMostrarResultado(true);

        const seleccion = preguntas[actual].respuestas.find(
            r => r.id === respuestaSeleccionada
        );

        if (seleccion?.es_correcta) {
            setPuntaje(p => p + 1);
        }

        setTimeout(() => {

            if (actual === preguntas.length - 1) {
                setFinalizado(true);
                return;
            }

            setActual(a => a + 1);
            setRespuestaSeleccionada(null);
            setMostrarResultado(false);

        }, 1200);

    }

    function reiniciar() {
        setActual(0);
        setPuntaje(0);
        setRespuestaSeleccionada(null);
        setMostrarResultado(false);
        setFinalizado(false);
    }

    if (finalizado) {
        return (
            <Resultado
                puntaje={puntaje}
                total={preguntas.length}
                onRestart={reiniciar}
            />
        );
    }

    return (
        <div className="space-y-10">

            <ProgressBar
                actual={actual + 1}
                total={preguntas.length}
            />

            <Pregunta
                pregunta={preguntas[actual]}
                indice={actual}
                total={preguntas.length}
                respuestaSeleccionada={respuestaSeleccionada}
                mostrarResultado={mostrarResultado}
                onSeleccionar={seleccionarRespuesta}
                onSiguiente={siguientePregunta}
            />

        </div>
    );

}