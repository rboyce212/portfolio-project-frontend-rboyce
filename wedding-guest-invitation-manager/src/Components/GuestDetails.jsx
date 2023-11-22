import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function GuestDetails() {
  const [guest, setGuest] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchGuestById = async () => {
      try {
        const response = await fetch(`${API}/guests/${id}`);
        const data = await response.json();
        setGuest(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuestById();
  }, [id]);

  const handleDelete = () => {
    fetch(`${API}/guests/${id}`, { method: "DELETE" })
      .then(() => navigate(`/guests`))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      {guest ? (
        <>
          <h2>
            {guest.name_first} {guest.name_last}
          </h2>
          <div>
            <p>Street Address: {guest.street_address_one}</p>
            <p>Street (cont.): {guest.street_address_two}</p>
            <p>City, ST Zip: {guest.city_state_zip}</p>
            <p>Address Confirmed: {guest.address_is_confirmed}</p>
            <p>Invite Mailed:{guest.invite_is_mailed}</p>
            <p>RSVP Received: {guest.rsvp_is_received}</p>
            <p>Is Attending: {guest.is_attending}</p>
            <p>Confirmed Total: {guest.party_total}</p>
          </div>
          <Link to={`/guests/${id}/edit`} className="btn btn-primary">
            Edit Guest Info
          </Link>
          <br />
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Guest
          </button>
          <br />
          <br />
          <div>
            <Link to="/guests">Back to All Guests</Link>
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-warning">
            <div>
              There is no more guest info available!
              <Link to="/guests">Please Select Another Guest</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
