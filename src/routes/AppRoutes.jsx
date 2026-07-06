import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Parasitos from "../pages/Parasitos/Parasitos";
import ParasitoDetalle from "../pages/ParasitoDetalle/ParasitoDetalle";
import Mapa from "../pages/Mapa";
import Quiz from "../pages/Quiz";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route
                path="/parasitos"
                element={<Parasitos />}
            />

            <Route
                path="/parasito/:uuid"
                element={<ParasitoDetalle />}
            />

            <Route
                path="/mapa"
                element={<Mapa />}
            />

            <Route
                path="/quiz"
                element={<Quiz />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}