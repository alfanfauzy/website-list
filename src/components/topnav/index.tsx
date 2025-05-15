import { NavLink } from "react-router-dom";

const navLinks = [
    { label: "Now Playing", to: "/" },
    { label: "Popular", to: "/popular" },
    { label: "Upcoming", to: "/upcoming" },
    { label: "Top Rated", to: "/toprated" },
];

const TopNav = () => {
    return (
        <nav className="flex space-x-6 text-gray-400 font-medium">
            {navLinks.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        isActive
                            ? "text-gray-700 dark:text-white font-semibold"
                            : "hover:text-gray-700 dark:hover:text-white"
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default TopNav;
