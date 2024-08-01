type FooterProps = {
  text: string;
};

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <p>{props.text}</p>
    </footer>
  );
};

export default Footer;
