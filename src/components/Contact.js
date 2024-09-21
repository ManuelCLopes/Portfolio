import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Glad you made it this far! Let's discuss some ideas!
      </h2>
      <p className="text-xl text-center text-gray-400 mb-12">
        Whether you want to chat about tech, ask questions, or brainstorm brilliant ideas, I'm just a message away.
      </p>

      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300">Your Name</label>
          <input
            type="text"
            placeholder="What should I call you?"
            className="w-full p-4 mt-1 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Your Email</label>
          <input
            type="email"
            placeholder="Where can I reach you?"
            className="w-full p-4 mt-1 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Your Message</label>
          <textarea
            placeholder="What's on your mind?"
            className="w-full p-4 mt-1 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-500 focus:outline-none"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-gray-500 mt-8">
        Don’t be shy, I’d love to hear from you!
      </p>
    </div>
  );
};

export default Contact;
