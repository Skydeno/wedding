import Link from "next/link";
import React from "react";

interface Tile {
  title: string;
  className: string;
  href: string;
}

const Tile = ({ title, className, href }: Tile) => {
  return (
    <Link href={href} className="w-full">
      <div
        className={`flex flex-col w-full  ${className} bg-cover h-52 shadow-xl rounded-xl`}
      >
        <div className={`bg-theme w-5/6 m-auto mb-8 text-center pt-2 pb-2`}>
          <h3 className={`font-dance text-2xl font-semibold`}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Tile;
