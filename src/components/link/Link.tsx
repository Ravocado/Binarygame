import './Link.css';

export type LinkProps = {
  name: string;
  href: string;
  newTab?: boolean;
  icon?: React.ReactNode;
};

const Link = (props: LinkProps) => {
  const { name, href, icon } = props;
  let target = '';
  if (props.newTab) {
    target = '_blank';
  }
  return (
    <div className="flex">
      {icon && <div className="mr-1">{icon}</div>}
      <a href={href} target={target}>
        {name}
      </a>
    </div>
  );
};

export default Link;
