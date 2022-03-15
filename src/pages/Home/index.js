import logo from "../../assets/images/logo.png";
import "./style.css";

function Home() {
  return (
    <div className="Home">
      <div className="container-fluid full-height">
        <div className="row align-content-center justify-content-center g-4">
          <div className="col-12">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="col-12">
            <a
              className="btn btn-lg rounded-pill px-5"
              href="/trivia"
              role="button"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
