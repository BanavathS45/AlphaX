import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import RiseLoader from "react-spinners/RingLoader";
import { teal } from "@mui/material/colors";
const Technology = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/store");
  };
  let data = [
    {
      title: "Understand Objectives",
      description:
        "As a client-focused web and mobile app development company, we gain in-depth insights into your digital requirements, consumer behaviours, technology platforms, functionalities, etc., to help you gain a competitive edge. This is our approach for developing the right user experience, emphasising top-notch aesthetic               sensibilities that engage your consumers.",
    },
    {
      title: "Choose Right ​​​​​​​Technology",
      description:
        "Empowered with tech-heavy centricity, our solutions transcend the usual methods of solving problems. We ensure a sophisticated frontend experience and develop a user-friendly backend by considering the bigger picture for tech-focused digital transformation that was once impossible.",
    },
    {
      title: "Documented Coding",
      description:
        "From elegant designs to a custom-coded website, the radical development phase is driven by our digital mindfulness to translate your digital vision.",
    },
    {
      title: "Careful Testing",
      description:
        "With our great knowledge in tech engineering, we employ a rigorous QA testing process that encompasses testing speed, security, user-friendly interface experience, and overall functionality and eliminates flaws before the product goes live.",
    },
    {
      title: "Successful Deployment",
      description:
        "When you decide to work with a thriving web and mobile app development company like us, you unlock the best tech-driven solutions that stand the test of time across multiple environments, including staging and production.",
    },
    {
      title: "AMC Support",
      description:
        "Our technology experts are conversant with cutting-edge technology and software trends, maintaining a website and ensuring smooth app performance. Moreover, our foolproof AMC support lends best-in-class customer assistance equipped with hassle-free backend integration for our esteemed patrons.",
    },
  ];

  return (
    <>
      <RoutingFile />
      <section className="design-section w-100">
        <div className="design-container d-flex justify-content-end w-100">
          <RiseLoader
            color="blue"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

        {/* Right side with the text */}
      </section>
      <section className="design-section" data-aos="fade-up">
        <div className="design-container">
          <div className="row">
            {/* Left side with the image */}

            <div className="col-12">
              <div className="design-text">
                <h4
                  className="section-title "
                  style={{ fontWeight: "bold", color: "teal" }}
                >
                  Technogy
                </h4>
                <nav className="breadcrumb ">
                  <div className="row w-100">
                    <div className="col-4">
                      <span>Home</span>
                    </div>
                    <div className="col-4">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</span>
                    </div>
                    <div className="col-4 ">
                      <span>
                        {" "}
                        •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technology Services
                      </span>
                    </div>
                  </div>
                </nav>
                <h1 className="main-text ">Decoding the power of coding</h1>
                <h2 style={{ fontWeight: "bold" }} className="mt-4">
                  We design to empower human experiences.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with the text */}
      </section>

      <div className="section3  d-flex flex-column justify-content-start align-content-start align-items-start w-100   ">
        <div
          className="title ps-5"
          data-aos="fade-up"
          style={{ color: "teal" }}
        >
          What do we serve ?
        </div>
        {/* circle-background */}
        <div className="ps-5 mt-5 mb-5 " data-aos="fade-down">
          <h1 className="main-text">
            Comprehensive technology services that integrate digital
            craftsmanship and business goals.
          </h1>
        </div>

        <div className="ps-5 mt-5 mb-5 " data-aos="fade-up">
          <h1
            className=""
            style={{ color: "teal", fontWeight: "bold", fontSize: "40px" }}
          >
            Web
          </h1>
        </div>

        <div
          className="w-100 ms-5 d-flex flex-wrap justify-content-center  "
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>Web Design</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Development</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Front-End</h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>Back-End</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>JavaScript</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>CSS3</h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>HTML5</h2>
                </Link>
                <Link className="tech-link mb-4">
                  <h2>Angular</h2>
                </Link>
                <Link className="tech-link mb-4">
                  <h2>E-commerce</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="ps-5 mt-5 mb-5 " data-aos="fade-up">
          <h1
            className=""
            style={{ color: "teal", fontWeight: "bold", fontSize: "40px" }}
          >
            Mobile Apps
          </h1>
        </div>

        <div
          className="w-100 ms-5 d-flex flex-wrap justify-content-center  "
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div className="col-12 col-md-4 technologies" data-aos="fade-left">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>IOS</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Ionic </h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-left">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>Native</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Android</h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-left">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>Hybird</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* card1 */}
      </div>
      <div
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
      >
        <h1 className=" " style={{ color: "teal", fontWeight: "bold" }}>
          HOW WE DO IT ?
        </h1>
      </div>
      <h3
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
        style={{ fontWeight: "bold" }}
      >
        Going the extra mile with an extra bit of effort at every step.
      </h3>

      <div
        className="cards-container d-flex flex-wrap gap-5 justify-content-start align-items-start"
        style={{ paddingTop: "120px" }}
      >
        {data.map((e) => {
          return (
            <div
              className="card-wrapper"
              style={{ width: "48%" }} // Adjusting width to 48% for two columns with some gap
              data-aos="fade-up"
              key={e.title}
            >
              <div className="card-body ms-5">
                <h2 className="card-title">{e.title}</h2>
                <h5 className="card-text mt-3 " style={{ lineHeight: "1.5" }}>
                  {e.description}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <section className="ToolsWeUse " data-aos="fade-up">
        <h1 className="text-center my-5 fw-bold" style={{ color: "teal" }}>
          Tools We Use
        </h1>
        <div className="container">
          <div className="row justify-content-center align-content-center align-items-center">
            <div className="col-3  p-5 mx-4  my-2  border ">
              <img
                width={"90%"}
                src="https://th.bing.com/th/id/R.0f70d47cc6eb26955411fc30106dad9a?rik=5c5eiYoGeEkwRg&riu=http%3a%2f%2flogicbig.com%2ftutorials%2fmisc%2fgit%2fimages%2fgit.png&ehk=jMks4Z8b%2fax34N%2fpaiUcftkG3a5C8q%2bs8Eu%2b6vXVEi0%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                width={"80%"}
                src="https://code.visualstudio.com/assets/images/code-stable.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5611/5611129.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/186/186300.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4 my-2 border ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1409/1409945.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="travelxp-container section150 ms-5 " data-aos="fade-up">
          {/* Title Section */}
          <h1 className="heading" style={{color:"teal"}}>Technology</h1>

          {/* Image Banner */}
          <div className="image-banner">
            <img
              src="https://wallpaperaccess.com/full/1510405.jpg"
              alt="Travelxp Banner"
              className="banner-img"
            />
          </div>

          {/* Content Section */}

          {/* List Section */}
          <div className="list-section text-start mt-3">
            <h2>Travelxp</h2>
            <div className="content-section">
              <p>
                Created great experience for clients looking to book holidays.
              </p>
            </div>
            <ul className="platform " style={{ width: "120px" }}>
              <li>UI-UX</li>
              <li>Web</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="morecards ms-5 my-5 section150 ">
          <div className="title">
            <h1 className="heading text-center" style={{color:"teal"}}>Other services</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <Link class="card" to="/service">
                  <div class="card-body tech">
                    <h1> Design.</h1>
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <p> Leverage the power of code.</p>
                      </div>
                      <div className="col-2 ">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                          alt=""
                          width={"50%"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* markting */}
            <div className="col-5">
              <div>
                <Link class="card" to="service/marketing">
                  <div class="card-body marketing">
                    <h1> Marketing.</h1>
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <p> Creative strategies for brands.</p>
                      </div>
                      <div className="col-2 ">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                          alt=""
                          width={"50%"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
//  <section className="how-we-do-it">
//         <h4 className="subheading">HOW WE DO IT?</h4>
//         <h1 className="title">Leaving no stone unturned at every step.</h1>
//         <div className="steps-container">
//           {/* Empathise Section */}
//           <div className="step">
//             <img
//               src="https://image.shutterstock.com/image-vector/document-search-line-icon-outline-260nw-1450146737.jpg"
//               alt="Empathise Icon"
//               className="icon"
//             />
//             <h3>Empathise</h3>
//             <p>
//               As a thriving UI UX agency, we harness the proven empathy-driven
//               human-focused design process to craft the best digital solutions
//               mapping the users' preferences.
//             </p>
//           </div>
//           {/* Define Section */}
//           <div className="step">
//             <img
//               src="https://image.shutterstock.com/image-vector/brain-gear-cog-wheel-engineering-260nw-1410171159.jpg"
//               alt="Define Icon"
//               className="icon"
//             />
//             <h3>Define (the Problem)</h3>
//             <p>
//               Apt logic and detailing is incorporated precisely with elements
//               like design functions, features, functionalities, workflow and
//               beyond to solve complex issues with minimal snags.
//             </p>
//           </div>
//         </div>
//       </section>

export default Technology;
