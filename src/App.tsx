import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { AuthProvider } from "./contexts/Auth/AuthProvider";

function App() {
  return (
      <div className="App"> 
          <>
          <Navbar />
          <div className="container">
            <Outlet />
          </div>
          </>
      </div>
  );
}

export default App;
// colocar Authprovider em volta do App
