import Header from './components/header/Header.tsx';
import Homepage from './pages/homepage/Homepage.tsx';
import Coursework from './pages/courswork/Coursework.tsx';
import Projects from './pages/projects/Projects.tsx';
import { useState } from 'react';

enum WebsiteTab {
  HOME = 'Home',
  COURSEWORK = 'Coursework',
  PROJECTS = 'Projects',
}

function App() {
  const [activeTab, setActiveTab] = useState<string>(WebsiteTab.HOME);
  const tabs = [WebsiteTab.HOME, WebsiteTab.COURSEWORK, WebsiteTab.PROJECTS];
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  let page: React.ReactNode;
  switch (activeTab) {
    case WebsiteTab.HOME:
      page = <Homepage />;
      break;
    case WebsiteTab.COURSEWORK:
      page = <Coursework />;
      break;
    case WebsiteTab.PROJECTS:
      page = <Projects />;
      break;
    default:
      page = <Homepage />;
  }
  return (
    <>
      <Header
        name="Ravi Jayaraman"
        tabs={tabs}
        setActiveTab={handleTabClick}
        activeTab={activeTab}
      />
      {page}
    </>
  );
}

export default App;
