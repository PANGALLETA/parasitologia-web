import { RotateCcw, Trophy } from "lucide-react";

export default function Resultado({

    puntaje,

    total,

    onRestart,

}) {

    const porcentaje =
        Math.round((puntaje / total) * 100);

    return (

        <div className="bg-white rounded-3xl shadow-xl p-14 text-center">

            <Trophy
                className="mx-auto text-yellow-500"
                size={70}
            />

            <h2 className="mt-6 text-4xl font-bold text-green-900">

                ¡Quiz Finalizado!

            </h2>

            <p className="mt-8 text-6xl font-extrabold text-green-700">

                {puntaje} / {total}

            </p>

            <p className="mt-4 text-xl text-gray-600">

                {porcentaje}% de respuestas correctas

            </p>

            <button

                onClick={onRestart}

                className="

                    mt-10
                    px-8
                    py-4
                    rounded-xl
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    font-semibold
                    inline-flex
                    items-center
                    gap-2

                "

            >

                <RotateCcw size={18}/>

                Intentar nuevamente

            </button>

        </div>

    );

}