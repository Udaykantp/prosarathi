import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import events from "../data/events";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const Events = () => {
  return (
    <div>

      {/* Hero Banner */}

      <section className="relative h-[320px]">

        <img
          src="/event/eventbanner.jpg"
          alt="Events"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute w-40 h-40 top-60 left-50 bg-white rounded-full border border-green-800  flex justify-center items-center">
          <img src="/logo.png" alt=""/>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white md:text-5xl text-4xl font-bold text-center">
              Real Estate Events
            </h1>

            <p className="text-white mt-4 text-center max-w-2xl">
              Explore property launches, investment seminars,
              site visits, builder events and exclusive offers
              by Propsarathi Infracon Pvt. Ltd.
            </p>

          </motion.div>

        </div>

      </section>

      <Breadcrumb />

      {/* Main Section */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-12 gap-10">

          {/* ================= Sidebar ================= */}

          <div className="lg:col-span-4">

            <div className="sticky top-28 bg-white rounded-2xl shadow-xl overflow-hidden p-6">

              {/* Image */}

              <img
                src="./event/eventmain.jpg"
                alt="event"
                className="w-full h-50 object-cover rounded-lg mb-3"
              />

              <div>

                <h2 className="text-2xl font-bold text-[#0B7A5C]">
                  Propsarathi Infracon Pvt. Ltd.
                </h2>

                <p className="text-gray-600 mt-4 leading-7">
                  Join our exclusive real estate events and get
                  early access to premium residential and
                  commercial projects across Delhi NCR.
                </p>

                {/* Features */}

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    ✅ <span>New Project Launches</span>
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ <span>Builder Meet</span>
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ <span>Investment Consultation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ <span>Free Site Visit</span>
                  </div>

                  <div className="flex items-center gap-3">
                    ✅ <span>Special Event Offers</span>
                  </div>

                </div>

                {/* Contact */}

                <div className="mt-6 border-t pt-4">

                  <h3 className="font-semibold text-lg">
                    Need Assistance?
                  </h3>
                  <div className="flex gap-2 mt-1 items-center justify-between">
                    <p className="text-gray-600  text-sm">
                      📞 +91 9650130106
                    </p>

                    <p className="text-gray-600 text-sm">
                      ✉ info@propsarathi.com
                    </p>
                  </div>
                </div>

              </div>
               <div className="flex justify-center items-center text-center">
                    <Link to='/contact'
                      className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
                    >
                      Get Free Consultation
                    </Link>
                  </div>

            </div>

          </div>

          {/* ================= Right Side ================= */}

          <div className="lg:col-span-8">

            <div className="space-y-8">

              {/* Event Card Placeholder */}

                {events.map((item) => (

                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                  >

                    <div className="grid md:grid-cols-3">

                      {/* Image */}

                      <div className="relative">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />

                        <span className="absolute top-4 left-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm">

                          {item.status}

                        </span>

                      </div>

                      {/* Details */}

                      <div className="md:col-span-2 p-4">

                        <h2 className="text-2xl font-bold">

                          {item.title}

                        </h2>

                        <p className="text-[#0B7A5C] font-semibold mt-2">

                          {item.builder}

                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-3">

                          <div className="flex items-center gap-3">

                            <FaMapMarkerAlt className="text-green-700" />

                            <span>{item.location}</span>

                          </div>

                          <div className="flex items-center gap-3">

                            <FaCalendarAlt className="text-green-700" />

                            <span>{item.date}</span>

                          </div>

                          <div className="flex items-center gap-3">

                            <FaClock className="text-green-700" />

                            <span>{item.time}</span>

                          </div>

                          <div>

                            <span className="font-semibold">

                              Venue :

                            </span>

                            {" "}

                            {item.venue}

                          </div>

                        </div>

                        <p className="text-gray-600 leading-7 mt-3">

                          {item.description}

                        </p>

                        <div className="mt-4 flex gap-4 flex-wrap">

                          <Link
                            to={`/events/${item.slug}`}
                            className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800"
                          >

                            View Details

                          </Link>

                          <button
                            className="border border-green-700 text-green-700 px-8 py-3 rounded-xl hover:bg-green-700 hover:text-white transition"
                          >

                            Register Now

                          </button>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>
          </div>

        </div>

      </section>
      <section className="pb-8 pt-5">
        <div className="max-w-7xl px-6">
          <h1 className="text-2xl font-bold text-black">Event SEO</h1>
          <p className="mt-2 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolor eum assumenda harum cumque blanditiis recusandae, eius tempore laudantium optio necessitatibus voluptates esse voluptatibus dolores quaerat quidem consequuntur inventore maiores. Maiores doloremque deserunt in, iusto laudantium maxime accusamus rerum officiis?</p>

        </div>
      </section>

    </div>
  );
};

export default Events;