import React from "react";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
    <div className="flex flex-col items-center w-full min-h-screen py-20 bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <embed
          src="/my cv.pdf"
          type="application/pdf"
          className="w-full h-[600px] rounded-md"
          />
        <a
          href="/my cv.pdf"
          download
          className="block mt-4 text-blue-600 font-semibold text-center hover:text-blue-800 transition duration-300"
          >
          Download PDF
        </a>
      </div>
    </div>
      <Footer />
          </>
  );
};

export default Page;
