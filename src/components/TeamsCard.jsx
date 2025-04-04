import React from 'react';

const TeamsCard = ({ image, name, role }) => {
  return (
    <div className="max-w-sm mx-auto bg-zinc-700 text-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 mt-6">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-center">
        <div className="grid grid-cols-1"> 
          <h3 className="text-2xl font-bold text-orange-500">{name}</h3>
          <p className="text-amber-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
