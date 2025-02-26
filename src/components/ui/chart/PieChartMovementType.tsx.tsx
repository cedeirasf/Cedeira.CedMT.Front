import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

interface Props {
  data: { name: string; value: number; color: string }[];
}

export const PieChartMovementType = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          activeShape={renderActiveShape}
          activeIndex={activeIndex}
          cx="50%"
          cy={200}
          startAngle={360}
          endAngle={0}
          paddingAngle={3}
          dataKey="value"
          cornerRadius={2}
          innerRadius={65}
          outerRadius={90}
          stroke="none"
          labelLine={false}
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        className="fill-current"
        style={{ fill }}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        className="stroke-current fill-none"
        style={{ stroke: fill }}
      />
      <circle cx={ex} cy={ey} r={2} className="stroke-none" style={{ fill }} />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey - 5}
        textAnchor={textAnchor}
        className="fill-current text-md font-bold"
      >{`Total: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        className="fill-current text-bold text-foreground-foreground text-md"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};
