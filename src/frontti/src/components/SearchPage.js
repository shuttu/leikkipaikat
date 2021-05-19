import { Link } from "react-router-dom";
import Search from './Search';
import {Button} from "react-bootstrap/";
import logo from "../logo.png";

export default function App() {

  return (
    <div>
        <Link to="/">
          <Button variant="outline-danger" className="buttonStyle custom-btn">Back</Button>
        </Link>
        <img className="logoOnListPage" src={logo} alt="Logo" />;

        <h1>Leikkipaikat</h1>
        <Search/>
    </div>
  );
}


