import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Link.css';

export type LinkProps = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const Link = (props: LinkProps) => {
  const { name, href, icon } = props;
  return (
    <div className="flex">
      {icon && icon}
      <a href={href}>{name}</a>
    </div>
  );
};

export default Link;
