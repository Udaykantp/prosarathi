import { Link, useLocation } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-wrap items-center gap-2 text-sm">

          <Link
            to="/"
            className="flex items-center gap-2 text-[#0B7A5C] hover:underline"
          >
            <FaHome />
            Home
          </Link>

          {pathnames.map((value, index) => {
            const to =
              "/" + pathnames.slice(0, index + 1).join("/");

            const isLast = index === pathnames.length - 1;

            const name = value
              .replaceAll("-", " ")
              .replace(/\b\w/g, (char) =>
                char.toUpperCase()
              );

            return (
              <div
                key={to}
                className="flex items-center gap-2"
              >
                <FaChevronRight className="text-xs text-gray-400" />

                {isLast ? (
                  <span className="font-semibold text-gray-800">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-[#0B7A5C] hover:underline"
                  >
                    {name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Breadcrumb;