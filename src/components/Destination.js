import React from "react";
import Image from "next/image";

const Destination = () => {
  return (
    <div className="bg-white max-w-md px-3 pt-10">
      <h1 className="text-slate-800 text-center text-[1.75rem] font-bold">
        We <span className="text-primary">always</span> focus on best{" "}
        <span className="text-secondary">Benefits</span> as well as{" "}
        <span className="text-secondary">Professional</span> Service
      </h1>
      <div>
        <div className="bg-slate-200 max-w-sm mx-auto p-3">
          <Image
            className="w-28 mt-10 sm:mt-1 top-36 left-64 mx-auto"
            src={"/images/car.svg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
          <h1 className="text-slate-800 text-xl text-center">Title</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            exercitationem enim temporibus, laborum ad fugiat nesciunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
