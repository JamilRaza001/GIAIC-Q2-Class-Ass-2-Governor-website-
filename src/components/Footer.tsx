import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex justify-around">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Core Courses</h3>
            <ul className="space-y-2 text-lg">
              <Link href={"/"}>
                <li>Programming Fundamentals</li>
              </Link>
              <Link href={"/"}>
                {" "}
                <li>Web2 Using NextJS</li>
              </Link>
              <Link href={"/"}>
                {" "}
                <li>Earn as You Learn</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
            <ul className="space-y-2 text-lg">
              <Link href={"/"}>
                {" "}
                <li>Web 3 and Metaverse</li>
              </Link>
              <Link href={"/"}>
                <li>Cloud-Native Computing</li>
              </Link>
              <Link href={"/"}>
                <li>Artificial Intelligence (AI) and Deep Learning</li>
              </Link>
              <Link href={"/"}>
                <li>Ambient Computing and IoT</li>
              </Link>
              <Link href={"/"}>
                <li>Genomics and Bioinformatics</li>
              </Link>
              <Link href={"/"}>
                <li>Network Programmability and Automation</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex space-x-4 mb-4">
              <Link href={"/"}>
                <FaFacebookF className="text-white w-6 h-6 rounded-full bg-blue-800 pt-1 pb-1" />
              </Link>
              <Link href={"/"}>
                <FaYoutube className="text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1" />
              </Link>
              <Link href={"/"}>
                {" "}
                <FaTwitter className="text-white w-6 h-6 rounded-full bg-blue-500 pt-1 pb-1" />
              </Link>
              <Link href={"/"}>
                <FaInstagram className="text-white w-6 h-6 rounded-full bg-pink-500 pt-1 pb-1" />
              </Link>
              <Link href={"/"}>
                <FaTiktok className="text-white w-6 h-6 rounded-full bg-black pt-1 pb-1" />
              </Link>
            </div>
            <a
              href="mailto:education@governorsindh.com"
              className="text-blue-800 underline flex items-center gap-3"
            >
              <AiOutlineMail className="size-6" />
              education@governorsindh.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
