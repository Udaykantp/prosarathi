import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold mb-5">
              Propsarathi  infracon pvt ltd
            </h2>

            <p className="text-gray-200 leading-7">
             Propsarathi  infracon pvt ltd helps you discover verified properties,
              apartments, villas, plots, commercial spaces and
              investment opportunities across India.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/profile.php?id=61593512485039"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B7A5C] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/propsarathi003"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B7A5C] transition"
              >
                <FaInstagram />
              </a>
            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link to="/" className="block hover:text-green-200">
                Home
              </Link>

              <Link
                to="/about"
                className="block hover:text-green-200"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="block hover:text-green-200"
              >
                Blogs
              </Link>

              <Link
                to="/events"
                className="block hover:text-green-200"
              >
                Events
              </Link>

              <Link
                to="/contact"
                className="block hover:text-green-200"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Property Types */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Property Types
            </h3>

            <div className="space-y-3">

              <Link to="/villa" className="block hover:text-green-200">
                Villa
              </Link>

              <Link to="/plot" className="block hover:text-green-200">
                Plot
              </Link>

              <Link
                to="/office-space"
                className="block hover:text-green-200"
              >
                Office Space
              </Link>

              <Link
                to="/independent-house"
                className="block hover:text-green-200"
              >
                Independent House
              </Link>

              <Link
                to="/commercial-fresh"
                className="block hover:text-green-200"
              >
                Commercial Property
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-xl" />

                <p>
                  Sector 62,
                  <br />
                  Noida, Uttar Pradesh
                </p>

              </div>

              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1" />

                <p>+91 9650130106</p>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1" />

                <p>manisharealestate911@gmail.com</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex md:flex-row flex-col gap-3 justify-between items-center">

          <p className="text-sm text-gray-200">
            © {currentYear} Propsarathi. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
  to="/privacy-policy"
  className="hover:text-green-300 duration-300"
>
  Privacy Policy
</Link>

           <Link
  to="/terms-and-conditions"
  className="hover:text-green-300 transition"
>
  Terms & Conditions
</Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;