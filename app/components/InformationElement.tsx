import React from "react";

import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import { GiDiamondRing } from "react-icons/gi";
import BusinessCard from "./BusinessCard";
import { STATESENUM } from "../utils";

export interface InformationElementI {
  date?: string;
  time?: string;
  where?: string;
  title?: string;
  src?: STATESENUM;
  setView: React.Dispatch<React.SetStateAction<STATESENUM>>;
}

const BrideSquad = [
  {
    name: "Alicja Kwaśniewska",
    phone: "500 552 700",
  },
  {
    name: "Zuzanna Zawalich",
    phone: "882 344 554",
  },
];

const GroomSquad = [
  {
    name: "Konrad Pietralski",
    phone: "793 477 176",
  },
  {
    name: "Mateusz Bednarski",
    phone: "500 451 600",
  },
];

const InformationElement = ({
  date,
  time,
  where,
  title,
  src,
  setView,
}: InformationElementI) => {
  return (
    <>
      {src !== STATESENUM.Contact && (
        <div>
          <h1 className={`text-3xl font-dance text-center p-6`}>{title}</h1>
          {src === STATESENUM.Family && (
            <div className={`w-full shadow-xl`}>
              <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Villa%20Eva,%20Stefana%20Batorego%2028,%2080-251%20Gda%C5%84sk+(Villa%20Eva)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
            </div>
          )}
          {src === STATESENUM.Friends && (
            <div className={`w-full shadow-xl`}>
              <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Forum%20Gda%C5%84sk,%20Taras,%20Targ%20Sienny%207,%2080-806%20Gda%C5%84sk+(Villa%20Eva)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
            </div>
          )}
          {src === STATESENUM.Wedding && (
            <div className={`w-full shadow-xl`}>
              <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Wa%C5%82y%20Jagiello%C5%84skie%201,%2080-854%20Gda%C5%84sk+(Nowy%20Ratusz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
            </div>
          )}
          <div className="flex flex-col">
            <div className="flex items-center gap-10 m-auto w-3/4 pt-12">
              <IoCalendarOutline size={40} />
              <h2 className="text-2xl font-dance">{date}</h2>
            </div>
            <div className="flex items-center gap-10 m-auto w-3/4 pt-12">
              <HiOutlineClock size={40} />
              <h2 className="text-2xl font-dance text-left">{time}</h2>
            </div>
            <div className="flex items-center gap-10 m-auto w-3/4 pt-12">
              <GiDiamondRing size={40} />
              <h2 className="text-3xl font-dance text-left">{where}</h2>
            </div>
          </div>
        </div>
      )}
      {src === STATESENUM.Contact && (
        <div>
          <h1 className={`text-3xl font-dance text-center p-6`}>{title}</h1>
          <div className="flex flex-col">
            <h2 className={`text-3xl font-dance text-center p-6 font-black`}>
              Bride Squad
            </h2>
            {BrideSquad.map((person) => (
              <BusinessCard
                key={person.name}
                name={person.name}
                phone={person.phone}
                female
              />
            ))}
            <h2 className={`text-3xl font-dance text-center p-6 font-black`}>
              Groom Squad
            </h2>
            {GroomSquad.map((person) => (
              <BusinessCard
                key={person.name}
                name={person.name}
                phone={person.phone}
              />
            ))}
          </div>
        </div>
      )}
      <button
        className={`w-full p-6 shadow-xl text-center items-center mt-10 rounded-xl mb-10`}
        onClick={() => setView(STATESENUM.Start)}
      >
        <h3 className={`text-3xl font-dance`}>Powrót</h3>
      </button>
    </>
  );
};

export default InformationElement;
