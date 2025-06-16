import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact <span className="text-ctg-red">Us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                <span>123 News Street, Chittagong, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+880 1643-680369</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>ctgpost@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <h3 className="text-xl font-semibold mb-4 text-ctg-red group-hover:text-white transition-colors">
              Business Hours
            </h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
