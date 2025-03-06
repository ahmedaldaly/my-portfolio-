"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
const Page = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
          thresholdDelta: 50,
          thresholdTime: 500,
        }}
        speed={800}
        slidesPerView={1}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="py-40 max-xl:py-20 px-16 flex flex-wrap max-md:px-8 overflow-hidden">
          <div className="w-[60%]  max-md:w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }, // تأخير بين الحروف
                },
              }}
              className="text-6xl text-[#ccf381] font-bold max-md:text-4xl flex"
            >
              {Array.from("FullStack Developer").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {char === " " ? "\u00A0" : char} {/* للحفاظ على المسافات */}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, marginLeft: "-100px" }}
              whileInView={{ opacity: 1, marginLeft: "0" }}
              transition={{ duration: 1 }}
              className="text-white mt-5 max-md:text-lg"
            >
              Create modern, scalable, and intuitive web applications that blend
              <br className="max-xl:hidden" /> performance with outstanding user
              experiences.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-56 max-xl:mt-14 flex max-md:hn"
            >
              <p className="text-sm text-[#ccf381]">
                I am a Full Stack Developer who builds fast,
                <br /> scalable, and user-friendly web applications, turning
                ideas into exceptional digital experiences.
              </p>
              <p className="text-sm ml-4 text-[#ccf381]">
                Proven experience building successful products for clients
                across several countries.
              </p>
            </motion.div>
          </div>
          <div className="w-72 h-72 relative max-md:w-48 max-md:h-48 max-md:mt-8">
            <span className="w-32"></span>
            <motion.img
              className="w-full h-full object-cover absolute z-10"
              src="/1.jpeg"
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <span className="w-32">
              <motion.img
                className="w-48 bottom-[-50px] right-[-70px] absolute"
                src="/aaa.png"
                alt=""
                animate={{
                  y: [0, "-150vh", "50vh", 0],
                  x: [0, "-150vh", "50vh", 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-72 h-72 border-2 absolute top-1 right-[-20px] border-white mt-3.5 max-md:w-48 max-md:h-48 max-md:right-[-10px]"
            ></motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="">
          <div className="w-full h-full flex flex-wrap py-20">
            <div className="w-[50%] max-md:w-full mt-10 px-10 relative ">
             
              <motion.h1
              initial={{opacity:0,marginLeft:'-200px'}}
              whileInView={{opacity:1,marginLeft:'0px'}}
              transition={{duration:1 }}
              className="text-4xl mb-5  font-black text-[#4831D4]">
                Design
              </motion.h1>
              <motion.p 
               initial={{opacity:0,marginTop:'-200px'}}
               whileInView={{opacity:1,marginTop:'0px'}}
               transition={{duration:1 }}
              >
                I'm probably not the typical designer positioned behind an
                Illustrator artboard adjusting pixels, but I design. Immersed in
                stylesheets tweaking font sizes and contemplating layouts is
                where you'll find me (~_^). I'm committed to creating fluent
                user experiences while staying fashionable.
              </motion.p>
              <div className="flex gap-1 justify-end  mt-11">
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
              </div>
            </div>
            {/*  */}
            <div className="w-[50%] max-md:w-full p-10 mt-72 max-md:mt-1">
              <div className="flex gap-1 justify-end mr-24 mt-11 relative">
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
                <span className="w-3 h-3 rounded-full border-2 border-blue-300"></span>
              </div>
              <motion.h1 
               initial={{opacity:0,marginLeft:'-200px'}}
               whileInView={{opacity:1,marginLeft:'0px'}}
               transition={{duration:1 }}
              className="text-4xl mb-5  font-black text-[#4831D4]">
                Engineering{" "}
              </motion.h1>
              <motion.p
               initial={{opacity:0,marginTop:'-200px'}}
               whileInView={{opacity:1,marginTop:'0px'}}
               transition={{duration:1 }}
              >
                In building JavaScript applications, I'm equipped with just the
                right tools, and can absolutely function independently of them
                to deliver fast, resilient solutions optimized for scale —
                performance and scalabilty are priorities on my radar.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="pt-20 w-full h-full ">
          <div className="w-[70%] max-md:w-[90%] h-[60%] shadow-sm mx-auto mt-10 p-14 ">
          <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }, // تأخير بين الحروف
                },
              }}
              className="text-4xl text-[#4831d4] font-black mb-5"
            >
              {Array.from(`I build&  design stuff`).map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {char === "&" ? <br/> : char} {/* للحفاظ على المسافات */}
                </motion.span>
              ))}
            </motion.div>
            <p>
              Open source
              <br /> projects, web apps <br /> and experimentals.
            </p>
            <Link href="/mywork">
              {" "}
              <button className="w-72 max-md:w-52 h-12 border-2 text-blue-800 items-center justify-center border-gray-500 cursor-pointer mt-9 flex gap-5 ">
                See My Work{" "}
                <span className="text-4xl">
                  <IoIosArrowRoundForward />
                </span>
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="pt-20 bg-[#3d155f] text-green-300">
        <Footer/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Page;
