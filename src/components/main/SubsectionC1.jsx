import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SubsectionC1 = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4"
    >
      <div className="max-w-3xl w-full bg-gray-950 rounded-3xl p-8 shadow-2xl text-white">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact <span className="text-blue-500">Us</span>
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 text-lg">

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span>+91 805XXXXXX4</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>yourmail@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span>Darbhanga, Bihar, India</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700" />

        {/* Contact Form */}
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-900 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-900 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="bg-gray-900 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default SubsectionC1;
