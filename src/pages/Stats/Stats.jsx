import React, { useContext } from 'react';
import { HistoryContext } from '../../context/TimelineContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BiStats } from 'react-icons/bi';


const Stats = () => {
    const { personData } = useContext(HistoryContext);

    // 1. Calculate Counts
    const counts = personData.reduce(
        (acc, item) => {
            if (item.type === "Call") acc.call++;
            else if (item.type === "Text") acc.text++;
            else if (item.type === "Video") acc.video++;
            return acc;
        },
        { call: 0, text: 0, video: 0 }
    );


    const data = [
        { name: "Call", value: counts.call },
        { name: "Text", value: counts.text },
        { name: "Video", value: counts.video },
    ];


    const COLORS = ["#0088FE", "#00C49F", "#FF8042"];
//  check the value is empty or not
    const isempty = data.every(i => i.value === 0);

    return (
        <div className="flex flex-col  rounded-md mt-10 mb-10 shadow-xl container mx-auto items-center justify-center  p-5">
            <h2 className="text-2xl font-bold mb-4">Interaction Stats</h2>


            <div style={{ width: '100%', height: 500 }}>

                {

                    isempty ? <div className="flex flex-col items-center justify-center h-full text-center p-10">

                        <div className="text-6xl mb-4"><BiStats/></div>

                        <h3 className="text-xl font-semibold text-gray-700">
                            No Data Available
                        </h3>

                        <p className="text-gray-500 mt-2 max-w-sm">
                            You haven't made any calls, texts, or videos yet. Start interacting to see your stats here.
                        </p>

                    </div> : <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={120}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={10}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />

                        </PieChart>
                    </ResponsiveContainer>
                }

            </div>


        </div>
    );
};

export default Stats;