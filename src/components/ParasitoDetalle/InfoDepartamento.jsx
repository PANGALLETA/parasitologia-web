export default function InfoDepartamento({ departamento }) {

    if (!departamento) {

        return (

            <div className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
            ">

                <h3 className="text-2xl font-bold text-green-900">

                    Departamento

                </h3>

                <p className="mt-6 text-gray-500 leading-8">

                    Selecciona un departamento en el mapa para visualizar
                    la información epidemiológica.

                </p>

            </div>

        );

    }

    return (

        <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
        ">

            <h3 className="text-3xl font-black text-green-900">

                {departamento.departamento}

            </h3>

            <div className="mt-8">

                <span className="font-semibold">

                    Nivel de presencia

                </span>

                <div className="mt-3 text-xl capitalize">

                    {departamento.nivel_presencia}

                </div>

            </div>

            <div className="mt-8">

                <h4 className="font-semibold">

                    Observaciones

                </h4>

                <p className="mt-3 leading-8 text-gray-600">

                    {departamento.observaciones}

                </p>

            </div>

        </div>

    );

}