import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const buyCategories = [
  "Plot",
  "Villa",
  "Studio Apartment",
  "Office Space",
  "Residential Fresh",
  "Residential Resale",
  "Independent House",
  "Commercial Fresh",
];
const rentCategories = [
  "Apartments",
  "Villas",
  "Office Space",
  "Shops",
  "Warehouse",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rentDropdownOpen, setRentDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-[#0B7A5C]"
          >
            <img src="/logo.png" alt="" className="w-55 h-30" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-[#0B7A5C]"
                  : "text-gray-700 hover:text-[#0B7A5C]"
                }`
              }
            >
              Home
            </NavLink>

            {/* Buy Property */}
            <div className="relative group">
              <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-[#0B7A5C] transition">
                Buy Property
                <FaChevronDown className="text-xs" />
              </button>

              <div className="absolute -left-45 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-xl w-[600px] px-3 py-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    {buyCategories.map((item) => (
                      <NavLink
                        key={item}
                        to={`/${item.toLowerCase().replaceAll(" ", "-")}`}
                        className="px-3 py-2 rounded-xl hover:bg-[#0B7A5C] hover:text-white hover:border-[#0B7A5C] transition"
                      >
                        {item}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/upcoming-projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B7A5C] font-medium"
                  : "text-gray-700 hover:text-[#0B7A5C]"
              }
            >
              Upcoming Projects
            </NavLink>

            <div className="relative group">
              <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-[#0B7A5C] transition">
                Rent Property
                <FaChevronDown className="text-xs" />
              </button>

              <div className="absolute -left-5 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <div className="bg-white rounded-2xl shadow-xl w-45 p-4">

                  {rentCategories.map((item) => (

                    <NavLink
                      key={item}
                      to={`/rent-property/${item
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                      className="block px-4 py-2 rounded-xl hover:bg-[#0B7A5C] hover:text-white transition"
                    >
                      {item}
                    </NavLink>

                  ))}

                </div>

              </div>

            </div>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B7A5C] font-medium"
                  : "text-gray-700 hover:text-[#0B7A5C]"
              }
            >
              Events
            </NavLink>

            <Link
              to="/contact"
              className="px-4 py-2 bg-green-700 text-white rounded-lg"
            >
              Get Quotes
            </Link>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
      >

        <div className="p-5 space-y-2">

          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3"
          >
            Home
          </NavLink>

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center py-3"
          >
            Buy Property
            <FaChevronDown
              className={`transition ${dropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {dropdownOpen && (

            <div className="grid grid-cols-2 gap-2 mt-2 ml-3">

              {buyCategories.map((item) => (

                <NavLink
                  key={item}
                  to={`/buy/${item
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-1 text-center text-gray-600 hover:bg-[#0B7A5C] hover:text-white transition"
                >
                  {item}
                </NavLink>

              ))}

            </div>

          )}

          <NavLink
            to="/upcoming-projects"
            onClick={() => setMobileOpen(false)}
            className="block py-3"
          >
            Upcoming Projects
          </NavLink>

          <button
  onClick={() => setRentDropdownOpen(!rentDropdownOpen)}
  className="w-full flex justify-between items-center py-3"
>
  Rent Property

  <FaChevronDown
    className={`transition ${
      rentDropdownOpen ? "rotate-180" : ""
    }`}
  />
</button>

{rentDropdownOpen && (

  <div className="ml-4 mt-2 space-y-2">

    {rentCategories.map((item) => (

      <NavLink
        key={item}
        to={`/rent-property/${item
          .toLowerCase()
          .replaceAll(" ", "-")}`}
        onClick={() => setMobileOpen(false)}
        className="block py-1 text-gray-600 hover:text-[#0B7A5C]"
      >
        {item}
      </NavLink>

    ))}

  </div>

)}

          <NavLink
            to="/events"
            onClick={() => setMobileOpen(false)}
            className="block py-3"
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-green-600 py-2 px-4 rounded-2xl text-center text-white"
          >
            Get Quotes
          </NavLink>

        </div>

      </div>

    </header>
  );
};

export default Navbar;