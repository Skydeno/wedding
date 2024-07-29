import React from "react";
import { GrUserFemale, GrUser } from "react-icons/gr";

interface BusinessCard {
  name: string;
  phone: string;
  female?: boolean;
}

const BusinessCard = ({ name, phone, female }: BusinessCard) => {
  return (
    <div
      className={`flex gap flex-col items-center mb-8 p-2 text-center border-2 ${
        female ? "border-rose" : "border-blue"
      } rounded-xl`}
    >
      <div>
        <h2 className={`font-dance text-3xl`}>{name}</h2>
        <h2 className={`font-dance text-3xl`}>{phone}</h2>
      </div>
    </div>
  );
};

export default BusinessCard;
