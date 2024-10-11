import React from "react";
import { TextFade } from "./TextFade";

interface HeaderTextProps {
  text: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <TextFade direction="down">
      <h2 className="text-4xl sm:text-7xl mb-4 text-center bg-gradient-to-r from-gray-700 to-gray-100 bg-clip-text text-transparent ">
        {text}
      </h2>
    </TextFade>
  );
};

export default HeaderText;
