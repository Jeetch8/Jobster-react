import MainImg from "../assets/images/main.svg";
import Logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={Logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>some text</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={MainImg} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
