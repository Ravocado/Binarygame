import Link from '../../components/link/Link';
import '../../styles/global.css';
import ToggleCard from '../../components/togglecard/ToggleCard';
import ai_help_2 from '../../assets/SmartOH/ai_help_2.png';
import join_filters from '../../assets/SmartOH/join_filters.png';
import SwitchingToRecurrent from '../../assets/MarkovChainCalculator/SwitchingToRecurrent.png';
const GITHUB_BASE_URL = 'https://github.com';

let ProjectList = [
  {
    name: 'HoosWhere (2024)',
    expandedContent: (
      <p>
        Developed a competitive forum for users to guess locations posted by
        other users around UVA grounds with limited information, with an active
        points leaderboard. The game uses a daily challenge structure, where
        users are presented with one location to guess per day. However, former
        day's challenges appear as well to ensure all users can complete all of
        the challenges!
        <Link
          name="GitHub"
          href={`${GITHUB_BASE_URL}/ravijay301/HoosWhere`}
          newTab={true}
        />
      </p>
    ),
  },
  {
    name: 'SmartOH (2023)',
    expandedContent: (
      <p>
        Won 3rd place in VTHacks 2023. Office hours queue that has built out
        features for both students and TAs. Allows TAs to selectively drag
        students in to suit their strengths as well as providing estimated wait
        times and AI assistance for students.
        <h2>Images</h2>
        <div className="image-container">
          <img
            src={join_filters}
            alt="Join Filters"
            className="side-by-side-image"
          />
          <img src={ai_help_2} alt="AI Help" className="side-by-side-image" />
        </div>
        <Link
          name="GitHub"
          href={`${GITHUB_BASE_URL}/ewei2406/SmartOH`}
          newTab={true}
        />
      </p>
    ),
  },
  {
    name: 'Markov Chain Calculator (2023)',
    expandedContent: (
      <p>
        A basic python calculator that takes in an excel file, and can do varius
        calculations if the given excel document has a valid Markov Chain.
        <h2>Images</h2>
        <div className="image-container">
          <img
            src={SwitchingToRecurrent}
            alt="AI Help"
            className="side-by-side-image"
          />
        </div>
        <Link
          name="GitHub"
          href={`${GITHUB_BASE_URL}/ravijay301/MarkovChainCalculator`}
          newTab={true}
        />
      </p>
    ),
  },
];

const Projects = () => {
  return (
    <div className="page-content text-body">
      <h1>Projects</h1>
      <ul>
        {ProjectList.map((project, i) => {
          return (
            <ToggleCard
              key={i}
              cardName={project.name}
              expandedContent={project.expandedContent}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Projects;
