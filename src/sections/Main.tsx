import React from "react";
import { motion } from "framer-motion";
import { Button, Collapse, CollapseProps } from "antd";
import { useTranslation } from "react-i18next";
import { PhoneFilled } from "@ant-design/icons";
import OtherContacts from "../components/OtherContacts";

const Main: React.FC = () => {
  const { t } = useTranslation();
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <span className="text-lg font-bold">{t('contacts')}</span>,
      showArrow: false,
      children: <OtherContacts />
    },

  ];
  return (
    <section className="px-4 flex flex-col gap-10">
      <motion.h1
        initial={{
          opacity: 0,
          x: -25,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        className="w-3/4 font-bold text-3xl text-primary pl-2 my-4"
      >
        {t("mainText")}
      </motion.h1>

      <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }}
      >
        <Button
          className="bg-primary font-bold w-full"
          size="large"
          type="primary"
          icon={<PhoneFilled />}
        >
          {t("call")}
        </Button>
      </motion.div>
      <motion.div 
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
      className="border rounded-lg">
      <Collapse size="large" className="bg-white" items={items} bordered={false} defaultActiveKey={['1']}  />
      </motion.div>
    </section>
  );
};

export default Main;
