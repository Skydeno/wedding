import Image from "next/image";
import Link from "next/link";
import React from "react";

const Photos = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`text-3xl font-dance text-center p-6`}>
        Zdjęcia ze ślubu
      </h1>
      <Link
        href={
          "https://drive.google.com/drive/folders/1DtGwYs_H38qupQiuxT9JN58-hrwrXVb1?usp=sharing"
        }
      >
        <h1
          className={`text-3xl font-dance text-center p-6 underline text-blue`}
        >
          Dysk google
        </h1>
      </Link>
      <div className={"flex flex-row h-96 gap-20 mt-6"}>
        <Image
          className="rounded-xl shadow-lg"
          src="/images/sesja.jpg"
          width={250}
          height={100}
          alt="rodzina"
        />
        <Image
          className="rounded-xl shadow-lg"
          src="/images/urzad.jpg"
          width={550}
          height={100}
          alt="rodzina"
        />
        <Image
          className="rounded-xl shadow-lg"
          src="/images/jungla.jpg"
          width={280}
          height={100}
          alt="rodzina"
        />
      </div>
    </div>
  );
};

export default Photos;
