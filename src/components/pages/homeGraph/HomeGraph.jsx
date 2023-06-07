import React from "react";
import "./HomeGraph.css";
import { data } from "../../../data";
import Button from "@mui/material/Button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, Legend } from "recharts";
import { barData } from "../../../data";

const HomeGraph = () => {
  console.log(barData);
  return (
    <div className="homegraph">
      <div className="homegraph-left">
        <div className="homegraph-left-top">
          <div className="homegraph-left-top-heading">
            <h2>Unique Visitor</h2>
          </div>
          <div className="homegraph-left-top-buttons">
            <Button variant="outlined">Months</Button>
            <Button variant="outlined">Weeks</Button>
          </div>
        </div>
        <div className="homegraph-left-bottom">
          <ResponsiveContainer width="100%" aspect={3}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />

              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="#b6b5d1"
                fill="#ebebf0"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="homegraph-right">
        <h2>Income Overview</h2>
        <div className="homegraph-right-bottom">
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeGraph;
