import logo from "../../assets/images/logo.png";
import "./style.css";

function NotFound() {
  return (
    <div className="NotFound">
      <div className="container-fluid full-height">
        <div className="row align-content-center justify-content-center g-4">
          <div className="col-12">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="col-12">
            <a className="btn btn-lg rounded-pill px-3" href="/" role="button">
              404 Page Not Found.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
