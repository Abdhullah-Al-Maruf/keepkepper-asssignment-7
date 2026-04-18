import React from 'react';

const Emptytimeline = () => {
    return (
        <div>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 h-100 container mx-auto">
  {/* Icon Container */}
  <div className="bg-blue-50 p-4 rounded-full mb-4">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-10 w-10 text-blue-500" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
      />
    </svg>
  </div>

  {/* Text Content */}
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    No activities yet
  </h2>
  <p className="text-gray-500 text-center mb-6 leading-relaxed">
    Your timeline is waiting for its first story. Start texting, calling, or video chatting with friends to see your moments appear here.
  </p>

  {/* Optional CTA Button */}
  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
    Find Friends
  </button>
</div> 
        </div>
    );
};

export default Emptytimeline;