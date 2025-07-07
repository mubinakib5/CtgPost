import { motion } from "framer-motion";
import React from "react";

const sponsorships = [
  {
    title: "Ad Placement: Home Page",
    img: "/assets/ad-placement-homepage.png", // Replace with your own image
    desc: [
      "Premium & Regular Placements",
      "Multiple banner sizes (970x90, 300x250, 320x100 px)",
      "Fixed and sponsored placements available",
      "CPM rates and frequency capping as per campaign needs",
    ],
  },
  {
    title: "Pop-up Ad",
    img: "/assets/popup-ad.png", // Replace with your own image
    desc: [
      "Hourly base campaign (min 4 hours)",
      "Desktop: 660x440 px, Mobile: 320x480 px",
      "Frequency capping: 3 times/hour",
      "High-visibility for urgent or time-limited campaigns",
    ],
  },
  {
    title: "Sticky Banner Ad",
    img: "/assets/sticky-banner.png", // Replace with your own image
    desc: [
      "Desktop: 970x90 px, Mobile: 320x100 px",
      "Always visible as users scroll",
    ],
  },
  {
    title: "Sponsored Article / Facebook GPI Branding",
    img: "/assets/sponsored-article.png", // Replace with your own image
    desc: [
      "Homepage pin for a certain time",
      "Top banner sponsorship on article pages",
      "Facebook share with GPI & paid promotion",
      "Custom creative (e.g., 1200x75 px)",
    ],
  },
  {
    title: "Facebook Photo Post & Story Branding",
    img: "/assets/photo-story-branding.png", // Replace with your own image
    desc: [
      "Photo Post: Custom title/frame, paid partnership tag, min 50 posts",
      "Story: Dedicated branded stories, avg reach 40K/story, min 50 stories",
    ],
  },
];

const sponsorshipScopes = [
  {
    type: "Header Fixed Ads",
    price: "100,000 BDT/= (per month)",
    img: "/assets/scope-header-fixed.png",
  },
  {
    type: "Home Page Main Ads",
    price: "100,000 BDT/= (per month)",
    img: "/assets/scope-home-main.png",
  },
  {
    type: "Home Page Side Bar Ads",
    price: "80,000 BDT/= (per month)",
    img: "/assets/scope-home-sidebar.png",
  },
  {
    type: "Home Page Middle Ads",
    price: "50,000 BDT/= (per month)",
    img: "/assets/scope-home-middle.png",
  },
  {
    type: "Home Page Footer Ads",
    price: "50,000 BDT/= (per month)",
    img: "/assets/scope-home-footer.png",
  },
  {
    type: "Single Page Side Ads",
    price: "80,000 BDT/= (per month)",
    img: "/assets/scope-single-sidebar.png",
  },
  {
    type: "Single Page Main Ads",
    price: "80,000 BDT/= (per month)",
    img: "/assets/scope-single-main.png",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const Sponsorship = () => (
  <motion.section
    id="sponsorship"
    className="py-16 bg-gray-900 text-white border-t-4 border-ctg-red shadow-xl"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-2 text-ctg-red font-roboto drop-shadow-lg">
          Sponsorship & Branding
        </h2>
        <p className="text-lg text-gray-300">
          Explore our diverse sponsorship and ad branding scopes for maximum
          reach and engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {sponsorships.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow text-center border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col items-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-40 mb-4 flex items-center justify-center bg-gray-700 rounded overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="object-contain h-full max-w-full"
              />
            </div>
            <h3 className="text-xl font-bold text-ctg-red mb-2 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <ul className="text-gray-300 text-sm mb-2 text-left list-disc list-inside">
              {item.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="text-ctg-red underline font-bold mt-auto"
            >
              Contact for Proposal
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-bold mb-6 text-ctg-red font-roboto drop-shadow">
          Sponsorship Scopes
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sponsorshipScopes.map((scope, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow text-center border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-32 mb-4 flex items-center justify-center bg-gray-700 rounded overflow-hidden">
              <img
                src={scope.img}
                alt={scope.type}
                className="object-contain h-full max-w-full"
              />
            </div>
            <h4 className="text-lg font-bold text-ctg-red mb-2">
              {scope.type}
            </h4>
            <div className="text-gray-300 text-md mb-2">{scope.price}</div>
            <a
              href="#contact"
              className="text-ctg-red underline font-bold mt-auto"
            >
              Contact for Proposal
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Sponsorship;
