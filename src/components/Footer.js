import Contacts from "./Contacts";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Contacts />
        <div className="copyright">&copy; 2023 John Francis Mabie</div>
      </div>
    </footer>
  );
};

export default Footer;
