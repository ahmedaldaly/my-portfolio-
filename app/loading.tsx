import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="flex flex-col items-center space-y-6">
        {/* دائرة التحميل */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin shadow-lg"></div>
        
        {/* نص التحميل */}
        <p className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
