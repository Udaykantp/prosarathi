import { FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import upcomingProjects from "../data/upcomingProjects";
import Breadcrumb from "../components/Breadcrumb";

const UpcomingProjects = () => {
  const whatsappNumber = "919650130106";

  const handleEnquiry = (item) => {
    const message = `Hello Propsarathi Infracon Pvt. Ltd.,

I am interested in the following upcoming project.

Project Name: ${item.title}
Builder: ${item.builder}
Location: ${item.location}
Configuration: ${item.configuration}
Area: ${item.area}
Price: ${item.price}
Possession: ${item.possession}

Please share complete details, brochure, floor plans and payment plan.

Thank You.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[320px] overflow-hidden">
        <img
          src="/hero-bg.png"
          alt="Upcoming Projects"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-3xl">
            <p className="uppercase tracking-[4px] text-sm text-green-400 font-semibold mb-3">
              Propsarathi Infracon Pvt. Ltd.
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              Explore Upcoming Projects
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-200">
              Discover upcoming residential and commercial projects with
              attractive launch opportunities, premium locations and
              carefully selected configurations.
            </p>
            <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      <Breadcrumb />

      {/* ================= PROJECT CARDS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* Cards */}
          {upcomingProjects.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

              {upcomingProjects.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status */}
                    <span className="absolute top-4 left-4 bg-green-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                      {item.status}
                    </span>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-sm font-medium">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h2>

                    {/* Builder */}
                    <p className="text-green-700 font-semibold mt-1">
                      By {item.builder}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-7">

                      {/* Price */}
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">
                          Starting Price
                        </p>

                        <h3 className="font-bold text-green-700 mt-1 text-sm md:text-base">
                          {item.price}
                        </h3>
                      </div>

                      {/* Possession */}
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">
                          Possession
                        </p>

                        <h3 className="font-semibold text-gray-900 mt-1 text-sm md:text-base">
                          {item.possession}
                        </h3>
                      </div>

                      {/* Configuration */}
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">
                          Configuration
                        </p>

                        <h3 className="font-semibold text-gray-900 mt-1 text-sm md:text-base">
                          {item.configuration}
                        </h3>
                      </div>

                      {/* Area */}
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">
                          Area
                        </p>

                        <h3 className="font-semibold text-gray-900 mt-1 text-sm md:text-base">
                          {item.area}
                        </h3>
                      </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mt-7 pt-5">

                      {/* WhatsApp Button */}
                      <button
                        onClick={() => handleEnquiry(item)}
                        className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
                      >
                        <FaWhatsapp className="text-lg" />
                        Enquiry Now
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          ) : (
            /* No Projects */
            <div className="text-center py-20 bg-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800">
                No Upcoming Projects
              </h3>

              <p className="text-gray-500 mt-2">
                New projects will be added soon.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ================= SEO SECTION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div>

            <p className="text-green-700 font-semibold uppercase tracking-wider text-sm">
              Explore New Opportunities
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Upcoming Residential & Commercial Projects in Delhi NCR
            </h2>

            <div className="space-y-5 text-gray-600 leading-8">

              <p>
                Propsarathi Infracon Pvt. Ltd. brings you the latest upcoming
                residential apartments, villas, plots, commercial spaces and
                luxury developments across Noida, Greater Noida, Gurugram,
                Ghaziabad and Delhi.
              </p>

              <p>
                Explore upcoming projects from leading developers and discover
                new opportunities with attractive launch prices, premium
                locations and modern lifestyle amenities.
              </p>

              <p>
                Get complete project information including launch price,
                configuration, area, possession timeline, floor plans,
                payment plans, RERA information and available pre-launch
                offers.
              </p>

              <p>
                Contact Propsarathi Infracon Pvt. Ltd. for project details,
                brochure, site visits and expert property consultation across
                Delhi NCR.
              </p>

            </div>

            {/* CTA */}
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello Propsarathi Infracon Pvt. Ltd., I want information about your upcoming projects."
                  )}`,
                  "_blank"
                )
              }
              className="mt-8 inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Get Project Details
              <FaArrowRight />
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default UpcomingProjects;