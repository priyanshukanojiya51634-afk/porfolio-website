import React, { useEffect, useState } from "react";

import portfolioimg from "./WhatsApp Image 2026-09-24 at 17.48.41.jpeg";
import { Link } from "react-router-dom";

//Type writer animation
function Home() {
  const [text, setText] = useState("");
  const [wordText, setwordText] = useState(0);
  const [charindex, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isonline, setIsonline] = useState(navigator.onLine);
  const [showToast, setshowToast] = useState(!navigator.onLine);

  const words = [
    "Fullstack devloper",
    "Software devloper",
    "Mernstack devloper",
    "Web designer",
  ];

  useEffect(() => {
    const currentword = words[wordText];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentword.slice(0, charindex + 1));
          setIndex(charindex + 1);
          if (charindex === currentword.length) {
            setIsDeleting(true);
          }
        } else {
          setText(currentword.slice(0, charindex - 1));
          setIndex(charindex - 1);
          if (charindex === 0) {
            setIsDeleting(false);
            setwordText((wordText + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 120,
    );
    return () => clearTimeout(timeout);
  }, [charindex, isDeleting, wordText]);
  useEffect(() => {
    const handleonline = () => {
      setIsonline(true);
      setshowToast(true);

      setTimeout(() => {
        setshowToast(false);
      }, 3000);
    };

    const handleoffline = () => {
      setIsonline(false);
      setshowToast(true);
    };
    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);

    return () => {
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleoffline);
    };
  }, []);
  //Active downloading
  const downloadresume = () => {
    window.open("/resume.pdf", "_blanck");
  };

  return (
    <>
      <div className="hero-layout">
        <div className="home-container">
          <div className="work">Avalible for work</div>
          <h1>Priyanshu kanojiya</h1>
          <div className="textcontainer">
            I am a <span id="typing-text"> {text}</span>
          </div>
          <div className="btncontainer">
            <button className="btn" type="button" onClick={downloadresume}>
              Download resume
            </button>
            <Link to="/Hireme">
              <button className="btn" type="button">
                HIRE ME
              </button>
            </Link>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/priyanshu-kanojiya-93b0283a9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Priyanshu's LinkedIn profile"
            >
              <i className="fa-brands fa-linkedin-in applogo"></i>
            </a>
            <a
              href="https://www.instagram.com/priyanshukanojiya51634/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Priyanshu's instagrame"
            >
              <i class="fa-brands fa-instagram applogo"></i>
            </a>
            <a
              href="https://osdire.com/freelancer/profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Priyanshu's freelincing"
            >
              <i class="fa-brands fa-square-upwork applogo"></i>
            </a>
          </div>
        </div>
        <div className="profileimg">
          <img src={portfolioimg} alt="profile image" />
        </div>
      </div>
      {/*About section  */}
      <section className="aboutsection">
        <div className="about-left">
          <p className="abouttitle">ABOUT</p>
          <div className="box">
            <div className="star">
              <p className="number">10+</p>
              <p className="lable">Project</p>
            </div>
            <div className="star">
              <p className="number">10+</p>
              <p className="lable">Skils</p>
            </div>
            <div className="star">
              <p className="number">9</p>
              <p className="lable">Countrey</p>
            </div>
            <div className="star">
              <p className="number">2</p>
              <p className="lable">internship</p>
            </div>
          </div>
        </div>
        {/*Right side section */}
        <div className="aboutright">
          <h2>I build morder website that make idea stand-out</h2>

          <p>
            I'm a BCA student and MERN Stack developer passionate about building
            modern, responsive and user-friendly web applications.
          </p>

          <p>
            I work with technologies like React, JavaScript, Node.js, Express
            and MongoDB to create complete web applications from frontend to
            backend.
          </p>

          <p>
            I enjoy turning ideas into real products, solving problems with code
            and continuously learning new technologies. I am always been pacent
            about poblem solving and debuging and solving technological problem
            solving and system disgne
          </p>
          <p>
            I have difrent idea my fucter plane is creating and building web
            application with mysql and perfect system desgion i learned my
            coding skils codewith harry and complate my dsa sheriyan coding
            school i work better my dsa fundamantels and other skils like
            freelincilng and system desgion i am good freelincer to work online
            i tacke poject and build proper and usefull project and deliver with
            hosting and advaticing of porduct i add on my full efferts I start
            my jouurney as a fullstck devloper in Mark 2025 and complate in 2
            years i have multilple skils for making usefull application I am
            user ai tools like chatgpt,gimini,deepsik,
          </p>
          <p className="expirence">Experience</p>
          <div className="textp">
            <h3 className="slable">Sarting</h3>
            <p>Web devloper</p>
            <p className="textnumber">2025 starting</p>
            <h3 className="slable">Indinpandent</h3>
            <p>Fullstck devloper</p>
            <p className="textnumber">2027 starting work</p>
            <h3 className="slable">
              Currentley freelincer starting work build new versione
            </h3>
            <p>
              Freelincing on web devlopment softwate devlopment and mernstack
              devloper
            </p>
            <p className="textnumber">2026 indipendent</p>
          </div>
        </div>
      </section>
      {/*Work left */}
      <section className="worksection">
        <div className="workleft">
          <p className="worktitle">WORK</p>
          <figure className="workimg workimg-featured">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
              alt="Web application dashboard displayed on a laptop"
            />
            <figcaption>
              <strong>Web Experiences</strong>
              <span>Responsive frontend with React</span>
            </figcaption>
          </figure>
          <figure className="workimg">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85"
              alt="JavaScript code on a computer screen"
            />
            <figcaption>
              <strong>Full-Stack Apps</strong>
              <span>Node.js, Express and MongoDB</span>
            </figcaption>
          </figure>
          <figure className="workimg">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85"
              alt="A person using a mobile application"
            />
            <figcaption>
              <strong>Backend & APIs</strong>
              <span>Connected data and features</span>
            </figcaption>
          </figure>
        </div>
        {/*Right section of work */}
        <div className="workright">
          <h2>
            Thoughtful web development for ideas ready to become real products
          </h2>
          <p>
            I work with clients to turn their ideas into polished, responsive
            websites and web applications. From the first page visitors see to
            the details that make a product easy to use, I focus on creating
            clear, reliable experiences that work across devices.
          </p>

          <p>
            My toolkit includes HTML, CSS, JavaScript, and React for the
            frontend, along with Node.js, Express, and MongoDB for backend
            functionality and REST APIs. That means I can help build both the
            user-facing experience and the features working behind it.
          </p>

          <p>
            Whether you need a new website, a useful application, or help
            bringing an existing idea to life, I value clear communication,
            thoughtful problem-solving, and steady progress. Tell me what you're
            looking to build, and let's make it useful for the people who will
            use it.
          </p>
        </div>
      </section>
      <section className="timego">
        <h2 className="mytitle">Where did my time go</h2>

        <div className="sbox">
          <div className="bstar">
            <p className="worktext">
              Hi, my name is Priyanshu Kanojiya, and I am a full-stack
              developer. This is how my day usually flows while I work, learn,
              and build.
            </p>
            <div className="bstart">
              <p className="worktext">
                I usually start my day by planning what I want to accomplish. I
                spend some time learning new concepts, exploring technologies,
                and improving my understanding of JavaScript, React, Node.js,
                and other tools I use as a developer.
              </p>
            </div>
          </div>
          <div className="bstar">
            <p className="worktext">
              Most of my time goes into building, learning, and experimenting
              with the MERN stack — turning ideas into complete and
              user-friendly web applications.
            </p>
          </div>
        </div>
      </section>
      {showToast && (
        <div className={`toastStyle ${isonline ? "online" : "offline"}`}>
          <span className="showalert">
            {isonline
              ? "Currently offline. Please check your network connection."
              : "Back online"}
          </span>
        </div>
      )}
    </>
  );
}

export default Home;
