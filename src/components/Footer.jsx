import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-ctg-red mb-4">CTG POST</h3>
            <p className="text-gray-400">
              Your trusted source for news and information in Chittagong.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#overview"
                  className="text-gray-400 hover:text-ctg-red transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#advertising"
                  className="text-gray-400 hover:text-ctg-red transition-colors"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-ctg-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ctg-red transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ctg-red transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ctg-red transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CTG POST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
