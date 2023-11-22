import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header>
        <h2 className="navbar">
          <Link to="/">
            Wedding Invite Organizer <link />
          </Link>
        </h2>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-primary me-md-2">
            <Link to="/guests/add">Add New Guest</Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link to="/guests">View All Guests</Link>
          </button>
        </div>
      </header>
    </nav>
  );
}

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">
    Button
  </button>
  <button class="btn btn-primary" type="button">
    Button
  </button>
</div>;
