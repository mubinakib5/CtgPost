import { motion, useAnimation } from "framer-motion";
import React from "react";

// Animated number hook
function useCountUp(end, duration = 0.8, start = 0, shouldStart = true) {
  const [count, setCount] = React.useState(start);
  React.useEffect(() => {
    if (!shouldStart) return;
    let frame;
    const startTime = performance.now();
    function animate(now) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(end);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, shouldStart]);
  return count.toLocaleString();
}

const analyticsCards = [
  { title: "Facebook Fans", value: 203755, desc: "Number of Fans in Facebook" },
  { title: "Facebook Video Reach", value: 5000000, desc: "Last month" },
  {
    title: "Facebook Reach",
    value: 4608888,
    desc: "+52% from previous 90 days",
  },
  { title: "Web Visitors (Daily)", value: 10000, desc: "Daily web visitors" },
  {
    title: "Unique Visitors (Daily Avg)",
    value: 1500,
    desc: "Per day unique visitors (avg)",
  },
  {
    title: "Page Views (Daily Avg)",
    value: 3500,
    desc: "Per day page views (last 30 days)",
  },
  { title: "Total Page Views (30 days)", value: 95000, desc: "Last 30 days" },
  { title: "News Portal Rank", value: 7, desc: "In Chittagong" },
];

const pluginCards = [
  { title: "Your Objective", desc: "Define your campaign or business goal." },
  {
    title: "Our Channel Analytics",
    desc: "Get insights from our audience and reach.",
  },
  { title: "Package Scenario", desc: "Choose from flexible ad packages." },
  { title: "Business Outcome", desc: "Measure your brand's success with us." },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const AnalyticsCard = ({ value, title, desc }) => {
  const controls = useAnimation();
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(value, 0.8, 0, inView);
  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 rounded-lg p-6 shadow text-center border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-3xl font-bold text-ctg-red font-roboto mb-2 group-hover:text-white transition-colors">
        {count}
      </div>
      <div className="text-lg font-semibold mb-1 font-roboto group-hover:text-ctg-red transition-colors">
        {title}
      </div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </motion.div>
  );
};

const MediaKit = () => (
  <motion.section
    id="mediakit"
    className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-t-4 border-ctg-red shadow-xl"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-2 text-ctg-red font-roboto drop-shadow-lg">
          ctgPost
        </h2>
        <p className="text-lg font-semibold mb-1 font-roboto">
          Web Ad / Campaign Title
        </p>
        <p className="text-md mb-1">
          Web Category:{" "}
          <span className="font-semibold">Banner/Graphics/Video ad</span>
        </p>
        <p className="text-md mb-4">
          Web Address:{" "}
          <a
            href="https://ctgpost.news"
            className="text-ctg-red underline hover:text-white transition-colors"
          >
            ctgpost.news
          </a>{" "}
          /{" "}
          <a
            href="https://bn.ctgpost.news"
            className="text-ctg-red underline hover:text-white transition-colors"
          >
            bn.ctgpost.news
          </a>
        </p>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 font-roboto text-ctg-red">
          Overview
        </h3>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>
            ctgPost is a leading web portal in Chittagong, known as a trusted
            and fact-checked news agency.
          </li>
          <li>Operates in both online and print media.</li>
          <li>The only Chittagong-based bilingual news agency.</li>
          <li>
            Over 2 lakh Facebook fans and 8-10 thousand+ daily web visitors.
          </li>
          <li>
            Features a monthly issue named{" "}
            <span className="italic">jonopodmagazin</span>.
          </li>
        </ul>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 font-roboto text-ctg-red">
          Analytics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {analyticsCards.map((card, idx) => (
            <AnalyticsCard key={idx} {...card} />
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 font-roboto text-ctg-red">
          Proposal Plug-In
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pluginCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 shadow text-center border-2 border-transparent hover:border-ctg-red hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-lg font-bold font-roboto mb-2 group-hover:text-ctg-red transition-colors">
                {card.title}
              </div>
              <div className="text-gray-300 text-sm">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-4 font-roboto text-ctg-red">
          Ad Display Terms
        </h3>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>
            Ads will be shown like the examples provided, integrated with news
            content.
          </li>
          <li>Duration: One month, regularly for 10+ news contents.</li>
        </ul>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        Invitation to join our network for maximum brand promotion with minimum
        cost.
      </div>
    </div>
  </motion.section>
);

export default MediaKit;
