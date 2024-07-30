// src/VerticalStack.tsx
import React, { ReactNode } from 'react';
import './VStack.css';

export type VStackProps = {
  children: ReactNode;
  spacing?: string;
  align?: 'left' | 'center' | 'right';
};

const VStack: React.FC<VStackProps> = ({
  children,
  spacing = '1rem',
  align = 'left',
}) => {
  return (
    <div className={`vertical-stack ${align}`} style={{ gap: spacing }}>
      {children}
    </div>
  );
};

export default VStack;
