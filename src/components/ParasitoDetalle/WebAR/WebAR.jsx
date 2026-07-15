import { useEffect, useRef, useState } from "react";
import {
    Camera,
    CameraOff,
    ScanLine,
    Smartphone,
} from "lucide-react";

import Viewer3D from "./Viewer3D";

export default function WebAR({

    parasito,

    partes,

}) {

    return (

        <div className="bg-gradient-to-b from-green-50 to-white rounded-3xl shadow-xl p-10">

            <Viewer3D

                parasito={parasito}

                partes={partes}

            />

        </div>

    );

}