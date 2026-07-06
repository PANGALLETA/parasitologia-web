import ParasitoCard from "./ParasitoCard";

export default function ParasitoGrid({ parasitos }) {

    return (

        <div className="

            mt-12

            grid

            md:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4

            gap-8

        ">

            {

                parasitos.map((parasito) => (

                    <ParasitoCard

                        key={parasito.uuid}

                        parasito={parasito}

                    />

                ))

            }

        </div>

    );

}