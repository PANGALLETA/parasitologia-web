export default function SectionTitle({
    title,
    subtitle,
}) {
    return (
        <div className="text-center mb-14">

            <h2 className="
                text-3xl
                md:text-5xl
                font-bold
                text-green-900
            ">
                {title}
            </h2>

            {subtitle && (
                <p className="
                    mt-4
                    text-gray-600
                    max-w-3xl
                    mx-auto
                ">
                    {subtitle}
                </p>
            )}

        </div>
    );
}