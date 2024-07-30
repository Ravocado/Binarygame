import './Link.css';

export type LinkProps = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const Link = (props: LinkProps) => {
  const { name, href, icon } = props;
  return (
    <div className="flex">
      {icon && <div className='mr-1'>{icon}</div>}
      <a href={href}>{name}</a>
    </div>
  );
};

export default Link;
