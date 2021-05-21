import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../graphics/Listaus-Logo.png";
import backButton from "../graphics/Back-button.png";

export default function App() {
  return (
    <div className="container">
      <Link to="/">
        <div className="backButtonContainer">
          <img className="backButton" src={backButton} alt="back" />
        </div>
      </Link>
      <img className="logoOnListPage" src={logo} alt="Logo" />
      <h1>Leikkipaikat</h1>
      <Search />
    </div>
  )
}