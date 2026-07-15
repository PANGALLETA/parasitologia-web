import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bug, Menu, X } from "lucide-react";
import Container from "../Container/Container";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Parásitos", path: "/parasitos" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

            <Container className="h-20 flex items-center justify-between">

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <Bug
                        size={34}
                        className="text-green-700"
                    />

                    <div>
                        <h1 className="text-xl font-bold text-green-800">
                            Parasitología
                        </h1>

                        <p className="text-xs text-gray-500">
                            Atlas Veterinario
                        </p>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">

                    {links.map((link) => (

                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-green-700 font-semibold"
                                    : "text-gray-700 hover:text-green-700 transition"
                            }
                        >
                            {link.name}
                        </NavLink>

                    ))}

                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                >
                    {open ? (
                        <X
                            size={30}
                            className="text-green-700"
                        />
                    ) : (
                        <Menu
                            size={30}
                            className="text-green-700"
                        />
                    )}
                </button>

            </Container>

            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
                    open ? "max-h-96" : "max-h-0"
                }`}
            >

                <Container>

                    <nav className="flex flex-col py-4">

                        {links.map((link) => (

                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `py-4 border-b ${
                                        isActive
                                            ? "text-green-700 font-semibold"
                                            : "text-gray-700"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>

                        ))}

                    </nav>

                </Container>

            </div>

        </header>
    );
}