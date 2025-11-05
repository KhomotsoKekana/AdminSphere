import React, { useState } from "react";
import { StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
const imgStyle = {
  display: "block",
  width: 42,
  height: 42,
};

const DemoCard = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <StatisticCard.Group direction={responsive ? "column" : "row"}>
        <StatisticCard
          statistic={{
            title: "Payment Amount",
            value: 3276,
            icon: (
              <img
                style={imgStyle}
                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                //src="zar.png"
                alt="icon"
              />
            ),
          }}
        />
        <StatisticCard
          statistic={{
            title: "Visitors",
            value: 238,
            icon: (
              <img
                style={imgStyle}
                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                alt="icon"
              />
            ),
          }}
        />
        <StatisticCard
          statistic={{
            title: "Successful Orders",
            value: 87,
            icon: (
              <img
                style={imgStyle}
                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                alt="icon"
              />
            ),
          }}
        />
        <StatisticCard
          statistic={{
            title: "Page Views",
            value: 1754,
            icon: (
              <img
                style={imgStyle}
                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                alt="icon"
              />
            ),
          }}
        />
      </StatisticCard.Group>
    </RcResizeObserver>
  );
};

export default DemoCard;
