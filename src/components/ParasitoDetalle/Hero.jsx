import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero({ parasito }) {

    function scrollInfo() {

        document
            .getElementById("tabs")
            ?.scrollIntoView({

                behavior: "smooth",

            });

    }

    return (

        <section className="relative h-screen">

            <img

                src={parasito.imagen_principal}

                alt={parasito.nombre_comun}

                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-center
                "

            />

            <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/60
                to-black/10
            " />

            <div className="
                relative
                z-10
                h-full
                container
                mx-auto
                px-6
                flex
                flex-col
                justify-end
                pb-24
            ">

                <motion.div

                    initial={{

                        opacity:0,

                        y:40,

                    }}

                    animate={{

                        opacity:1,

                        y:0,

                    }}

                    transition={{

                        duration:.8,

                    }}

                >

                    <p className="
                        text-green-300
                        uppercase
                        tracking-[5px]
                        font-semibold
                    ">

                        Atlas Interactivo

                    </p>

                    <h1 className="
                        mt-4
                        text-white
                        text-5xl
                        lg:text-7xl
                        font-black
                    ">

                        {parasito.nombre_comun}

                    </h1>

                    <p className="
                        italic
                        text-2xl
                        text-green-100
                        mt-4
                    ">

                        {parasito.nombre_cientifico}

                    </p>

                    <div className="
                        mt-8
                        flex
                        gap-3
                        flex-wrap
                    ">

                        <span className="
                            px-4
                            py-2
                            rounded-full
                            bg-green-600
                            text-white
                        ">

                            {parasito.familia}

                        </span>

                        <span className="
                            px-4
                            py-2
                            rounded-full
                            bg-white/20
                            backdrop-blur
                            text-white
                        ">

                            {parasito.genero}

                        </span>

                    </div>

                </motion.div>

                <motion.button

                    animate={{

                        y:[0,10,0],

                    }}

                    transition={{

                        repeat:Infinity,

                        duration:1.8,

                    }}

                    onClick={scrollInfo}

                    className="
                        absolute
                        bottom-8
                        left-1/2
                        -translate-x-1/2
                        text-white
                    "

                >

                    <ChevronDown size={42}/>

                </motion.button>

            </div>

        </section>

    );

}