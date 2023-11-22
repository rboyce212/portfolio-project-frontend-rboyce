import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

export default function GuestDetails() {
  const [guest, setGuest] = useState({ name_last: "" });
  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        fetch(`${API}/guests/${index}`)
          .then((res) => res.json())
          .then((res) => {
            setGuest(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchGuest();
  }, [index]);

  const handleDelete = () => {
    fetch(`${API}/guests/${index}`, { method: "DELETE" }).then(() =>
      navigate(`/guests`)
    );
  };

  return (
    <div>
      <div>
        {guest ? (
          <div>
            <>
              <h3>
                {guest.name_first} {guest.name_last}
              </h3>
              <h4>Address: {guest.street_address_one}</h4>
              <h4>(cont.): {guest.street_address_two}</h4>
              <h4>(cont.): {guest.city_state_zip}</h4>
              <h5>Address Confirmed = {guest.address_is_confirmed}</h5>
              <h5>Invitation Mailed = {guest.invite_is_mailed}</h5>
              <h5>RSVP Received = {guest.rsvp_is_received}</h5>
              <h5>Will Be Attending = {guest.is_attending}</h5>
              <h5>Total Number of Guests: {guest.party_total}</h5>
              <div>
                <Link to={`/guests/${index}/edit`}>Edit Guest Info</Link>
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-primary"
                >
                  Delete Guest!
                </button>
              </div>
            </>
          </div>
        ) : (
          <>
            <div className="alert alert-warning" role="alert">
              No Guest Info Available
            </div>
            <br />
            <div>
              <Link to="/guests">Select another guest</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
