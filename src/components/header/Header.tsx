import './Header.css';

interface HeaderProps {
  name: string;
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = (props: HeaderProps) => {
  const { name, tabs, activeTab, setActiveTab } = props;
  return (
    <header className="header">
      <h1 className="header-name">{name}</h1>
      <nav className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
