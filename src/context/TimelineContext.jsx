import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// export context
export const HistoryContext = createContext();

const TimelineContext = ({ children }) => {
    const [personData, setPersonData] = useState([]);

    const handleClick = (friendData,type) => {
        // toast messages
          const messages = {
        Text: "Text message sent 📩",
        Call: "Audio message sent 🎧",
        Video: "Video message sent 🎥"
    };
 toast.success(messages[type]);

//  state updatation
    setPersonData(prev => [
        ...prev,
        {
            friendData,
            type,
        }
    ]);

   
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