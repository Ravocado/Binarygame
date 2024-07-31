import Link from '../../components/link/Link';
import '../../styles/global.css';
const GITHUB_BASE_URL = 'https://github.com';

const Projects = () => {
  return (
    <div className="page-content text-body">
      <h1>Projects</h1>
      <ul>
        <li>
          <Link name="SmartOH" href={`${GITHUB_BASE_URL}/ewei2406/SmartOH`} />
        </li>
        <li>
          <Link
            name="HoosWhere"
            href={`${GITHUB_BASE_URL}/ravijay301/HoosWhere`}
          />
        </li>
        <li>
          <Link
            name="Markov Chain Calculator"
            href={`${GITHUB_BASE_URL}/ravijay301/MarkovChainCalculator`}
          />
        </li>
      </ul>
    </div>
  );
};
export default Projects;
