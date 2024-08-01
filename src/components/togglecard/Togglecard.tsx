import { useState } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Togglecard.css';

type TogglecardProps = {
  cardName: string;
  extraContent?: React.ReactNode;
};

const Togglecard = (props: TogglecardProps) => {
  const { cardName, extraContent } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className="course-item">
      <span
        onClick={toggleOpen}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        {cardName}
        {isOpen ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </span>
      <div className={`extra-text ${isOpen ? 'open' : ''}`}>{extraContent}</div>
    </li>
  );
};

export default Togglecard;
