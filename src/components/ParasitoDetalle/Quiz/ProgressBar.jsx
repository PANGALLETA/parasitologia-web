export default function ProgressBar({

    actual,

    total,

}) {

    const porcentaje =
        (actual / total) * 100;

    return (

        <div>

            <div className="flex justify-between mb-3">

                <div>

                    <h3 className="font-bold text-green-900">

                        Progreso

                    </h3>

                    <p>

                        Pregunta {actual} de {total}

                    </p>

                </div>

                <div className="bg-green-100 rounded-full px-5 py-2 font-bold text-green-700">

                    {Math.round(porcentaje)}%

                </div>

            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

                <div

                    className="h-full bg-green-600 transition-all duration-500"

                    style={{
                        width: `${porcentaje}%`
                    }}

                />

            </div>

        </div>

    );

}