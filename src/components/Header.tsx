import React from "react";
import Burger from "./Burger";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Props {
  // Define the props for your component here
}

const Header: React.FC<Props> = () => {
  // Implement your component logic here
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "kg" ? "ru" : "kg");
  };
  return (
    <header className="text-primary border-b flex items-center justify-between px-2 gap-4">
      <motion.img
        initial={{
          opacity: 0,
          x: 25,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        className="h-16 cursor-pointer"
        src="src/assets/logo.png"
        alt="logo"
      />

      <a
        href="tel:+996708792569"
        className="link-underline link-underline-black text-black font-medium ml-auto mr-0"
      >
        0708 792 569
      </a>
      <button
        onClick={() => changeLanguage()}
        className="text-black font-medium link-underline link-underline-black"
      >
        {i18n.language === "kg" ? "Кр" : "Рус"}
      </button>
      <Burger />
    </header>
  );
};

export default Header;
