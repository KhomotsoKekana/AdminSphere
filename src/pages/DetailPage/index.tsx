import { ProCard } from "@ant-design/pro-components";
import React from "react";

const DetailPage: React.FC = () => {
  return (
    <ProCard wrap gutter={[0, 50]}>
      <ProCard colSpan={24} wrap hoverable title="Refund Request">
        <ProCard colSpan={6}>Pickup Order No.: 1000000000</ProCard>
        <ProCard colSpan={6}>Status: Picked Up</ProCard>
        <ProCard colSpan={6}>Sales Order No.: 1234123421</ProCard>
        <ProCard colSpan={6}>Suborder: 3214321432</ProCard>
      </ProCard>
      <ProCard colSpan={24} wrap hoverable title="User Information">
        <ProCard colSpan={6}>User Name: John Doe</ProCard>
        <ProCard colSpan={6}>Phone: 081 000 0000</ProCard>
        <ProCard colSpan={6}>Preferred Courier: DHL Express</ProCard>
        <ProCard colSpan={6}>Pickup Address: 123 Samrand Avenue, Midrand, Gauteng</ProCard>
        <ProCard colSpan={6}>Alternate Address: 45 Allandale Road, Vorna Valley, Midrand</ProCard>
        <ProCard colSpan={6}>Remarks: None</ProCard>
      </ProCard>
    </ProCard>
  );
};

export default DetailPage;
