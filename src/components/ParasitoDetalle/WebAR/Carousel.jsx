import { motion } from "framer-motion";

export default function Carousel({

    imagenes,

    actual,

    onSelect,

}) {

    return (

        <div className="mt-8">

            <div className="flex gap-5 overflow-x-auto pb-2">

                {imagenes.map((img, index) => (

                    <motion.button

                        whileHover={{

                            scale: 1.08,

                            y: -5,

                        }}

                        key={index}

                        onClick={() => onSelect(index)}

                        className={`
                            flex-shrink-0
                            rounded-2xl
                            overflow-hidden
                            border-4
                            transition-all
                            ${
                                actual === index

                                    ? "border-green-600"

                                    : "border-transparent"
                            }
                        `}

                    >

                        <img

                            src={img.imagen}

                            className="w-36 h-24 object-cover"

                        />

                        <div className="bg-white py-2 font-semibold">

                            {img.nombre}

                        </div>

                    </motion.button>

                ))}

            </div>

        </div>

    );

}