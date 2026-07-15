import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getParasito } from "../../services/parasitoService";

import Hero from "../../components/ParasitoDetalle/Hero";
import Tabs from "../../components/ParasitoDetalle/Tabs";
import Informacion from "../../components/ParasitoDetalle/Informacion";
import Partes from "../../components/ParasitoDetalle/Partes";
import Mapa from "../../components/ParasitoDetalle/Mapa";
import Quiz from "../../components/ParasitoDetalle/Quiz/Quiz";
import WebAR from "../../components/ParasitoDetalle/WebAR/WebAR";

export default function ParasitoDetalle() {

    const { uuid } = useParams();

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState(null);

    const [tab, setTab] = useState("Información");

    useEffect(() => {

        loadParasito();

    }, [uuid]);

    async function loadParasito() {

        try {

            const response = await getParasito(uuid);

            setData(response);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="h-screen flex items-center justify-center">

                <div className="text-2xl font-semibold text-green-700">

                    Cargando...

                </div>

            </div>

        );

    }

    return (

        <>

            <Hero parasito={data.parasito} />

            <div id="tabs">

                <Tabs

                    active={tab}

                    onChange={setTab}

                />

            </div>

            <section
                className="
                    bg-gradient-to-b
                    from-white
                    via-green-50
                    to-white
                "
            >

                <div className="container mx-auto px-6 py-16">

                    {tab === "Información" && (

                        <Informacion

                            parasito={data.parasito}

                        />

                    )}

                    {tab === "Partes" && (

                        <Partes

                            partes={data.partes}

                        />

                    )}

                    {tab === "Mapa" && (

                        <Mapa

                            mapas={data.mapas}

                        />

                    )}

                    {tab === "Quiz" && (

                        <Quiz

                            preguntas={data.preguntas}

                        />

                    )}

                    {tab === "WebAR" && (

                        <WebAR

                            parasito={data.parasito}

                            partes={data.partes}

                        />

                    )}

                </div>

            </section>

        </>

    );

}