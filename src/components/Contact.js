const Contact = () => {
    return (
      <div className="p-12 bg-gray-800 text-white">
        <h2 className="text-5xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  