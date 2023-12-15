import { Link } from "react-router-dom";
import { SiPreact } from "react-icons/si";

import "./styles.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <div className="logo">
            <Link to="/">
              <SiPreact /> <span>tt</span>
            </Link>
          </div>

          <div className="header-menu">
            <ul>
              <li>
                <Link to="/">início</Link>
              </li>
              <li>
                <Link to="/posts">feed</Link>
              </li>
              <li>
                <Link to="/contato">contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
