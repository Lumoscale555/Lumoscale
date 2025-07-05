import React from 'react';

const Call: React.FC = () => {
  return (
    <a
      href="tel:+918074328526"
      className="fixed bottom-24 right-6 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-slow-bounce z-50 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="absolute right-20 bg-gray-800 text-white p-2 rounded-md text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
        Call us!
      </span>
      <i className="fas fa-phone-alt text-white text-3xl relative z-10" />
    </a>
  );
};

export default Call;
 