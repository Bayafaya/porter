import React from "react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  url: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ url, title }) => {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col gap-4">
      <img src={url} alt="office" className="object-cover h-[264px]" />
      <h5 className="text-xl text-center">{t(title)}</h5>
    </article>
  );
};

export default ServiceCard;
