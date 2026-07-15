import { motion } from "framer-motion";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-green-50 to-white pt-32 pb-20 overflow-hidden">

            <Container>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Texto */}

                    <div>

                        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                            Plataforma educativa veterinaria
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-green-900 leading-tight">

                            Atlas Interactivo de
                            <br />
                            Parasitología Veterinaria

                        </h1>

                        <p className="mt-8 text-lg text-gray-600 leading-8">

                            Aprende sobre ácaros y garrapatas mediante imágenes
                            de alta resolución, mapas epidemiológicos,
                            cuestionarios interactivos y realidad aumentada.

                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <Link to="/parasitos">

                                <Button>

                                    Explorar Atlas

                                </Button>

                            </Link>

                        </div>

                    </div>

                    {/* Video */}

                    <div className="flex justify-center">

                        <motion.div

                            animate={{
                                scale: [1, 1.015, 1],
                                boxShadow: [
                                    "0 0 30px rgba(113, 245, 161, 0.94), 0 0 50px rgba(34,197,94,.20), 0 30px 80px rgba(0,0,0,.18)",
                                    "0 0 50px rgba(90, 241, 145, 0.6), 0 0 120px rgba(34,197,94,.35), 0 30px 90px rgba(0,0,0,.22)",
                                    "0 0 20px rgba(91, 250, 149, 0.35), 0 0 50px rgba(34,197,94,.20), 0 30px 80px rgba(0,0,0,.18)",
                                ],
                            }}

                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}

                            className="
                                relative
                                w-[340px]
                                h-[340px]
                                sm:w-[420px]
                                sm:h-[420px]
                                lg:w-[560px]
                                lg:h-[560px]
                                rounded-full
                                overflow-hidden
                                border
                                border-green-300/30
                            "
                        >

                            {/* Resplandor interno */}

                            <motion.div

                                animate={{
                                    opacity: [0.25, 0.45, 0.25],
                                    scale: [1, 1.05, 1],
                                }}

                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}

                                className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-green-400/10
                                    blur-2xl
                                    z-0
                                "

                            />

                            {/* Video */}

                            <motion.video

                                autoPlay
                                muted
                                loop
                                playsInline

                                animate={{
                                    scale: [1.03, 1.06, 1.03],
                                }}

                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}

                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    rounded-full
                                    z-10
                                "

                            >

                                <source
                                    src="/videos/hero.mp4"
                                    type="video/mp4"
                                />

                            </motion.video>

                        </motion.div>

                    </div>

                </div>

            </Container>

        </section>
    );
}