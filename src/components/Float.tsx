import React from "react";
import {
  CommentOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";

interface FloatProps {
  // Define the props for your component here
}

const Float: React.FC<FloatProps> = () => {

  return (
    <div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 20 }}
        icon={<CommentOutlined />}
      >
        <FloatButton
          icon={<PhoneOutlined />}
        />
        <FloatButton
          icon={<WhatsAppOutlined />}
        />
      </FloatButton.Group>
    </div>
  );
};

export default Float;
