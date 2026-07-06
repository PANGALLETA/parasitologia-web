import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";

import { getHome } from "../services/homeService";

export default function Home() {

    const [loading, setLoading] = useState(true);

    const [home, setHome] = useState({
        stats: {
            parasitos: 0,
            partes: 0,
            mapas: 0,
            preguntas: 0,
        },
        featured: [],
    });

    useEffect(() => {
        loadHome();
    }, []);

    async function loadHome() {

        try {

            const data = await getHome();

            setHome(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (
            <MainLayout>

                <div className="flex justify-center items-center h-[60vh]">

                    <p className="text-gray-500 text-lg">
                        Cargando información...
                    </p>

                </div>

            </MainLayout>
        );

    }

    return (

        <MainLayout>

            <Hero />

            <Stats stats={home.stats} />

            {/* Próximamente */}
            {/* <FeaturedSection parasites={home.featured} /> */}

        </MainLayout>

    );

}