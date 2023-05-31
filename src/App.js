import { useState } from "react";
import Alert from "./components/Alert";
import Login from "./components/Login";


function App() {

  const [alert, setAlert] = useState({
    mensaje :"",
    color : ""
  });

  return (
    <>
      <Login setAlert={setAlert}/>

      {alert.mensaje != ""? <Alert color = {alert.color}>{alert.mensaje}</Alert> : null}
    </>
  );
}

export default App;
