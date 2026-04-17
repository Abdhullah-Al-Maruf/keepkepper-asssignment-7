import React, { createContext, useState } from 'react';

// export context
export const HistoryContext = createContext();

const TimelineContext = ({ children }) => {
    const [personData, setPersonData] = useState([]);

    const handleClick = (friendData,type) => {
        setPersonData(prev => [...prev, 
            {
                friendData,
                type
            }
        ]);
        console.log(type);
    };

    const globalData = {
        handleClick,
        personData,
        setPersonData
    };

    return (
        <HistoryContext.Provider value={globalData}>
            {children}
        </HistoryContext.Provider>
    );
};

export default TimelineContext;