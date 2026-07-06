import { Link } from "react-router-dom";
import {
    Bug,
    Mail,
    GraduationCap,
    Copyright,
} from "lucide-react";
import Container from "../Container/Container";

export default function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="bg-green-950 text-white mt-24">

            <Container>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-14">

                    <div>

                        <div className="flex items-center gap-3">

                            <Bug
                                size={36}
                                className="text-green-400"
                            />

                            <div>

                                <h2 className="font-bold text-2xl">
                                    Parasitología
                                </h2>

                                <p className="text-green-300 text-sm">
                                    Atlas Veterinario
                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-green-200 leading-7">

                            Plataforma educativa desarrollada para la enseñanza
                            de la parasitología veterinaria mediante imágenes,
                            mapas epidemiológicos y realidad aumentada.

                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-5">
                            Navegación
                        </h3>

                        <ul className="space-y-3">

                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/parasitos">Parásitos</Link></li>
                            <li><Link to="/mapa">Mapa</Link></li>
                            <li><Link to="/quiz">Quiz</Link></li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-5">
                            Proyecto
                        </h3>

                        <div className="space-y-4">

                            <div className="flex gap-3">

                                <GraduationCap className="text-green-400" />

                                <span>

                                    Universidad Tecnológica de Pereira

                                </span>

                            </div>

                            <div>

                                Ingeniería de Sistemas

                            </div>

                            <div>

                                Proyecto de Grado

                            </div>

                        </div>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-5">

                            Contacto

                        </h3>

                        <div className="flex gap-3">

                            <Mail className="text-green-400" />

                            <span>

                                j.candamil@utp.edu.co

                            </span>

                        </div>

                    </div>

                </div>

            </Container>

            <div className="border-t border-green-900">

                <Container>

                    <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-green-300">

                        <div className="flex items-center gap-2">

                            <Copyright size={16} />

                            {year} Atlas Interactivo de Parasitología Veterinaria

                        </div>

                        <span>

                            React + Laravel

                        </span>

                    </div>

                </Container>

            </div>

        </footer>

    );

}