"use client";
import React from "react";
import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
      <div className="w-full z-10 fixed h-28 ">
        <div className="w-full flex h-full justify-between px-14 items-center ">
          <h4 className="text-3xl text-[#ccf381]">3ldaly</h4>
          {/*  */}
          <div className="group logo cursor-pointer w-12 flex flex-col items-start">
            <div className="w-12 h-[2px] realtive z-10 bg-blue-900 mb-2 group-hover:w-8 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-y-2"></div>
            <div className="w-8 h-[2px] realtive z-10 ml-3.5 group-hover:ml-0.5 group-hover:mt-1.5 bg-blue-900 transition-transform duration-300 group-hover:-rotate-45 group-hover:-translate-y-2"></div>
            <motion.div
             initial={{opacity:0 , scale:.8}}
             whileInView={{opacity:1, scale:1}}
             transition={{duration:0.5}}
            className="hidden bg-white cursor-auto w-[350px] max-md:w-[300px] max-md:h-[450px] h-[500px]  shadow-md group-hover:block absolute top-[30px] right-6 z-0">
              <div className=" mt-16 mx-9 text-blue-700 text-xl leading-loose">
                <p 
               
                >
                  <Link href="/">Home</Link>
                </p>
                <p>
                  <Link href="/mywork">My Work</Link>
                </p>
                <p>
                  <Link href="/resume">My Resume</Link>
                </p>
                <br />
                <hr />
                <p className="text-center text-gray-300">SAY HELLO</p>
                <p>
                  <a href="mailto:ahm3deldlay2@gmail.com" className="text-md">
                    ahm3d...@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://t.me/+201017803491" className="text-md">
                    https://t.me/...
                  </a>
                </p>
                <br />
                <hr />
                <div className="flex w-full  gap-4 mt-6 text-2xl text-gray-700">
                  <span>
                    <Link href="https://www.facebook.com/ahmedat.efaldaly/">
                      <CiFacebook />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://wa.me/+201017803491">
                      <FaWhatsapp />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://www.linkedin.com/in/ahmed-eldaly-237479340/">
                      <CiLinkedin />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://github.com/ahmedaldaly">
                      <FaGithub />
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Header;
