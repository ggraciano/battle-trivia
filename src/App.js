import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/trivia" element={<Trivia></Trivia>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
