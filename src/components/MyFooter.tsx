import { Footer } from "antd/es/layout/layout";
import React from "react";

const MyFooter: React.FC = () => {
  const contacts = [
    {
      text: "0708 792 569",
      link: "tel:+996708792569",
    },
    {
      text: "0555 792 569",
      link: "tel:+996555792569",
    },
    {
      text: "0777 792 569",
      link: "tel:+996777792569",
    },
  ];
  return (
    <Footer className="flex flex-col gap-8">
      <ul className="flex justify-evenly">
        <div>
          {contacts.map((contact) => (
            <li key={contact.text} className="text-primary">
              <a className="text-lg" href={contact.link}>
                <span className="font-bold">{contact.text}</span>
              </a>
            </li>
          ))}
        </div>
        <div>
          {contacts.map((contact) => (
            <li key={contact.text} className="text-primary">
              <a className="text-lg" href={contact.link}>
                <span className="font-bold">{contact.text}</span>
              </a>
            </li>
          ))}
        </div>
      </ul>
      <p className="text-center text-gray-500">
        © 2024 All Rights Reserved. Designed by <br />
        <a
          href="https://www.linkedin.com/in/bayel-ibraev-5a0860253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Bayel Ibraev
        </a>
      </p>
    </Footer>
  );
};

export default MyFooter;
