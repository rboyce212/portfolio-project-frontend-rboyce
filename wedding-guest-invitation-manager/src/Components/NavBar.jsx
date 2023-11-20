import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header>
        <h2>
          <Link to="/">Wedding Guest Invitation Manager</Link>
        </h2>
        <button>
          <Link to="/games/new">Add New Guest</Link>
        </button>
        <button>
          <Link to="/games">View All Guests</Link>
        </button>
      </header>
    </nav>
  );
}
