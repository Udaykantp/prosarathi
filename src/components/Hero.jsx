import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import hero from "/hero-bg.png"; // Change your image path

const Hero = ({ properties, setFilteredData }) => {
  const [search, setSearch] = useState({
    location: "",
    type: "",
    budget: "",
  });

  const handleChange = (e) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    const filtered = properties.filter((item) => {
      const locationMatch =
        !search.location || item.location === search.location;

      const typeMatch =
        !search.type || item.category === search.type;

      let budgetMatch = true;

      if (search.budget === "Under ₹25L")
        budgetMatch = item.price < 25;

      if (search.budget === "₹25L - ₹50L")
        budgetMatch = item.price >= 25 && item.price <= 50;

      if (search.budget === "₹50L - ₹1Cr")
        budgetMatch = item.price > 50 && item.price <= 100;

      if (search.budget === "₹1Cr - ₹2Cr")
        budgetMatch = item.price > 100 && item.price <= 200;

      if (search.budget === "₹2Cr+")
        budgetMatch = item.price > 200;

      return locationMatch && typeMatch && budgetMatch;
    });

    setFilteredData(filtered);
  };

  const handleReset = () => {
    const resetValues = {
      location: "",
      type: "",
      budget: "",
    };

    setSearch(resetValues);

    // Sabhi properties wapas dikhao
    setFilteredData(properties);
  };
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <motion.section
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="relative h-[650px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center">

        {/* Heading */}

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[3px] text-sm"
          >
            Browse Property
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mt-2"
          >
            Categories
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-200 max-w-xl mx-auto"
          >
            Explore a wide range of properties tailored to your
            needs.
          </motion.p>
        </motion.div>

        {/* Search Box */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          whileHover={{
            y: -3,
          }}
          className="bg-white rounded-2xl shadow-2xl p-5 mt-14 w-full max-w-5xl"
        >
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">

            {/* Location */}

            <motion.select
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              name="location"
              value={search.location}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0B7A5C]"
            >
              <option value="">Select Location</option>

              <option>Noida</option>

              <option>Delhi</option>

              <option>Gurugram</option>

              <option>Lucknow</option>

              <option>Jaipur</option>

            </motion.select>
            {/* Property Type */}

            <motion.select
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              name="type"
              value={search.type}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0B7A5C]"
            >
              <option value="">Property Type</option>

              <option>Plot</option>
              <option>Villa</option>
              <option>Studio Apartment</option>
              <option>Office Space</option>
              <option>Independent House</option>
              <option>Residential Fresh</option>
              <option>Residential Resale</option>
              <option>Commercial Fresh</option>
              <option>Commercial Resale</option>
              <option>Upcoming Projects</option>
            </motion.select>

            {/* Budget */}

            <motion.select
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              name="budget"
              value={search.budget}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0B7A5C]"
            >
              <option value="">Budget</option>

              <option>Under ₹25L</option>
              <option>₹25L - ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>₹2Cr+</option>
            </motion.select>

            {/* Button */}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSearch}
              className="bg-[#0B7A5C] text-white rounded-lg flex items-center justify-center gap-2 font-medium h-12"
            >
              Search
              <HiOutlineSearch />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleReset}
              className="border border-[#0B7A5C] text-[#0B7A5C] rounded-lg h-12 font-medium hover:bg-[#0B7A5C] hover:text-white duration-300"
            >
              Reset
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;