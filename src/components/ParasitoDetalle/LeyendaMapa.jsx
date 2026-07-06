export default function LeyendaMapa() {

    return (

        <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
        ">

            <h3 className="font-bold text-xl text-green-900">

                Nivel de presencia

            </h3>

            <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-red-500"/>

                    Alta

                </div>

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-yellow-400"/>

                    Media

                </div>

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-green-500"/>

                    Baja

                </div>

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-gray-200"/>

                    Sin registros

                </div>

            </div>

        </div>

    );

}