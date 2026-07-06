export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
}) {

    const styles = {
        primary:
            "bg-green-700 hover:bg-green-800 text-white",

        secondary:
            "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

        white:
            "bg-white text-green-800 hover:bg-gray-100",
    };

    return (
        <button
            onClick={onClick}
            className={`
                ${styles[variant]}
                px-6
                py-3
                rounded-xl
                font-semibold
                transition-all
                duration-300
                shadow-sm
                hover:shadow-lg
                ${className}
            `}
        >
            {children}
        </button>
    );
}