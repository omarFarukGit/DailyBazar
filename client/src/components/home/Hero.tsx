import { heroSectionData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">
      <Image
        src={heroSectionData.hero_image}
        alt="hero"
        className=" absolute inset-0 w-full h-full"
      ></Image>

      <div className=" absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent" />

      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className=" max-w-xl xl:pl-10">
<span>
    
</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
