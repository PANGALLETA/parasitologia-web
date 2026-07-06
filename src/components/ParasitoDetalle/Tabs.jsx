import {
    FileText,
    Bug,
    MapPinned,
    Brain,
    Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";

const tabs = [
    {
        id: "Información",
        label: "Información",
        icon: FileText,
    },
    {
        id: "Partes",
        label: "Partes",
        icon: Bug,
    },
    {
        id: "Mapa",
        label: "Mapa",
        icon: MapPinned,
    },
    {
        id: "Quiz",
        label: "Quiz",
        icon: Brain,
    },
    {
        id: "WebAR",
        label: "WebAR",
        icon: Smartphone,
    },
];

export default function Tabs({ active, onChange }) {

    return (

        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-green-100 shadow-sm">

            <div className="container mx-auto px-6">

                <div className="flex justify-center gap-5 overflow-x-auto py-5">

                    {

                        tabs.map((tab) => {

                            const Icon = tab.icon;

                            const selected = active === tab.id;

                            return (

                                <motion.button

                                    key={tab.id}

                                    whileTap={{ scale: .96 }}

                                    onClick={() => onChange(tab.id)}

                                    className={`
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        px-6
                                        py-3
                                        rounded-2xl
                                        font-semibold
                                        transition-all
                                        duration-300
                                        whitespace-nowrap
                                        ${
                                            selected
                                                ? "bg-green-600 text-white shadow-xl"
                                                : "bg-green-50 text-green-800 hover:bg-green-100"
                                        }
                                    `}

                                >

                                    <Icon size={20} />

                                    {tab.label}

                                    {

                                        selected && (

                                            <motion.div

                                                layoutId="tab"

                                                className="absolute inset-0 rounded-2xl border-2 border-green-300"

                                            />

                                        )

                                    }

                                </motion.button>

                            );

                        })

                    }

                </div>

            </div>

        </div>

    );

}