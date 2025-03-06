"use client";
import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce",
    description: "Online Shopping",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
    link: "https://github.com/ahmedaldaly?tab=repositories",
  },
  {
    title: "Portfolio Website",
    description: "My Personal Portfolio",
    image: "https://ezahn47ugtf.exactdn.com/wp-content/uploads/2022/05/portfolio-book-creation-scaled.jpg?strip=all&lossy=1&ssl=1",
    link: "https://github.com/ahmedaldaly?tab=repositories",
  },
  {
    title: "Blog App",
    description: "Simple blog app platform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ_S0UGrzZLuw69vo2ZI8JBBoVRaCil3s8g&s",
    link: "https://github.com/ahmedaldaly?tab=repositories",
  },
  {
    title: "Book Store",
    description: "Book Store App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2QK-ILsiDsN_VGTcZWTbIbrPLIzDPfpiwA&s",
    link: "https://github.com/ahmedaldaly?tab=repositories",
  },
 
];

const Page = () => {
  return (
    <div className="w-full pt-40  text-center">
      <h1 className="text-3xl font-bold my-10 text-gray-500">/Work.</h1>
      <p className="text-gray-500 text-xl">Selected work I've taken on in the past.</p>

      {/* Loop through projects */}
      <div className="w-full flex  justify-center flex-wrap gap-10 p-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-80 bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* صورة المنتج */}
            <div className="w-full h-52 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full  group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* معلومات المنتج */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-500 mt-2">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
