import Container from "../Container/Container";
import {
    Bug,
    Microscope,
    MapPinned,
    CircleHelp,
} from "lucide-react";

export default function Stats({ stats }) {

    const cards = [
        {
            icon: Bug,
            value: stats.parasitos,
            label: "Parásitos",
        },
        {
            icon: Microscope,
            value: stats.partes,
            label: "Partes Anatómicas",
        },
        {
            icon: MapPinned,
            value: stats.mapas,
            label: "Registros Epidemiológicos",
        },
        {
            icon: CircleHelp,
            value: stats.preguntas,
            label: "Preguntas",
        },
    ];

    return (

        <section className="py-20 bg-white">

            <Container>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    {cards.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    bg-green-50
                                    rounded-3xl
                                    p-8
                                    text-center
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="flex justify-center">

                                    <Icon
                                        size={42}
                                        className="text-green-700"
                                    />

                                </div>

                                <h2 className="mt-5 text-4xl font-bold text-green-900">

                                    {item.value}

                                </h2>

                                <p className="mt-2 text-gray-600">

                                    {item.label}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </Container>

        </section>

    );

}