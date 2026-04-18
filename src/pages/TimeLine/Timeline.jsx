import React, { useContext } from 'react';
import { HistoryContext } from '../../context/TimelineContext';
import { GiEmptyMetalBucket } from 'react-icons/gi';
import Emptytimeline from '../../component/ui/Emptytimeline';

const Timeline = () => {
    const { personData } = useContext(HistoryContext);



    return (
        <>
            <h2>TimeLine</h2>

            {
                personData.length === 0 ?<Emptytimeline/> : <div>
                    {
                        personData.map((person, ind) => <div className='container mx-auto flex  gap-5 shadow-md border border-gray-200 mt-5 mb-5 p-5'
                            key={ind}>
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

                        </div>)
                    }
                </div>

            }


        </>

    );
};

export default Timeline;