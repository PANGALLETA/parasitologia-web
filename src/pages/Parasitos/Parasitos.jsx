import { useEffect, useState } from "react";

import { getParasitos } from "../../services/parasitoService";

import ParasitoGrid from "../../components/Parasitos/ParasitoGrid";
import ParasitoSearch from "../../components/Parasitos/ParasitoSearch";
import QrScannerModal from "../../components/Parasitos/QrScannerModal";
import { useNavigate } from "react-router-dom";

export default function Parasitos() {

    const [parasitos, setParasitos] = useState([]);

    const [filtered, setFiltered] = useState([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const [openQr, setOpenQr] = useState(false);

    useEffect(() => {

        loadParasitos();

    }, []);

    useEffect(() => {

        if (!search.trim()) {

            setFiltered(parasitos);

            return;

        }

        const text = search.toLowerCase();

        setFiltered(

            parasitos.filter((p) =>

                p.nombre_comun.toLowerCase().includes(text) ||

                p.nombre_cientifico.toLowerCase().includes(text) ||

                p.familia.toLowerCase().includes(text) ||

                p.genero.toLowerCase().includes(text)

            )

        );

    }, [search, parasitos]);

    async function loadParasitos() {

        try {

            const response = await getParasitos();

            setParasitos(response.data);

            setFiltered(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    function handleQr() {

        setOpenQr(true);

    }

        return (

        <section className="bg-gradient-to-b from-green-50 to-white min-h-screen py-20">

            <div className="container mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                        🦠 Atlas Científico
                    </span>

                    <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-green-900">
                        Atlas de Parásitos
                    </h1>

                    <p className="mt-5 text-lg text-gray-600 leading-8">
                        Explora información científica sobre especies de importancia veterinaria.
                        Busca por nombre común, nombre científico, familia o escanea un código QR.
                    </p>

                </div>

                <ParasitoSearch
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onQrClick={handleQr}
                    total={filtered.length}
                />

                {

                    loading ? (

                        <div className="mt-16 text-center text-gray-500">
                            Cargando...
                        </div>

                    ) : (

                        <ParasitoGrid
                            parasitos={filtered}
                        />

                    )

                }

                {/* Modal QR */}

                <QrScannerModal
                    open={openQr}
                    onClose={() => setOpenQr(false)}
                    onSuccess={(uuid) => {

                        setOpenQr(false);

                        navigate(`/parasito/${uuid}`);

                    }}
                />

            </div>

        </section>

    );
}