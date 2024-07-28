import '../styles/Homepage.css';
import Link, { LinkProps } from '../components/Link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VStack from '../components/VStack';
import Header from '../components/Header';
import resume from '../assets/ravi_jayaraman_resume.pdf';

const UVA_LINGO_LINK =
  'https://admission.virginia.edu/sites/admission/files/2021-07/Lingo%20and%20Traditions_0.pdf';
const GITHUB_LINK = 'https://github.com/ravijay301';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/ravi-jayaraman/';
const EMAIL_LINK = 'spy7sw@virginia.edu';

const Homepage = () => {
  return (
    <>
      <Header name="Ravi Jayaraman" />
      <VStack>
        <h1>About</h1>
        <div>
          I'm a 4th year (<a href={UVA_LINGO_LINK}>Senior</a>) CS and Math
          student from UVA. You can find me reading (come talk to me about
          Malazan), playing tennis / basically any intermural sport that catches
          my interest, and playing probably too many games. Yeah, I am also
          looking for a job I guess.
        </div>
        <h1>Contact</h1>
        <VStack>
          <Link
            href={GITHUB_LINK}
            name="GitHub"
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          <Link
            href={LINKEDIN_LINK}
            name="LinkedIn"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
          />
          <Link
            href={EMAIL_LINK}
            name="spy7sw@virginia.edu"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
        </VStack>
        <div className="flex">
          <h1>Resume</h1>
          <a href={resume} target="_blank">
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </VStack>
    </>
  );
};

export default Homepage;
