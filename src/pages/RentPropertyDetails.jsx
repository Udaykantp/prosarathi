import { Link, useParams } from "react-router-dom";
import rentProperties from "../data/rentProperties";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaParking,
  FaDumbbell,
  FaSwimmingPool,
  FaTree,
  FaBolt,
  FaShieldAlt,
  FaBuilding,
} from "react-icons/fa";
import { MdElevator } from "react-icons/md";

const amenityIcons = {
  Parking: <FaParking />,
  Gym: <FaDumbbell />,
  "Swimming Pool": <FaSwimmingPool />,
  Garden: <FaTree />,
  Lift: <MdElevator />,
  "Power Backup": <FaBolt />,
  Security: <FaShieldAlt />,
  Clubhouse: <FaBuilding />,
};

const RentPropertyDetails = () => {
  const { category, slug } = useParams();

  const property = rentProperties.find(
    (item) =>
      item.category === category &&
      item.slug === slug
  );

  if (!property) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-4xl font-bold">
          Property Not Found
        </h2>
      </div>
    );
  }

  const whatsappMessage = `
Hello Propsarathi Infracon Pvt. Ltd.

I am interested in this rental property.

Property : ${property.title}
Location : ${property.location}
Rent : ${property.rentPrice}

Please share complete details.
`;

  const whatsappLink = `https://wa.me/919650130106?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-gray-50">

      {/* Banner */}

      <section className="relative">

        <img
          src={property.thumbnail}
          alt={property.title}
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-0 right-0">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <Link
              to={`/rent-property/${category}`}
              className="inline-flex items-center gap-2 mb-6"
            >
              <FaArrowLeft />
              Back
            </Link>

            <h1 className="text-5xl font-bold">
              {property.title}
            </h1>

            <p className="flex items-center gap-2 mt-5">
              <FaMapMarkerAlt />
              {property.location}
            </p>

            <h2 className="text-3xl font-bold text-green-300 mt-4">
              {property.rentPrice}
            </h2>

          </div>

        </div>

      </section>

      <Breadcrumb />

      {/* Main */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            {/* Description */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Property Description
              </h2>

              <p className="text-gray-600 leading-8">
                {property.description}
              </p>

            </div>

            {/* property images */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {property.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${property.title} ${index + 1}`}
        className="w-full h-40 object-cover rounded-xl"
      />
    ))}
              </div>

            </div>


            {/* Details */}

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

              <h2 className="text-3xl font-bold mb-8">
                Property Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <p className="text-gray-500">
                    Property Type
                  </p>
                  <h3 className="font-semibold">
                    {property.propertyType}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Configuration
                  </p>
                  <h3 className="font-semibold">
                    {property.type}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Area
                  </p>
                  <h3 className="font-semibold">
                    {property.area}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Furnishing
                  </p>
                  <h3 className="font-semibold">
                    {property.furnishing}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Availability
                  </p>
                  <h3 className="font-semibold">
                    {property.availability}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    City
                  </p>
                  <h3 className="font-semibold">
                    {property.city}
                  </h3>
                </div>

              </div>

            </div>

            {/* Amenities */}

            {property.amenities && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

                <h2 className="text-3xl font-bold mb-8">
                  Amenities
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                  {property.amenities.map((item) => (

                    <div
                      key={item}
                      className="border rounded-xl p-5 flex flex-col items-center gap-3"
                    >
                      <div className="text-3xl text-green-700">
                        {amenityIcons[item]}
                      </div>

                      <p>{item}</p>

                    </div>

                  ))}

                </div>

              </div>
            )}

            {/* Map */}

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

              <h2 className="text-3xl font-bold mb-6">
                Location
              </h2>

              <iframe
                src={property.map}
                className="w-full h-[350px] rounded-xl"
                loading="lazy"
              />

            </div>

            {/* SEO */}

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

              <h2 className="text-3xl font-bold mb-5">
                {property.seo.title}
              </h2>

              <p className="text-gray-600 leading-8 whitespace-pre-line">
                {property.seo.content}
              </p>

            </div>

          </div>

          {/* Right Sidebar */}

          <div>

            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-28">

              <h2 className="text-2xl font-bold">
                Interested?
              </h2>

              <p className="text-gray-500 mt-3">
                Contact Propsarathi Infracon Pvt. Ltd.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                className="mt-8 block bg-green-700 text-center text-white py-4 rounded-xl hover:bg-green-800"
              >
                Enquire on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default RentPropertyDetails;