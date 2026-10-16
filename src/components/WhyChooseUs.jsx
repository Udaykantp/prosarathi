import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBuilding,
  FaHandshake,
  FaHeadset,
  FaHome,
  FaFileSignature,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHome />,
    title: "Verified Properties",
    description:
      "We offer only verified residential, commercial, villas, plots, and office spaces from trusted developers.",
  },
  {
    icon: <FaBuilding />,
    title: "Trusted Builders",
    description:
      "We collaborate with reputed builders and developers to provide premium investment opportunities.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Deals",
    description:
      "No hidden charges. Every property transaction is handled with complete transparency and professionalism.",
  },
  {
    icon: <FaFileSignature />,
    title: "Legal Assistance",
    description:
      "Our experts assist you with documentation, registration, home loans, and legal formalities.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "From property selection to final possession, our team provides complete guidance at every step.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Customer Satisfaction",
    description:
      "Our priority is helping you find the right property with confidence, value, and peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <span className="text-[#0B7A5C] font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Why Choose{" "}
            <span className="text-[#0B7A5C]">
              Propsarathi Infracon Pvt. Ltd.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5 leading-8">
            Propsarathi Infracon Pvt. Ltd. is committed to helping you buy the
            right property with complete transparency, trusted guidance, and
            premium real estate solutions across residential and commercial
            projects.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              viewport={{ once: true }}
              className="group bg-white border rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#0B7A5C]/10 text-[#0B7A5C] text-3xl flex items-center justify-center group-hover:bg-[#0B7A5C] group-hover:text-white transition">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;