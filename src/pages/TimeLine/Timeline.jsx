import React, { useContext, useState } from 'react';
import { HistoryContext } from '../../context/TimelineContext';
import { GiEmptyMetalBucket } from 'react-icons/gi';
import Emptytimeline from '../../component/ui/Emptytimeline';

const Timeline = () => {
    const { personData } = useContext(HistoryContext);

    //  filter state
    const [filter, setFilter] = useState("All");

    // filter logic
    const filteredData =
        filter === "All"
            ? personData
            : personData.filter(person => person.type === filter);

    return (
        <>
            <div className='w-[90%] md:container mx-auto'>
                <div>
                    <h2 className='text-2xl font-bold mt-5 mb-5'>TimeLine</h2>
                    {/* filter ui */}
                    <button
                        className="btn mb-4"
                        popoverTarget="popover-filter"
                        style={{ anchorName: "--anchor-filter" }}
                    >
                        Filtered By :{filter}
                    </button>

                    <ul
                        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto"
                        id="popover-filter"
                        style={{ positionAnchor: "--anchor-filter" }}
                    >
                        <li><a onClick={() => setFilter("All")}>All</a></li>
                        <li><a onClick={() => setFilter("Call")}>Call</a></li>
                        <li><a onClick={() => setFilter("Text")}>Text</a></li>
                        <li><a onClick={() => setFilter("Video")}>Video</a></li>
                    </ul>
                </div>

                {/* Timeline content */}
                {
                    personData.length === 0 ? <Emptytimeline /> : <div>
                        {
                            filteredData.map((person, ind) => (
                                <div
                                    className='container mx-auto flex gap-5 shadow-md border border-gray-200 mt-5 mb-5 p-5'
                                    key={ind}
                                >
                                    <div className='text-3xl'>
                                        {
                                            `  ${person.type === 'Call' ? "📞" :
                                                person.type === "Text" ? "💬" : "📽️"
                                            }`
                                        }
                                    </div>

                                    <div>
                                        <h2 className='text-gray-500'>
                                            <span className='font-bold text-black'>{person.type}</span> with {person.friendData.name}
                                        </h2>

                                        <h2>
                                            {new Date().toLocaleString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })}
                                        </h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }

            </div>

        </>
    );
};

export default Timeline;