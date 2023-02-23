import link from "../images/linkedin.png";
import github from "../images/github-blanc.png";
import envelope from "../images/envelope.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <nav className="footer-contact">
          <ul>
            <a
              href="mailto:ricoland@hotmail.fr"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logos-footer"
                src={envelope}
                alt="Picto enveloppe"
              />
            </a>
          </ul>
          <ul>
            <a
              href="https://www.linkedin.com/in/eric-allain-440344247/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logos-footer" src={link} alt="Logo LinkedIn" />
            </a>
          </ul>
          <ul>
            <a
              href="https://github.com/ricoland77/beer-bar"
              target="_blank"
              rel="noreferrer"
            >
              <img className="logos-footer" src={github} alt="Logo GitHub" />
            </a>
          </ul>
        </nav>
        <p className="sign">Coded with "API Punk" - by ricoland©</p>
      </div>
    </div>
  );
};
export default Footer;
