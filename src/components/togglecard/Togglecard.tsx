import { useState } from 'react';
import './Togglecard.css';

type ToggleCardProps = {
  cardName: string;
  expandedContent: React.ReactNode;
};

const Togglecard = ({ cardName, expandedContent }: ToggleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="toggle-card">
      <div className="card-header">
        <span className="card-name">{cardName + ' '}</span>
        <span className="expand-link" onClick={() => setIsOpen(!isOpen)}>
          ({isOpen ? 'Collapse' : 'Expand'})
        </span>
      </div>

      {isOpen && <div className="expanded-content">{expandedContent}</div>}
    </li>
  );
};

export default Togglecard;
