import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import properties from "../data/properties";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { categorySeo } from "../data/categorySeo";
import { MdLocationPin } from "react-icons/md";


const PropertyListing = () => {

  const { category } = useParams();
  const safeCategory = category || "";
  const isCommercialCategory = safeCategory.includes("commercial");

  const budgetOptions = isCommercialCategory
    ? [
        { label: "Under ₹50K / PSF", value: "under50" },
        { label: "₹50K - ₹1L / PSF", value: "50to100" },
        { label: "₹1L - ₹2L / PSF", value: "100to200" },
        { label: "Above ₹2L / PSF", value: "above200" },
      ]
    : [
        { label: "Under ₹50L", value: "under50" },
        { label: "₹50L - ₹1Cr", value: "50to100" },
        { label: "₹1Cr - ₹2Cr", value: "100to200" },
        { label: "Above ₹2Cr", value: "above200" },
      ];

  const currentCategoryProperties = properties.filter(
    (item) => item.category === safeCategory
  );
  const cities = [
    ...new Set(
      currentCategoryProperties
        .map((item) => item.city)
        .filter(Boolean)
    ),
  ];
  const types = [
    ...new Set(
      currentCategoryProperties
        .map((item) => item.type)
        .filter(Boolean)
    ),
  ];

  const [filter, setFilter] = useState({
    city: "",
    budget: "",
    type: "",
  });

  const [prevCategory, setPrevCategory] = useState(safeCategory);
  if (prevCategory !== safeCategory) {
    setPrevCategory(safeCategory);
    setFilter({ city: "", budget: "", type: "" });
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

  const getComparableBudgetPrice = (item) => {
    const priceText = (item.priceText || "").toLowerCase();
    const matches = (item.priceText || "").match(/[\d,]+(?:\.\d+)?/g) || [];
    const numbers = matches
      .map((value) => Number(value.replace(/,/g, "")))
      .filter((value) => Number.isFinite(value));

    if (priceText.includes("price on request") || priceText.includes("on request")) {
      return null;
    }

    if (!numbers.length) {
      const numericPrice = Number(item.price);
      if (!Number.isFinite(numericPrice)) return null;
      return { value: numericPrice, unit: "default" };
    }

    const minNumber = Math.min(...numbers);
    const maxNumber = Math.max(...numbers);
    const baseValue = priceText.includes("cr") ? maxNumber * 100 : maxNumber;

    if (priceText.includes("psf") || priceText.includes("sq.ft") || priceText.includes("sqft")) {
      return { value: minNumber, unit: "psf" };
    }

    if (priceText.includes("cr")) {
      return { value: baseValue, unit: "lakh" };
    }

    if (priceText.includes("lakh") || priceText.includes("lac")) {
      return { value: minNumber, unit: "lakh" };
    }

    if (priceText.includes("starting from") || priceText.includes("onwards")) {
      return { value: minNumber, unit: "lakh" };
    }

    return { value: maxNumber, unit: "default" };
  };

  const matchesBudgetFilter = (item) => {
    if (!filter.budget) return true;

    const budgetValue = getComparableBudgetPrice(item);
    if (!budgetValue) return false;

    const { value, unit } = budgetValue;

    if (unit === "psf") {
      switch (filter.budget) {
        case "under50":
          return value < 50000;
        case "50to100":
          return value >= 50000 && value <= 100000;
        case "100to200":
          return value > 100000 && value <= 200000;
        case "above200":
          return value > 200000;
        default:
          return true;
      }
    }

    switch (filter.budget) {
      case "under50":
        return value < 50;
      case "50to100":
        return value >= 50 && value <= 100;
      case "100to200":
        return value > 100 && value <= 200;
      case "above200":
        return value > 200;
      default:
        return true;
    }
  };

  const filteredProperties = uniqueByKey(
    properties.filter((item) => {
      const categoryMatch = item.category === safeCategory;
      const cityMatch = filter.city === "" || item.city === filter.city;
      const typeMatch = filter.type === "" || item.type === filter.type;

      return categoryMatch && cityMatch && typeMatch && matchesBudgetFilter(item);
    })
  );

  const seo = categorySeo?.[safeCategory] || {
    title: "Property Listings",
    content: "Explore premium properties in your preferred location.",
  };

  // Banner Title
  const pageTitle = safeCategory
    ? safeCategory
      .replaceAll("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Properties";



  return (
    <div>

      {/* Banner */}

      <section className="relative h-[350px]">

        <img
          src="/hero-bg.png"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50" />


        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white text-5xl font-bold text-center">
              {pageTitle}
            </h1>
            <p className="text-gray-100 mt-4 ">{seo.description}</p>
          </motion.div>

        </div>

      </section>


      {/* Filter */}

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">

        <div className="bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-4 gap-4">

          <select
            value={filter.city}
            onChange={(e) =>
              setFilter({ ...filter, city: e.target.value })
            }
            className="border rounded-lg p-3"
          >
            <option value="">All Cities</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            value={filter.budget}
            onChange={(e) =>
              setFilter({ ...filter, budget: e.target.value })
            }
            className="border rounded-lg p-3"
          >

            <option value="">Any Budget</option>

            {budgetOptions.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>

          <select
            value={filter.type}
            onChange={(e) =>
              setFilter({ ...filter, type: e.target.value })
            }
            className="border rounded-lg p-3"
          >
            <option value="">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button className="bg-[#0B7A5C] text-white rounded-lg px-6 py-3">
            Search
          </button>
        </div>
      </section>

      {/* Cards */}
      <Breadcrumb />
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredProperties.length > 0 ? (

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {filteredProperties.map((item) => (
              <motion.div
                key={item.id || item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
              >

                <Link
                  to={`/${item.category}/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition block h-full"
                >
                  <div className="relative">
                    <img
                      src={item.thumbnail || item.image}
                      className="w-full h-60 object-cover"
                      alt={item.title}
                    />
                    {item.type && (
                      <span className="absolute bottom-3 right-3 bg-green-200 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {item.type}
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col h-70">
                    <div className="">
                      <p className="text-green-700 font-bold text-lg">
                        {item.priceText || `₹${item.price} Lakh`}
                      </p>

                      <h2 className="text-2xl font-bold mt-1">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-2 flex items-center gap-2">
                        <MdLocationPin /> {item.location}
                      </p>

                      <p className="mt-2 text-sm">
                        <span className="font-semibold">Builder :</span>{" "}
                        {item.builder}
                      </p>

                      <p className="mt-2 text-sm">
                        <span className="font-semibold">Area :</span>{" "}
                        {item.area}
                      </p>
                    </div>
                    <button className="mt-4 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
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
              Try changing your filters.
            </p>
          </div>

        )}
      </section>
      {/* seo */}

      <section className="max-w-7xl mx-auto px-6 pb-4">

        <div className="rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-5">
            {seo.title}
          </h2>

          <p className="text-gray-600 leading-8">
            {seo.content}
          </p>

        </div>

      </section>
    </div>
  );
};

export default PropertyListing;