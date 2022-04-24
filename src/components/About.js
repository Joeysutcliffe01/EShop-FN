import "./styling/About.css";
import ali from "./img/ali.jpg";
import joey from "./img/about-me.jpg";
import { FaGithub, FaLinkedin, FaMarker } from "react-icons/fa";

export function About() {
  return (
    <div className="container-about">
      <div className="cards-about">
        <div className="imgBx-about">
          <img src={joey} alt="Joey" />
        </div>
        <div className="content-about">
          <div className="details-about">
            <h2>
              Joey
              <br /> <span>Web Developer</span>{" "}
            </h2>
            <p>JoeySutcliffe0@gmail.com</p>
            <ul className="social_icons-about">
              <li>
                <a
                  className="github__link about__link"
                  href="https://github.com/Joeysutcliffe01"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className="linkedin__link about__link"
                  href="https://www.linkedin.com/in/joseph-sutcliffe-01/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="portfolio__link about__link"
                  href="https://www.joeysutcliffe.com/"
                >
                  <FaMarker />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cards-about">
        <div className="imgBx-about">
          <img src={ali} alt="Joey" />
        </div>
        <div className="content-about">
          <div className="details-about">
            <h2>
              Ali
              <br /> <span>Web Developer</span>{" "}
            </h2>
            <p>ali.amidpour.eng@gmail.com</p>
            <ul className="social_icons-about">
              <li>
                <a
                  className="github__link about__link"
                  href="https://github.com/ali-nthtosay"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className="linkedin__link about__link"
                  href="https://www.linkedin.com/in/ali-amidpour-4144911b4/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="portfolio__link about__link"
                  href="https://github.com/ali-nthtosay"
                >
                  <FaMarker />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
