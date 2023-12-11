import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-background group xl:relative ">
      <Image
        className="w-20 mt-10 sm:mt-1 top-36 left-64 group-hover:animate-pulse pb-10 hidden xl:block xl:absolute "
        src={"/images/baloon.svg"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
      <Navbar />
      <div className="px-4 xl:px-0 pt-5 xl:pt-10 max-w-md mx-auto sm:max-w-xl lg:max-w-5xl xl:max-w-6xl lg:flex flex-row-reverse justify-between items-center">
        <Image
          className=" basis-[40%] 2xl:basis-[50%] w-full lg:max-w-md xl:max-w-2xl 2xl:max-w-3xl h-full group-hover:scale-110 transition-all duration-500  object-cover  bg-cover bg-center"
          src={"/images/hero.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="basis-[60%] 2xl:basis-[50%] ">
          <h4 className="text-secondary text-xl font-medium flex items-center gap-3">
            Explore the World{" "}
            <span>
              <Image
                className="w-7 h-7 group-hover:scale-110 transition-all duration-500 drop-shadow-xl object-cover  bg-cover bg-center"
                src={"/images/explore.png"}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </span>
          </h4>
          <h1 className="text-slate-800  text-[2.4rem] sm:text-[2.8rem] md:text-[3.5rem] mt-5 font-bold leading-snug md:leading-snug xl:text-[4rem]">
            Let’s find your dream{" "}
            <span className="text-primary">Destination</span> make with enjoy
          </h1>
          <h3 className="text-slate-600 mt-5 text-lg">
            Travor is one of the most popular Travel agency for those who want
            to explore the wold and try to make adventure
          </h3>
          <div className=" mt-8  flex gap-10 items-center">
            <Link
              className="bg-primary px-5 py-2 md:text-lg md:font-bold rounded-full"
              href="#"
            >
              Plan a Trip
            </Link>
            <Link
              className="text-secondary md:text-lg underline text-lg"
              href="#"
            >
              Get Price
            </Link>
          </div>
          <Image
            className="w-full mt-10 sm:mt-1 pb-10 md:hidden "
            src={"/images/pesawat.png"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>
      </div>
      <Image
        className="w-[35rem] mt-10 sm:mt-1 pb-10 hidden md:block "
        src={"/images/pesawat.png"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default Hero;
