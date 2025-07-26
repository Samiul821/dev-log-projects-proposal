"use client";
import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineLink,
} from "react-icons/hi";

const features = [
  {
    title: "Post Listing",
    description: "View all your markdown blog posts in one clean, readable place.",
    icon: <HiOutlineDocumentText size={26} className="text-white" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Dynamic Routing",
    description: "Each post gets its own page using Next.js dynamic routes like /posts/[slug].",
    icon: <HiOutlineLink size={26} className="text-white" />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Markdown Support",
    description: "Write content in markdown and render it as clean HTML using remark.",
    icon: <HiOutlineCode size={26} className="text-white" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    title: "Responsive UI",
    description: "Built with Tailwind CSS so your blog looks great on every screen.",
    icon: <HiOutlineDeviceMobile size={26} className="text-white" />,
    gradient: "from-pink-500 to-pink-700",
  },
];

export default function FeatureSection() {
  return (
    <section className="relative z-10 py-24 px-[2%] lg:px-[10%] bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          🧩 Why DevLog?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-base"
        >
          Everything you need for a clean and developer-friendly blog system.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 ease-in-out hover:scale-[1.02]"
          >
            {/* Icon bubble */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-md`}
            >
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
