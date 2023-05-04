import face from "../assets/media/106616130_276750643430394_6992149895293952372_n.jpg";
import face2 from "../assets/media/whosethot.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <span className="home-title">Full-Stack Web Developer</span>
        <span className="contact-bar">
          <span className="phone">+1 (626) 864-0110</span>
          <span className="email">johnmabie94@gmail.com</span>
          <span className="city">Tulsa, Oklahoma</span>
        </span>
      </div>
      <div className="intro-container">
        <div className="page-intro">
          <div className="text-box text-home">
            <div id="box1">Welcome to my React Portfolio!</div>
            <div id="box2">
              <p>
                Check out some <Link to={"/projects"}>projects</Link> I've
                worked on!
              </p>
              <p>
                Or, reach out if you have any{" "}
                <Link to={"./contact"}> questions</Link> for me!
              </p>
            </div>
          </div>
          <div className="face">
            <img src={face2} alt="Jack Mabie Portrait by Dalton Mannerud" />
          </div>
        </div>
      </div>
      <div className="homebase-proper">
        <div>
          <h1 className="name">Jack Mabie</h1>
        </div>
        <div className="text-box homebase-box">
          <div className="otra-face">
            <img src={face} alt="Jack Mabie Portrait by Nicklaus Gray" />
          </div>
          <div className="content">
            <p>
              After years of working as a freelance audio engineer, I wanted to
              take my experiences working with music and music technology to a
              new level.
            </p>
            <p>
              At the end of 2022, I enrolled in a 6-month full-stack web
              development bootcamp in order to add another skillset which could
              benefit my love for music.
            </p>
            <p>
              From no prior experience coding, I can now say that this site has
              built entirely with the React JavaScript library thanks to the
              bootcamp!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
