import useClientSize from "$/hooks/useElementSize";
import { useStore } from "$/store";
import { Chart, registerables } from "chart.js";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const OverviewView = observer(() => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, containerHeight] = useClientSize(chartContainerRef);

  const mouseOver = useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <div className="container mx-auto px-10">
      <h1 className="font-semibold text-primary-content text-opacity-80 text-lg py-5">
        Indexed Overview
      </h1>

      <div className="flex justify-between">
        <div className=" bg-secondary-content bg-opacity-40 rounded-md w-1/2 h-80 shadow-md p-2">
          <div className="text-primary-content text-xl">TVL</div>
          <div className="text-primary text-3xl font-semibold">$3.71b</div>
          <div ref={chartContainerRef} className=" h-64">
            <LineChart
              width={containerWidth}
              height={containerHeight}
              data={data}
            >
              <Line
                onMouseOver={mouseOver}
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
});

export default OverviewView;
