import React from "react";
import { Column } from "@ant-design/plots";

const DemoColumn = () => {
  const data = [
    {
      type: "Category 1",
      sales: 38,
    },
    {
      type: "Category 2",
      sales: 52,
    },
    {
      type: "Category 3",
      sales: 61,
    },
    {
      type: "Category 4",
      sales: 145,
    },
    {
      type: "Category 5",
      sales: 48,
    },
    {
      type: "Category 6",
      sales: 43,
    },
    {
      type: "Category 7",
      sales: 53,
    },
    {
      type: "Category 8",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    height: 350,
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Category",
      },
      sales: {
        alias: "Sales",
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
