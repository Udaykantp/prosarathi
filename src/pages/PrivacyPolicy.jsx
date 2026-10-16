import Breadcrumb from "../components/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <div>

      {/* Hero */}

      <Breadcrumb />

      <section className="h-[300px] bg-green-800">

        <div className="flex justify-center pt-10">

          <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center">

            <img
              src="/logo.png"
              alt="Propsarathi Logo"
            />

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-20 pb-10">

        <div className="bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-4xl font-bold text-[#0B7A5C] text-center mb-8">
            Privacy Policy
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Propsarathi Infracon Pvt. Ltd. values your privacy and is
            committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, disclose, and
            safeguard the information you share while using our website
            and services.
          </p>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h3>

              <p className="text-gray-600 leading-8">
                We may collect personal information such as your name,
                email address, phone number, city, property preferences,
                budget, and other details when you submit enquiry forms,
                request callbacks, or communicate with us through our
                website, WhatsApp, or email.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h3>

              <ul className="list-disc ml-6 space-y-3 text-gray-600 leading-8">

                <li>To respond to your property enquiries.</li>

                <li>To schedule property visits and consultations.</li>

                <li>To recommend suitable residential or commercial properties.</li>

                <li>To share project updates, offers, and promotional information.</li>

                <li>To improve our services and website experience.</li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                3. Cookies & Analytics
              </h3>

              <p className="text-gray-600 leading-8">
                Our website may use cookies and analytics tools to
                understand visitor behavior, improve website
                performance, remember user preferences, and provide a
                better browsing experience.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                4. Information Sharing
              </h3>

              <p className="text-gray-600 leading-8">
                We do not sell or rent your personal information to
                third parties. Information may be shared only with
                trusted developers, banking partners, or service
                providers when necessary to process your property
                enquiry or requested services.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                5. Data Security
              </h3>

              <p className="text-gray-600 leading-8">
                We use appropriate technical and organizational
                measures to protect your personal information from
                unauthorized access, disclosure, alteration, or
                destruction.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                6. Third-Party Websites
              </h3>

              <p className="text-gray-600 leading-8">
                Our website may contain links to third-party websites.
                We are not responsible for the privacy practices or
                content of those external websites. Users should review
                their privacy policies before sharing personal
                information.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                7. Your Rights
              </h3>

              <p className="text-gray-600 leading-8">
                You have the right to request access, correction,
                updating, or deletion of your personal information.
                You may contact us at any time regarding your privacy
                concerns.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                8. Policy Updates
              </h3>

              <p className="text-gray-600 leading-8">
                Propsarathi Infracon Pvt. Ltd. reserves the right to
                modify this Privacy Policy whenever required. Any
                updates will be published on this page with immediate
                effect.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-4">
                9. Contact Us
              </h3>

              <p className="text-gray-600 leading-8">
                If you have any questions regarding this Privacy
                Policy or the handling of your personal information,
                please contact Propsarathi Infracon Pvt. Ltd. through
                our Contact page, email, or customer support number.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PrivacyPolicy;