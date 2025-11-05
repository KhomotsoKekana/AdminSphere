import { ProCard } from "@ant-design/pro-components";
import React, { useState } from "react";

const AccountSettings: React.FC = () => {
  const [tab, setTab] = useState("tab1");
  return (
    <ProCard
      style={{ height: "100%" }}
      tabs={{
        tabPosition: "left",
        activeKey: tab,
        items: [
          {
            label: `Basic Settings`,
            key: "tab1",
            children: `Basic Settings`,
          },
          {
            label: `New Message Notifications`,
            key: "tab2",
            children: `New Message Notifications`,
          },
        ],
        onChange: (key) => {
          setTab(key);
        },
      }}
    />
  );
};

export default AccountSettings;
