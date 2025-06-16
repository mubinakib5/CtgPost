import { motion } from "framer-motion";
import React from "react";

const Advertising = () => {
  return (
    <motion.section
      id="advertising"
      className="py-16 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Advertising <span className="text-ctg-red">Opportunities</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Print Advertising
            </h3>
            <p className="text-gray-300 mb-4">
              Reach our loyal print readers with strategically placed
              advertisements in our daily newspaper.
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              <li>Full-page ads</li>
              <li>Half-page ads</li>
              <li>Classified ads</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Digital Advertising
            </h3>
            <p className="text-gray-300 mb-4">
              Connect with our growing online audience through various digital
              advertising options.
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              <li>Banner ads</li>
              <li>Sponsored content</li>
              <li>Social media promotion</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Special Packages
            </h3>
            <p className="text-gray-300 mb-4">
              Custom advertising solutions tailored to your specific needs and
              goals.
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              <li>Integrated campaigns</li>
              <li>Event coverage</li>
              <li>Special editions</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Advertising;
