import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/logo.jpg";
import Step1 from "./component/step1/step1";
import Step2 from "./component/step2/step2";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
        <div className="churchLogoBox">
          <img src={Logo} alt="church logo"></img>
          <section>
            <h3>Elevation</h3>
            <p>church</p>
          </section>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Step1 />}></Route>
            <Route path="/Step2" element={<Step2 />}></Route>
          </Routes>
        </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
