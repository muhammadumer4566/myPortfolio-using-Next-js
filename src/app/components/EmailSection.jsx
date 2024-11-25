"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import IndeedIcon from "../../../public/indeed-icon.svg"; 

const EmailSection = () => {
  return (
    <section id="contact" className="relative py-16 px-6 mt-12 md:px-12 lg:px-24 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-[#ADB7BE] max-w-2xl mx-auto">
          I’m available via email or phone. You can also connect with me on my social profiles. Looking forward to hearing from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Details */}
        <div className="p-6 bg-[#223047] rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-[#ADB7BE]">Email</h4>
              <p className="text-white font-medium text-lg break-words">umerdeveloper.2002@gmail.com</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#ADB7BE]">Phone</h4>
              <p className="text-white font-medium text-lg">+92 3242046426</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#ADB7BE]">Location</h4>
              <p className="text-white font-medium text-lg">Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="p-6 bg-[#223047] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <p className="text-[#ADB7BE]">
            Follow me on social media for updates and more insights.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mt-6">
            <Link href="https://github.com/muhammadumer4566" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-umer-2857a5285/" target="_blank">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" width={40} height={40} />
            </Link>
            <Link href="https://www.facebook.com/people/Muhammad-Umer/pfbid0ke5o3WgPobs1v17Hwg72kHmypr3hZpEFrMTcapaTUWr8VemMELVc3EiAMch66vwHl/" target="_blank">
              <Image src={IndeedIcon} alt="Indeed Icon" width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;