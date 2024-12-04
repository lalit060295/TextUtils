import { useState } from "react";
import "./App.css";
//import AboutUs from './Components/AboutUs';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
  };

  return (
    <>
      {/* <Navbar title="TextUtils" abouttext = "About Text"/> */}
      <Navbar title="TextUtils" abouttext="About Text" />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
      </div>
      {/* <div className='container my-3'>
        <AboutUs/>
      </div> */}
      <div className="container my-3">
        <Alert value={alert} alert="this is alert box"/>
      </div>
    </>
  );
}

export default App;
