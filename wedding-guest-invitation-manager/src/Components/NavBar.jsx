import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header>
        <h2>
          <Link to="/">Wedding Guest Invitation Manager</Link>
        </h2>
        <button type="button" className="btn btn-primary">
          <Link to="/guests/add">Add New Guest</Link>
        </button>
        <button type="button" className="btn btn-primary">
          <Link to="/guests">View All Guests</Link>
        </button>
      </header>
    </nav>
  );
}
