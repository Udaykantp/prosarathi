import { useState } from "react";
import { 
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPlus
} from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const faqs = [
    "What types of properties do you offer?",
    "How can I schedule a property visit?",
    "Do you provide home loan assistance?",
    "How can I list my property?"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      return;
    }

    const whatsappMessage = `Hello! I am ${name}.%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919650130106?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-16 px-5">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2">
          We're here to help you find the perfect property.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">


        {/* Left Contact Info */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h3 className="font-semibold mb-6">
            Get in Touch
          </h3>


          <div className="space-y-5">

            <div className="flex gap-4">
              <FaPhoneAlt className="text-green-600" size={20}/>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-gray-500 text-sm">
                  +91 9650130106
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <FaEnvelope className="text-green-600" size={20}/>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-gray-500 text-sm">
                  info@realestate.com
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-green-600" size={20}/>
              <div>
                <p className="text-sm font-medium">Office Address</p>
                <p className="text-gray-500 text-sm">
                  Sector 18, Noida, Delhi NCR
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              < FaClock className="text-green-600" size={20}/>
              <div>
                <p className="text-sm font-medium">
                  Working Hours
                </p>
                <p className="text-gray-500 text-sm">
                  Mon - Sat : 9 AM - 7 PM
                </p>
              </div>
            </div>

          </div>


          {/* Social */}
          <div className="mt-8">
            <p className="font-medium mb-3">
              Follow Us
            </p>

            <div className="flex gap-3">

  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
    <FaFacebookF />
  </div>

  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
    <FaInstagram />
  </div>

  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
    <FaLinkedinIn />
  </div>

  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
    <FaTwitter />
  </div>

</div>

          </div>

        </div>




        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h3 className="font-semibold mb-6">
            Send Us a Message
          </h3>


          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-200"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-200"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-200"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-3 text-sm"
            >
              <option value="">Select Subject</option>
              <option value="Buy Property">Buy Property</option>
              <option value="Sell Property">Sell Property</option>
              <option value="Property Visit">Property Visit</option>
            </select>

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full border rounded-md px-4 py-3 text-sm outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-md text-sm hover:bg-green-800"
            >
              Send Message →
            </button>
          </form>

        </div>




        {/* Right Side */}
        <div className="space-y-6">


          {/* Map */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <iframe
              className="w-full h-52"
              src="https://maps.google.com/maps?q=noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>

          </div>



          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h3 className="font-semibold mb-5">
              Frequently Asked Questions
            </h3>


            <div className="space-y-3">

            {
              faqs.map((faq,index)=>(
                <div 
                  key={index}
                  className="border rounded-md px-4 py-3 flex justify-between items-center text-sm cursor-pointer"
                >
                  <span>{faq}</span>
                  <FaPlus size={16}/>
                </div>
              ))
            }

            </div>


          </div>


        </div>


      </div>


    </section>
  )
}


export default Contact;