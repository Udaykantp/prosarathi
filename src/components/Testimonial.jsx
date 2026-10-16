import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Noida",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Propsarathi Infracon helped me find my dream villa in Noida. Their team was professional, transparent, and guided me through every step of the buying process.",
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Excellent service! I purchased a residential apartment with complete confidence. Documentation and loan assistance were handled smoothly.",
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Gurugram",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "One of the most trusted real estate consultants. They suggested the best investment property within my budget. Highly recommended.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <span className="text-[#0B7A5C] uppercase font-semibold tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Hear from our happy clients who trusted Propsarathi
            Infracon Pvt. Ltd. to find their perfect property.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (

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
              className="bg-white rounded-3xl shadow-lg p-8 relative"
            >

              <FaQuoteLeft className="absolute top-6 right-6 text-5xl text-[#0B7A5C]/10" />

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#0B7A5C]/20"
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.location}
                  </p>

                </div>

              </div>

              <div className="flex text-yellow-400 gap-1 mt-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-gray-600 mt-6 leading-8">
                "{item.review}"
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonial;