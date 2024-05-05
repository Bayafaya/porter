import {
  CheckCircleFilled,
  FieldTimeOutlined,
  PhoneFilled,
  TruckFilled,
} from "@ant-design/icons";
import { ConfigProvider, Divider, Timeline } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 pt-4 flex flex-col gap-10">
      <ConfigProvider
        theme={{
          token: {
            colorSplit: "black",
            colorTextHeading: "black",
            lineWidth: 1,
          },
        }}
      >
        <Divider orientation="left">
          <h4 className="font-bold text-xl">{t("howWeWorks")}</h4>
        </Divider>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              itemPaddingBottom: 40,
            },
          },
        }}
      >
        <Timeline
          className="text-black  font-bold"
          items={[
            {
              children: <span className="text-lg">{t("youCallToUs")}</span>,
              dot: <PhoneFilled />,
            },
            {
              children: (
                <span className="text-lg">{t("weSelectCarDevelopRoute")}</span>
              ),
              dot: <TruckFilled />,
            },
            {
              children: <span className="text-lg">{t("weAgreePrice")}</span>,
              dot: <FieldTimeOutlined size={20} />,
            },
            {
              children: (
                <span className="text-lg">{t("weDeliverOnTime")}</span>
              ),
              color: "green",
              dot: <CheckCircleFilled />,
            },
          ]}
        />
      </ConfigProvider>
    </section>
  );
};

export default HowItWorks;
