import { motion } from "framer-motion";

import ColombiaMap from "./ColombiaMap";
import InfoDepartamento from "./InfoDepartamento";
import LeyendaMapa from "./LeyendaMapa";

import { useState } from "react";

export default function Mapa({ mapas }) {

    const [departamento, setDepartamento] = useState(null);

    return (

        <section>

            <motion.div

                initial={{ opacity:0,y:20 }}

                animate={{ opacity:1,y:0 }}

                className="mb-14"

            >

                <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                    🗺️ Vigilancia Epidemiológica

                </span>

                <h2 className="mt-5 text-5xl font-black text-green-900">

                    Distribución en Colombia

                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl">

                    Explora los departamentos donde se ha reportado la presencia del
                    parásito y consulta el nivel epidemiológico registrado.

                </p>

            </motion.div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

                <ColombiaMap

                    mapas={mapas}

                    onSelect={setDepartamento}

                />

                <div className="space-y-6">

                    <InfoDepartamento

                        departamento={departamento}

                    />

                    <LeyendaMapa/>

                </div>

            </div>

        </section>

    );

}