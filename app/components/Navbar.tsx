"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";

const Navbar = () => {
  const [home, setHome] = useState(false);

  const currentRoute = usePathname();

  useEffect(() => {
    if (currentRoute !== "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [currentRoute]);

  return (
    <div
      className={`pt-3 pb-3 w-full flex ${
        home ? "justify-between" : "justify-end"
      } items-center`}
    >
      {home && (
        <Link href="/">
          <SlArrowLeft size={20} />
        </Link>
      )}

      <div className={`flex items-center`}>
        <img className={`h-16`} alt="" src="/images/serduszka.png" />
        <h1 className={`font-dance text-3xl`}>23 sierpnia 2024</h1>
      </div>
    </div>
  );
};

export default Navbar;
