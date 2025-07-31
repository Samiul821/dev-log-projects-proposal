"use client";
import React from "react";
import posts from "../data/posts.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PostCard() {
  return (
    <section className="pb-24 px-[2%] lg:px-[10%] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          📝 Latest Posts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-base"
        >
          Explore our newest blog articles, curated for developers and creators.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-3xl overflow-hidden shadow-lg bg-white border border-transparent hover:border-blue-300 transition-all duration-300 flex flex-col min-h-[500px]"
          >
            {/* Image */}
            <div className="relative h-[250px] overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>By {post.author}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
