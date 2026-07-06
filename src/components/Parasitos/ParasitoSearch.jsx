import { Search, QrCode } from "lucide-react";

export default function ParasitoSearch({
    value,
    onChange,
    onQrClick,
    total,
}) {
    return (
        <div className="mt-10">

            <div className="relative">

                <Search
                    size={22}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Buscar por nombre común, científico, familia o género..."
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-green-100
                        bg-white
                        py-5
                        pl-14
                        pr-20
                        text-lg
                        shadow-lg
                        outline-none
                        focus:border-green-500
                        focus:ring-4
                        focus:ring-green-100
                        transition
                    "
                />

                <button
                    onClick={onQrClick}
                    title="Buscar mediante código QR"
                    className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        w-12
                        h-12
                        rounded-xl
                        bg-green-600
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-green-700
                        transition
                    "
                >
                    <QrCode size={22} />
                </button>

            </div>

            <p className="mt-3 text-sm text-gray-500">

                {total} especies registradas

            </p>

        </div>
    );
}