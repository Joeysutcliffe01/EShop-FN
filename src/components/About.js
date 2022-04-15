import "./styling/About.css";

import ali from "./img/ali.jpg";
import joey from "./img/about-me.jpg";

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
            <ul className="social_icons-about">
              <p>JoeySutcliffe0@gmail.com</p>
              {/* <li>
                <i className="fa-solid fa-at"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li> */}
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
            <ul className="social_icons-about">
              <p>ali.amidpour.eng@gmail.com</p>
              {/* <li>
                <i className="fa-solid fa-at"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
