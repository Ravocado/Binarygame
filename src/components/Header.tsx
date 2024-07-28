// src/Header.tsx
import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="header">
      <div className="toolbar">
        <h1>{name}</h1>
      </div>
    </header>
  );
};

export default Header;
