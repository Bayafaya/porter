import { ConfigProvider, Divider } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  // Define your component's props here
}

const AboutUs: React.FC<Props> = () => {
  // Your component logic goes here
  const { t } = useTranslation();
  return (
    <section className="p-4 pb-8 flex flex-col gap-4 bg-primary text-white">
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
          <h4 className="font-bold text-xl">{t("aboutUs")}</h4>
        </Divider>
        <p className="text-lg">
          Наша компания предлагает профессиональные услуги грузоперевозки для
          вашего бизнеса. Мы обеспечиваем надежную и безопасную доставку грузов
          по всей стране. Наш опытный персонал транспортных
          средств позволяют нам обеспечивать эффективное выполнение заказов
          любого масштаба и сложности. Мы предлагаем широкий спектр услуг,
          включая перевозку груза любого вида. Мы ценим ваше
          время и деньги, поэтому предлагаем конкурентоспособные тарифы и
          оперативное выполнение заказов. Наша цель - обеспечить вам
          максимальный комфорт и уверенность в доставке ваших грузов вовремя и в
          целости и сохранности. Обратитесь к нам сегодня и доверьте нам свои
          грузы для перевозки!
        </p>
      </ConfigProvider>
    </section>
  );
};

export default AboutUs;
