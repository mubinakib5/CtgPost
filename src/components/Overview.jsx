import { motion } from "framer-motion";
import React from "react";

const Overview = () => {
  return (
    <motion.section
      id="overview"
      className="py-16 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-ctg-red">CTG POST</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Our Mission
            </h3>
            <p className="text-gray-300">
              CTG POST is dedicated to providing accurate, timely, and relevant
              news coverage for the Chittagong community. We strive to be the
              most trusted source of information in the region.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Our Reach
            </h3>
            <p className="text-gray-300">
              With a strong presence in Chittagong, we connect with thousands of
              readers daily through our print and digital platforms, making us
              the go-to source for local news and information.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
