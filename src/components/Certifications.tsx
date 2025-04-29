import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    imageUrl: "/certificates/udemy.png",
    verifyUrl: "https://www.udemy.com/certificate/UC-9187e159-a171-472d-8d1b-c88a0ea782e9/",
  },
  {
    title: "Server side JavaScript with Node.js",
    imageUrl: "/certificates/courseraNodejs.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/6SY7F9PY5YSF",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    imageUrl: "/certificates/courseraNetworking.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/23HGSQM48BKK",
  },
  {
    title: "Programming in C++: A Hands-on Introduction",
    imageUrl: "/certificates/courseraC++.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/GFMFBBVRY8MJ",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#1e1e2f] to-[#151522]">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-md">
          🎓 Certifications
        </h2>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-5 shadow-lg overflow-hidden transition-all duration-300 text-white"
          >
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-md font-semibold hover:underline"
            >
              <BadgeCheck className="w-5 h-5 text-green-400" />
              <span>{cert.title}</span>
            </a>

            <p className="text-sm text-slate-200 mt-0 max-h-0 overflow-hidden group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
              {/* {cert.description} */}
            </p>

            <div
  className="mt-3 hidden group-hover:flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
>
  <img
    src={cert.imageUrl}
    alt={`${cert.title} Certificate`}
    className="w-full max-w-md rounded-md border border-gray-300 shadow-md"
  />
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
