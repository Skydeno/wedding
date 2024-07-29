import React from "react";

const Banner = () => {
  return (
    <div
      className={`w-full h-[500px] bg-flowers flex justify-center bg-cover bg-no-repeat bg-center sm:bg-cover sm:bg-[url('/images/gipsowka2.jpg')] shadow-xl rounded-xl`}
    >
      <div
        className={`bg-theme h-14 flex items-center w-3/4 lg:w-7/12 justify-center mt-auto mb-auto sm:mb-24`}
      >
        <h2 className={`font-dance text-3xl`}>Alicja i Konrad</h2>
      </div>
    </div>
  );
};

export default Banner;
