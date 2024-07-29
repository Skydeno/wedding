import Image from "next/image";
import Link from "next/link";
import React from "react";

const Photos = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`text-3xl font-dance text-center p-6`}>
        Zeskanuj kod aby dodać zdjęcia
      </h1>
      <Image
        className=""
        src="/images/qr.png"
        width={250}
        height={100}
        alt="qr-code"
      />
      <h1 className={`text-3xl font-dance text-center p-6`}>
        lub skorzystaj z{" "}
        <Link
          href={`https://weduploader.com/upload/eZskdiROAIORnbpf`}
          className="underline text-blue"
        >
          tego
        </Link>{" "}
        linku
      </h1>
      <ul className="text-center mt-4">
        <li>1. Po dodaniu nie można usunąć</li>
        <li>2. Jeżeli dodałeś coś omyłkowo - daj nam znać a usuniemy</li>
        <li>3. Po wszystkim udostępnimy tutaj link do zdjęć</li>
      </ul>
    </div>
  );
};

export default Photos;
