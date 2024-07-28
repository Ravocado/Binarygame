// src/VerticalStack.tsx
import React, { ReactNode } from 'react';
import '../styles/VStack.css';

export type VStackProps = {
  children: ReactNode;
  spacing?: string;
};

const VStack: React.FC<VStackProps> = ({ children, spacing = '1rem' }) => {
  return (
    <div className="vertical-stack" style={{ gap: spacing }}>
      {children}
    </div>
  );
};

export default VStack;
