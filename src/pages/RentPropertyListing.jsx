import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import rentProperties from "../data/rentProperties";
import Breadcrumb from "../components/Breadcrumb";

const RentPropertyListing = () => {
  const { category } = useParams();

  const currentCategoryProperties = rentProperties.filter(
    (item) => item.category === category
  );

  const cities = [
    ...new Set(
      currentCategoryProperties
        .map((item) => item.city)
        .filter(Boolean)
    ),
  ];
  const rentOptions = [
    {
      label: "Under ₹25,000",
      value: "under25",
    },
    {
      label: "₹25,000 - ₹50,000",
      value: "25to50",
    },
    {
      label: "₹50,000 - ₹1 Lakh",
      value: "50to100",
    },
    {
      label: "Above ₹1 Lakh",
      value: "above100",
    },
  ];

  const [filter, setFilter] = useState({
    city: "",
    rent: "",
  });

  const [prevCategory, setPrevCategory] = useState(category);
  if (prevCategory !== category) {
    setPrevCategory(category);
    setFilter({ city: "", rent: "" });
  }

  const uniqueByKey = (items) => {
    const seen = new Set();
    return items.filter((item) => {
      const key = item.slug || item.id || item.title;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const filteredProperties = uniqueByKey(
    rentProperties.filter((item) => {
      const categoryMatch =
        item.category === category;

      const cityMatch =
        filter.city === "" ||
        item.city === filter.city;

      let rentMatch = true;

      switch (filter.rent) {
        case "under25":
          rentMatch = item.rent < 25;
          break;

        case "25to50":
          rentMatch =
            item.rent >= 25 &&
            item.rent <= 50;
          break;

        case "50to100":
          rentMatch =
            item.rent > 50 &&
            item.rent <= 100;
          break;

        case "above100":
          rentMatch = item.rent > 100;
          break;

        default:
          rentMatch = true;
      }

      return (
        categoryMatch &&
        cityMatch &&
        rentMatch
      );
    })
  );

  const pageTitle = category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>

      {/* Banner */}

      <section className="relative h-[350px]">

        <img
          src="/hero-bg.png"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-white text-5xl font-bold text-center">
              Rent {pageTitle}
            </h1>

          </motion.div>

        </div>

      </section>

      <Breadcrumb />

      {/* Filter */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-xl p-6">

          <div className="grid md:grid-cols-3 gap-4">

            <select
              value={filter.city}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  city: e.target.value
                })
              }
              className="border rounded-lg p-3"
            >

              <option value="">
                All Cities
              </option>

              {cities.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>
            <select
  value={filter.rent}
  onChange={(e) =>
    setFilter({
      ...filter,
      rent: e.target.value,
    })
  }
  className="border rounded-lg p-3"
>
  <option value="">
    Any Rent
  </option>

  {rentOptions.map((item) => (
    <option
      key={item.value}
      value={item.value}
    >
      {item.label}
    </option>
  ))}
</select>

            <button className="bg-green-700 text-white rounded-lg py-3">
              Search
            </button>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        {filteredProperties.length > 0 ? (

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {filteredProperties.map((item) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
              >

                <Link
                  to={`/rent-property/${item.category}/${item.slug}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300 block"
                >

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-green-700 font-semibold mt-2">
                      {item.rentPrice}
                    </p>

                    <p className="text-gray-500 mt-3">
                      📍 {item.location}{" "} <strong className="text-black">{item.city}</strong>
                    </p>

                    <div className="flex justify-between mt-4">

                      <div>

                        <p className="text-gray-500 text-sm">
                          Area
                        </p>

                        <h3 className="font-semibold">
                          {item.area}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500 text-sm">
                          Type
                        </p>

                        <h3 className="font-semibold">
                          {item.propertyType}
                        </h3>

                      </div>

                    </div>

                    <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 duration-300">

                      View Details

                    </button>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold">
              No Property Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try selecting another city.
            </p>

          </div>

        )}

      </section>

      {/* SEO */}

      {filteredProperties.length > 0 && (

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="bg-gray-50 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-5">

              {filteredProperties[0].seo.title}

            </h2>

            <p className="text-gray-600 leading-8 whitespace-pre-line">

              {filteredProperties[0].seo.content}

            </p>

          </div>

        </section>

      )}

    </div>
  );
};

export default RentPropertyListing;