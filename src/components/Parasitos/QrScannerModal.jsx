import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { X } from "lucide-react";

export default function QrScannerModal({
    open,
    onClose,
    onSuccess,
}) {

    useEffect(() => {

        if (!open) return;

        const html5QrCode = new Html5Qrcode("qr-reader");

        html5QrCode.start(

            {
                facingMode: "environment",
            },

            {
                fps: 10,
                qrbox: 250,
            },

            (decodedText) => {

                const uuid = decodedText.trim();

                const uuidRegex =
                    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

                if (!uuidRegex.test(uuid)) {

                    alert("El código QR no contiene un UUID válido.");

                    return;

                }

                html5QrCode.stop();

                onSuccess(uuid);

            },
            () => {}

        );

        return () => {

            html5QrCode.stop().catch(() => {});

        };

    }, [open]);

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

            <div className="bg-white rounded-3xl w-full max-w-xl p-8 relative">

                <button

                    onClick={onClose}

                    className="absolute right-5 top-5"

                >

                    <X />

                </button>

                <h2 className="text-3xl font-bold text-green-900">

                    Escanear código QR

                </h2>

                <p className="mt-2 text-gray-500">

                    Acerca la cámara al código QR del parásito.

                </p>

                <div

                    id="qr-reader"

                    className="mt-8 rounded-xl overflow-hidden"

                />

            </div>

        </div>

    );

}