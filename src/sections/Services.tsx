import { ConfigProvider, Divider } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    { url: "/assets/relocate.jpeg", title: "homeRelocate" },
    { url: "/assets/office.jpeg", title: "officeRelocate" },
    { url: "/assets/betweenCites.jpeg", title: "betweenCities" },
    { url: "/assets/garbage.jpeg", title: "garbageCollection" },
    { url: "/assets/buildMaterials.jpeg", title: "buildMaterials" },
    { url: "/assets/movers.jpeg", title: "movers" },
];
  return (
    <section className="p-4 flex flex-col gap-10 bg-primary text-white">
      <ConfigProvider
        theme={{
          token: {
            colorSplit: "white",
            colorTextHeading: "white",
            lineWidth: 1,
          },
        }}
      >
        <Divider orientation="left">
          <h4 className="font-bold text-xl">{t("services")}</h4>
        </Divider>
        {services.map((service, index) => (
          <motion.div 
          key={index}
          initial={{
            opacity: 0,
            x: index%2 === 0 ?-25 : 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          >
            <ServiceCard url={service.url} title={service.title} />

          </motion.div>
        ))}
      </ConfigProvider>
    </section>
  );
};

export default Services;
