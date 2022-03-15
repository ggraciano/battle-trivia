import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Frame from "../../components/Frame";
import "./style.css";

function Trivia() {
  const [trivia, setTrivia] = useState({
    id: 0,
    clip: "",
    question: "",
    answers: [],
  });

  function fetchTrivia() {
    setTrivia({
      id: 1,
      clip: "https://clips.twitch.tv/embed?clip=SingleCautiousFerretCoolStoryBro-vAEM-iQbnvYZN9_v&parent=localhost",
      title: "EOS blockchain clip",
      question: "What is the symbol for the EOS blockchain?",
      answers: ["Chestahedron", "Chestahedron", "Chestahedron", "Chestahedron"],
    });
  }

  useEffect(() => {
    fetchTrivia();
  }, []);

  return (
    <div className="Trivia">
      <div className="container-fluid py-5">
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <div className="card justify-content-center">
              <div className="container-fluid py-4">
                <div className="row g-4">
                  <div className="col-12">
                    <Frame src={trivia.clip} title={trivia.title}></Frame>
                  </div>
                  <div className="col-12">
                    <p className="question-header">Question {trivia.id}</p>
                    <h1>{trivia.question}</h1>
                  </div>
                  {trivia.answers.map((answer, index) => (
                    <div className="col-12 col-sm-6" key={index}>
                      <button
                        type="button"
                        className="btn rounded-pill shadow-none px-3"
                      >
                        {answer}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trivia;
