import './Homepage.css';
import '../../styles/global.css';
import Link from '../../components/link/Link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VStack from '../../components/vstack/VStack';
import resume from '../../assets/ravi_jayaraman_resume.pdf';

const UVA_LINGO_LINK =
  'https://admission.virginia.edu/sites/admission/files/2021-07/Lingo%20and%20Traditions_0.pdf';
const GITHUB_LINK = 'https://github.com/ravijay301';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ravi-jayaraman-/';
const EMAIL_LINK = 'mailto:spy7sw@virginia.edu';
const UVA_LINK = 'https://en.wikipedia.org/wiki/University_of_Virginia';

const Homepage = () => {
  return (
    <div className="page-content text-body">
      <VStack>
        <h1>About</h1>
        <div>
          I'm a{' '}
          <a href={UVA_LINGO_LINK} target="_blank">
            4th year
          </a>{' '}
          (I'm sorry) Computer Science and Math student from the{' '}
          <a href={UVA_LINK} target="_blank">
            University of Virginia
          </a>
          . You can find me reading (come talk to me about Malazan) and playing
          tennis / basically any intermural sport that catches my interest.
        </div>
        <h1>Contact</h1>
        <div className="link-list">
          <VStack spacing="1px" align="left">
            <Link
              href={GITHUB_LINK}
              name="GitHub"
              newTab={true}
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <Link
              href={LINKEDIN_LINK}
              name="LinkedIn"
              newTab={true}
              icon={<FontAwesomeIcon icon={faLinkedin} />}
            />
            <Link
              href={EMAIL_LINK}
              name="spy7sw@virginia.edu"
              icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
          </VStack>
        </div>
        <div className="resume-section">
          <h1>Resume</h1>
          <a href={resume} target="_blank" className="download-icon">
            <FontAwesomeIcon icon={faDownload} size="xl" />
          </a>
        </div>
      </VStack>
    </div>
  );
};

export default Homepage;
