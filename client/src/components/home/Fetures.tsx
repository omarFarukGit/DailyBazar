import { heroSectionData } from "@/assets/assets";
import React from "react";

const Fetures = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className=" bg-white py-5 border border-app-border/80 rounded-xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroSectionData.hero_features.map((Fetures, i) => (
              <div key={i} className="flex items-center gap-3 py-3">
                <div className=" size-10 rounded-lg bg-app-cream flex justify-center items-center shrink-0">
                  <Fetures.icon className=" size-5" />
                </div>
                <div>
                  <p className=" text-sm font-semibold text-app-green">
                    {Fetures.title}
                  </p>
                  <p className=" text-xs text-app-text-light">{Fetures.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fetures;
