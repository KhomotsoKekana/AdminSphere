import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const data = [
    {
      type: "Category One",
      value: 27,
    },
    {
      type: "Category Two",
      value: 25,
    },
    {
      type: "Category Three",
      value: 18,
    },
    {
      type: "Category Four",
      value: 15,
    },
    {
      type: "Category Five",
      value: 10,
    },
    {
      type: "Category Six",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    height: 350,
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;
