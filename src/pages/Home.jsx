import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import properties from "../data/properties";
import {
  FaHome,
  FaBuilding, FaMapMarkerAlt,
  FaRulerCombined,
  FaArrowRight,FaCheckSquare,FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { MdApartment, MdMapsHomeWork } from "react-icons/md";
import { LuLandPlot } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import faqs from "../data/FAQ"
import { useState } from "react";

const Home = () => {

const categories = [
  {
    title: "Plot",
    icon: <LuLandPlot />,
    link: "/plot",
  },
  {
    title: "Villa",
    icon: <FaHome />,
    link: "/villa",
  },
  {
    title: "Studio Apartment",
    icon: <MdApartment />,
    link: "/studio-apartment",
  },
  {
    title: "Office Space",
    icon: <HiBuildingOffice2 />,
    link: "/office-space",
  },
  {
    title: "Commercial Fresh",
    icon: <BiBuildingHouse />,
    link: "/commercial-fresh",
  },
  {
    title: "Independent House",
    icon: <MdMapsHomeWork />,
    link: "/independent-house",
  },
  {
    title: "Residential Fresh",
    icon: <HiOutlineOfficeBuilding />,
    link: "/residential-fresh",
  },
  {
    title: "Residential Resale",
    icon: <BsBuildingsFill />,
    link: "/residential-resale",
  },
];

 const featured = properties.slice(0, 6);

 const propertyTypes = [
  "Villa",
  "Plot",
  "Studio Apartment",
  "Independent House",
  "Residential Fresh",
  "Residential Resale",
  "Office Space",
  "Commercial Fresh",
];

const cities = [
  "Noida",
  "Greater Noida",
  "Delhi",
  "Gurugram",
  "Faridabad",
  "Ghaziabad",
];

const builders = [
  "RG Group",
  "BPTP Limited",
  "Karyan Group",
  "North India's Leading Listed Developer",
  "SKA Group",
  "M3M India"
]

 const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <section
      className="relative sm:py-20 py-10 overflow-hidden">
       {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/mainhero-bg.png"
      alt="Background"
      className="w-full h-full object-contain object-top "
    />
  </div>

      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="sm:text-4xl md:text-5xl text-3xl font-bold text-white">
            Search Properties by Category
          </h2>

          <p className="text-gray-100 mt-3">
            Explore premium residential and commercial properties.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center items-center">

          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              viewport={{ once: true }}
            >
              <Link
                to={item.link}
                className="bg-white rounded-3xl shadow-xl  py-8 flex flex-col items-center text-center transition group"
              >
                <div className="w-14 h-14 p-2 rounded-full border flex items-center justify-center text-5xl text-[#0B7A5C] group-hover:bg-green-800 group-hover:text-white transition duration-300">

                  {item.icon}

                </div>

                <h3 className="mt-4 text-2xl font-semibold text-gray-800">

                  {item.title}

                </h3>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
      
    </section>
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <span className="text-[#0B7A5C] font-semibold uppercase tracking-wider">
            Featured Properties
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Premium Properties
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover luxury villas, premium apartments,
            commercial spaces and plots from trusted builders.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">

          {featured.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-64 w-full object-cover duration-500 hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-green-800 text-white text-sm px-4 py-2 rounded-full">
                  Featured
                </span>

                <span className="absolute bottom-4 right-4 bg-white text-[#0B7A5C] font-bold px-4 py-2 rounded-xl shadow">
                  ₹ {item.price} Lakh
                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mt-3">

                  <FaMapMarkerAlt />

                  {item.city}

                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">

                  <div className="flex items-center gap-2">

                    <FaBuilding className="text-[#0B7A5C]" />

                    <span className="text-gray-600 text-sm">
                      {item.builder}
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <FaRulerCombined className="text-[#0B7A5C]" />

                    <span className="text-gray-600 text-sm">
                      {item.area}
                    </span>

                  </div>

                </div>

                <div className="flex justify-between items-center mt-8">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Property Type
                    </p>

                    <h4 className="font-semibold">
                      {item.type}
                    </h4>

                  </div>

                  <Link
                    to={`/${item.category}/${item.slug}`}
                    className="bg-green-800 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-green-700"
                  >
                    View Details

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    <WhyChooseUs />
    <section className="py-10 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#0B7A5C] font-semibold uppercase tracking-widest">
            Explore
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Real Estate Services Across NCR
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Propsarathi Infracon Pvt. Ltd. provides premium residential,
            commercial, and investment properties across Delhi NCR from
            India's most trusted builders.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

  {/* Property Types */}

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
  >

    <div className="bg-green-800 text-white py-5 px-6 flex items-center gap-3">
      <FaHome className="text-3xl" />
      <h3 className="text-2xl font-bold">
        Property Types
      </h3>
    </div>

    <ul className="p-6 space-y-4">

      {propertyTypes.map((item) => (

        <li
          key={item}
          className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
        >
          <div className="flex items-center gap-3">
            <FaCheckSquare className="text-[#0B7A5C]" />
            <span>{item}</span>
          </div>

          <span className="text-xs bg-green-100 text-[#0B7A5C] px-3 py-1 rounded-full">
            Available
          </span>
        </li>

      ))}

    </ul>

  </motion.div>

  {/* Cities */}

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
  >

    <div className="bg-green-800 text-white py-5 px-6 flex items-center gap-3">
      <FaMapMarkerAlt className="text-3xl" />
      <h3 className="text-2xl font-bold">
        Top Cities
      </h3>
    </div>

    <ul className="p-6 space-y-4">

      {cities.map((city) => (

        <li
          key={city}
          className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
        >
          <div className="flex items-center gap-3">
            <FaCheckSquare className="text-[#0B7A5C]" />
            <span>{city}</span>
          </div>

          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Hot
          </span>
        </li>

      ))}

    </ul>

  </motion.div>

  {/* Builders */}

  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
  >

    <div className="bg-green-800 text-white py-5 px-6 flex items-center gap-3">
      <FaBuilding className="text-3xl" />
      <h3 className="text-2xl font-bold">
        Trusted Builders
      </h3>
    </div>

    <ul className="p-6 space-y-4">

      {builders.map((builder) => (

        <li
          key={builder}
          className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
        >
          <div className="flex items-center gap-3">
            <FaCheckSquare className="text-[#0B7A5C]" />
            <span>{builder}</span>
          </div>

          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            Verified
          </span>
        </li>

      ))}

    </ul>

  </motion.div>

</div>

      </div>

    </section>
    <Testimonial/>

    {/* faq */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-12">
      <span className="text-green-700 uppercase font-semibold tracking-widest">
        FAQ
      </span>

      <h2 className="text-4xl font-bold mt-3">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-600 mt-4">
        Everything you need to know before buying or renting a property with Propsarathi Infracon Pvt. Ltd.
      </p>
    </div>

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >

          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex justify-between items-center p-6 text-left"
          >

            <h3 className="font-semibold text-lg">
              {faq.question}
            </h3>

            {openIndex === index ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}

          </button>

          {openIndex === index && (

            <div className="px-6 pb-6 text-gray-600 leading-8">
              {faq.answer}
            </div>

          )}

        </div>

      ))}

    </div>

  </div>
</section>
    </div>
  )
}

export default Home
