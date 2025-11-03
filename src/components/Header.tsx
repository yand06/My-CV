import React from "react";

interface HeaderProps {
  name: string;
  photo: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, photo, contact }) => {
  return (
    <header className="bg-primary text-white p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        <div
          className="w-24 h-32 md:w-28 md:h-36 rounded-lg bg-gray-300 flex-shrink-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo})` }}
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-wider">
            {name}
          </h1>
          <div className="text-sm space-y-1">
            <div>{contact.phone}</div>
            <div>{contact.email}</div>
            <div>{contact.location}</div>
            <div>{contact.github}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
