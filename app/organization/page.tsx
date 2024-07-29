"use client";
import React, { useEffect, useState } from "react";
import InformationElement, {
  InformationElementI,
} from "../components/InformationElement";
import { STATESENUM } from "../utils";

const content = [
  {
    text: "Ceremonia ślubna",
    state: STATESENUM.Wedding,
    date: "23.08.2024",
    time: "13:30",
    where: "Nowy Ratusz w Gdańsku",
    src: STATESENUM.Wedding,
  },
  {
    text: "Przyjęcie dla rodzinki",
    state: STATESENUM.Family,
    date: "23.08.2024",
    time: "14:00",
    where: "Villa Eva",
    src: STATESENUM.Family,
  },
  {
    text: "Przyjęcie dla znajomych",
    state: STATESENUM.Friends,
    date: "23.08.2024",
    time: "20:00",
    where: "Jungla Forum",
    src: STATESENUM.Friends,
  },
  {
    text: "Kontakt",
    state: STATESENUM.Contact,
    src: STATESENUM.Contact,
  },
];

const Organization = () => {
  const [inView, setInView] = useState(STATESENUM.Start);
  const [data, setData] = useState<InformationElementI>();

  return (
    <>
      {inView === "start" && (
        <div
          className={`pt-20 flex flex-col gap-11 justify-center items-center  pb-20 rounded-xl  relative`}
        >
          <div
            className={`absolute bg-cover bg-flowers bg-blend-darken h-[550px] w-full rounded-xl blur-sm sm:bg-cover sm:bg-[url('/images/gipsowka2.jpg')]`}
          />
          {content.map((element) => (
            <div
              key={element.text}
              className={`font-dance text-3xl text-center shadow-xl w-5/6 justify-center bg-theme z-30 hover:cursor-pointer`}
              onClick={() => {
                setInView(element.state),
                  setData({
                    date: element.date,
                    time: element.time,
                    where: element.where,
                    title: element.text,
                    src: element.src,
                    setView: setInView,
                  });
              }}
            >
              <h1 className={`p-4`}>{element.text}</h1>
            </div>
          ))}
        </div>
      )}
      {inView !== STATESENUM.Start && (
        <InformationElement
          date={data?.date}
          time={data?.time}
          where={data?.where}
          title={data?.title}
          src={data?.src}
          setView={setInView}
        />
      )}
    </>
  );
};

export default Organization;
