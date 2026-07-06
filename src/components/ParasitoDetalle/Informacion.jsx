import {
    Microscope,
    PawPrint,
    Syringe,
    CircleAlert,
    FileText,
} from "lucide-react";

import { motion } from "framer-motion";

function Card({ icon: Icon, title, children }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.45,
            }}
            className="
                group
                bg-white
                rounded-3xl
                border
                border-green-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                overflow-hidden
            "
        >
            {/* Barra superior */}

            <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600" />

            <div className="p-8">
                <div className="flex items-center gap-5">
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            bg-gradient-to-br
                            from-green-500
                            to-green-700
                            text-white
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            group-hover:scale-110
                            transition-transform
                            duration-300
                        "
                    >
                        <Icon size={30} />
                    </div>

                    <h3 className="text-3xl font-bold text-green-900">
                        {title}
                    </h3>
                </div>

                <div
                    className="
                        mt-8
                        text-gray-600
                        leading-8
                        whitespace-pre-line
                        text-lg
                    "
                >
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

export default function Informacion({ parasito }) {
    return (
        <div>
            {/* Encabezado */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                className="mb-16"
            >
                <span
                    className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        bg-green-100
                        text-green-700
                        font-semibold
                    "
                >
                    🧬 Ficha Científica
                </span>

                <h2
                    className="
                        mt-6
                        text-5xl
                        font-black
                        text-green-900
                    "
                >
                    Información Científica
                </h2>

                <p
                    className="
                        mt-6
                        max-w-4xl
                        text-lg
                        text-gray-600
                        leading-8
                    "
                >
                    Explora la descripción general, morfología,
                    hospedadores, síntomas y tratamiento del
                    parásito. Esta información permite comprender
                    sus características biológicas, importancia
                    veterinaria y las medidas recomendadas para su
                    prevención y control.
                </p>
            </motion.div>

            {/* Descripción */}

            <Card
                icon={FileText}
                title="Descripción General"
            >
                {parasito.descripcion_general}
            </Card>

            {/* Tarjetas */}

            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                <Card
                    icon={Microscope}
                    title="Morfología"
                >
                    {parasito.morfologia}
                </Card>

                <Card
                    icon={PawPrint}
                    title="Hospedadores"
                >
                    {parasito.hospedadores}
                </Card>

                <Card
                    icon={CircleAlert}
                    title="Síntomas"
                >
                    {parasito.sintomas}
                </Card>

                <Card
                    icon={Syringe}
                    title="Tratamiento"
                >
                    {parasito.tratamiento}
                </Card>
            </div>
        </div>
    );
}