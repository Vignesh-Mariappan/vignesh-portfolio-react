import SectionHeading from "../shared/SectionHeading";
import React, { useContext } from "react";
import { AppContext } from "../App";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie
} from "recharts";

const data = [
  {
    skill: "Html5",
    rating: 6
  },
  {
    skill: "Css3",
    rating: 7
  },
  {
    skill: "JS",
    rating: 8
  },
  {
    skill: "React",
    rating: 7
  },
  {
    skill: "Scss",
    rating: 6
  }
];

const softwareDev = [
  { name: "Front-End", value: 90 },
  { name: "Back-End", value: 10 }
];

const SoftwareDevelopment = () => {
  const { mode } = useContext(AppContext);

  return (
    <div className="SoftwareDevelopment">
      <SectionHeading secHeading="Development" />
      <div className="chart-container">
        <BarChart
          style={{
            backgroundColor: mode === "dark" ? "#131318" : "#eee",
            marginTop: "2rem",
            marginLeft: "-3rem"
          }}
          width={400}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="rgb(0, 109, 172)" />
        </BarChart>

        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={softwareDev}
            cx={200}
            cy={200}
            outerRadius={100}
            fill="rgb(0, 109, 172)"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
