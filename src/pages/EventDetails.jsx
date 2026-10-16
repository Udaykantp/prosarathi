import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import events from "../data/events";
import Breadcrumb from "../components/Breadcrumb";
import { motion } from "framer-motion";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

const EventDetails = () => {

  const { slug } = useParams();

  const event = events.find(
    (item) => item.slug === slug
  );

  if (!event) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold">
          Event Not Found
        </h1>
      </div>
    );
  }

   const whatsappMessage = `
Hi, I am interested in "${event.title} event.
        Event Date- ${event.date} 
        Event Time- ${event.time} 
        Event City- ${event.city} 
        Event Venue- ${event.venue}`;

  const whatsappLink = `https://wa.me/919650130106?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-gray-50">

      {/* Hero */}

      <section className="relative h-[420px]">

        <img
          src={event.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"/>

        <div className="absolute inset-0 flex items-end">

          <div className="max-w-7xl mx-auto w-full p-8 text-white">

            <Link
              to="/events"
              className="inline-flex gap-2 items-center mb-5"
            >
              <FaArrowLeft />
              Back to Events
            </Link>

            <h1 className="text-5xl font-bold">

              {event.title}

            </h1>

            <div className="flex flex-wrap gap-6 mt-6">

              <span className="flex gap-2 items-center">

                <FaCalendarAlt />

                {event.date}

              </span>

              <span className="flex gap-2 items-center">

                <FaClock />

                {event.time}

              </span>

              <span className="flex gap-2 items-center">

                <FaMapMarkerAlt />

                {event.location}

              </span>

            </div>

          </div>

        </div>

      </section>

      <Breadcrumb />

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid lg:grid-cols-12 gap-10">
            {/* ================= Left Section ================= */}

<div className="lg:col-span-8">

  {/* Description */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-8"
  >

    <h2 className="text-3xl font-bold mb-5">
      About This Event
    </h2>

    <p className="text-gray-600 leading-8">
      {event.description}
    </p>

  </motion.div>


  {/* Gallery */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-8 mt-10"
  >

    <h2 className="text-3xl font-bold mb-6">
      Event Gallery
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      {event.gallery.map((image, index) => (

        <img
          key={index}
          src={image}
          alt=""
          className="rounded-xl h-44 w-full object-cover hover:scale-105 duration-300"
        />

      ))}

    </div>

  </motion.div>


  {/* Highlights */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-8 mt-10"
  >

    <h2 className="text-3xl font-bold mb-6">
      Event Highlights
    </h2>

    <div className="grid md:grid-cols-2 gap-5">

      {event.highlights.map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-3 border rounded-xl p-4"
        >

          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">

            ✓

          </div>

          <span className="font-medium">

            {item}

          </span>

        </div>

      ))}

    </div>

  </motion.div>


  {/* Google Map */}
{/* 
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-8 mt-10"
  >

    <h2 className="text-3xl font-bold mb-6">
      Event Location
    </h2>

    <iframe
      src={event.map}
      width="100%"
      height="420"
      loading="lazy"
      allowFullScreen
      className="rounded-xl"
      referrerPolicy="no-referrer-when-downgrade"
    />

  </motion.div> */}

</div>
{/* ================= Right Sidebar ================= */}

<div className="lg:col-span-4">

  <div className="sticky top-28 space-y-6">

    {/* Event Info */}

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Event Details
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between border-b pb-3">
          <span className="font-semibold">Builder</span>
          <span>{event.builder}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-semibold">Status</span>
          <span className="text-green-700 font-semibold">
            {event.status}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-semibold">Date</span>
          <span>{event.date}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-semibold">Time</span>
          <span>{event.time}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-semibold">City</span>
          <span>{event.city}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Venue</span>
          <span className="text-right">
            {event.venue}
          </span>
        </div>

      </div>

    </div>

    {/* Register */}

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h3 className="text-xl font-bold">
        Register For This Event
      </h3>

      <p className="text-gray-500 mt-3">
        Book your free seat today and get exclusive
        launch offers, builder interaction and free
        investment consultation.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="block text-center mt-4 border border-green-700 text-green-700 py-3 rounded-xl hover:bg-green-700 hover:text-white transition"
      >
        Register Now
      </a>

    </div>

    {/* Contact */}

    <div className="bg-green-700 rounded-2xl text-white p-6">

      <h3 className="text-2xl font-bold">
        Need Help?
      </h3>

      <p className="mt-4 leading-7">

        Speak with our property experts for free
        consultation regarding this event.

      </p>

      <div className="mt-6 space-y-3">

        <p>
          📞 +91 9650130106
        </p>

        <p>
          ✉ info@propsarathi.com
        </p>

        <p>
          📍 Noida, Delhi NCR
        </p>

      </div>

    </div>

  </div>

</div>

</div>

</section>

{/* ================= FAQ Section ================= */}
{/* 
<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="bg-white rounded-2xl shadow-lg p-8">

    <h2 className="text-3xl font-bold mb-8">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      {event.faq?.map((item, index) => (

        <div
          key={index}
          className="border rounded-xl p-5"
        >

          <h3 className="text-lg font-semibold text-[#0B7A5C]">
            {item.question}
          </h3>

          <p className="text-gray-600 mt-3 leading-7">
            {item.answer}
          </p>

        </div>

      ))}

    </div>

  </div>

</section> */}



{/* ================= Related Events ================= */}

<section className="max-w-7xl mx-auto px-6 py-10">

  <h2 className="text-4xl font-bold mb-10 text-center">
    Related Events
  </h2>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

    {events
      .filter((item) => item.id !== event.id)
      .slice(0, 3)
      .map((item) => (

        <Link
          key={item.id}
          to={`/events/${item.slug}`}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
        >

          <img
            src={item.image}
            alt={item.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-6">

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

              {item.status}

            </span>

            <h3 className="text-2xl font-bold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-3">
              📍 {item.location}
            </p>

            <p className="mt-2">
              📅 {item.date}
            </p>

            <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg">

              View Event

            </button>

          </div>

        </Link>

      ))}

  </div>

</section>



{/* ================= SEO Content ================= */}

<section className="bg-gray-100 py-16">

  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-6">

        {event.seo?.title}

      </h2>

      <p className="text-gray-700 leading-8 whitespace-pre-line">

        {event.seo?.content}

      </p>

    </div>

  </div>

</section>

    </div>
  );
};

export default EventDetails;