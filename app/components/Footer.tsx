import React from 'react'
import Link from 'next/link'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-20 bg-[#3d155f] text-green-300">
    <div className="w-[60%] max-md:w-full flex justify-around my-28">
      <div className=" ">
        <h4 className="text-3xl text-gray-400 my-3">SAY HELLO</h4>
        <Link href="mailto:ahm3deldlay2@gmail.com">
          {" "}
          <p className="text-1xl  my-4">ahm3d...@gmail.com</p>
        </Link>
        <Link href="https://t.me/+201017803491">
          {" "}
          <p className="text-1xl  my-4">https://t.me/...</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <p className="text-1xl  my-5">Home</p>
        </Link>
        <Link href="/mywork">
          <p className="text-1xl  my-5">My Work</p>
        </Link>
       
        <Link href="/resume">
          {" "}
          <p className="text-1xl  my-5">My Résumé</p>
        </Link>
      </div>
    </div>
    <hr className="w-[80%] mx-[10%]" />
    <div className="flex w-full justify-end px-[10%]  gap-4 mt-6 text-2xl text-white">
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
  )
}

export default Footer