import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function EditGuestForm() {
  const navigate = useNavigate();

  const [guest, setGuest] = useState({
    name_last: "",
    name_first: "",
    street_address_one: "",
    street_address_two: "",
    city_state_zip: "",
    address_is_confirmed: false,
    invite_is_mailed: false,
    rsvp_is_received: false,
    is_attending: false,
    party_total: "0",
  });

  const { id } = useParams();

  const handleTextChange = (e) => {
    setGuest({ ...guest, [e.target.id]: e.target.value });
  };

  const handleAddConfirmChange = () => {
    setGuest({
      ...guest,
      address_is_confirmed: !guest.address_is_confirmed,
    });
  };

  const handleIsMailedChange = () => {
    setGuest({ ...guest, invite_is_mailed: !guest.invite_is_mailed });
  };

  const handleRsvpChange = () => {
    setGuest({ ...guest, rsvp_is_received: !guest.rsvp_is_received });
  };

  const handleAttendingChange = () => {
    setGuest({ ...guest, is_attending: !guest.is_attending });
  };

  const handlePartyChange = (e) => {
    const { value } = e.target;
    const partyValue = value === guest.party ? "" : value;
    setGuest({ ...guest, party: partyValue });
  };

  const updateGuest = () => {
    console.log(`${API}/guests/${id}`);

    fetch(`${API}/guests/${id}`, {
      method: "PUT",
      body: JSON.stringify(guest),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate(`/guests/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`/api/guests/${id}`)
      .then((res) => res.json())
      .then((resJSON) => {
        setGuest(resJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="last">Last Name: </label>
        <input
          id="last"
          value={guest.name_last}
          type="text"
          onChange={handleTextChange}
          placeholder="last name"
          required
        />
        <label htmlFor="first">First Name: </label>
        <input
          id="first"
          value={guest.name_first}
          type="text"
          onChange={handleTextChange}
          placeholder="first name"
          required
        />
        <label htmlFor="addOne">Street Address: </label>
        <input
          id="addOne"
          value={guest.street_address_one}
          type="text"
          onChange={handleTextChange}
          placeholder="street address"
          required
        />
        <label htmlFor="addTwo">Street Address (cont.): </label>
        <input
          id="addTwo"
          value={guest.street_address_two}
          type="text"
          onChange={handleTextChange}
          placeholder="street continued"
        />
        <label htmlFor="cityZip">City, State Zipcode: </label>
        <input
          id="cityZip"
          value={guest.city_state_zip}
          type="text"
          onChange={handleTextChange}
          placeholder="city, ST zip"
          required
        />
        <label htmlFor="addConfirm">Address is Confirmed: </label>
        <input
          id="addConfirm"
          type="checkbox"
          onChange={handleAddConfirmChange}
          checked={guest.address_is_confirmed}
        />
        <label htmlFor="isMailed">Invite is Mailed: </label>
        <input
          id="isMailed"
          type="checkbox"
          onChange={handleIsMailedChange}
          checked={guest.invite_is_mailed}
        />
        <label htmlFor="rsvp">RSVP is Received: </label>
        <input
          id="rsvp"
          type="checkbox"
          onChange={handleRsvpChange}
          checked={guest.rsvp_is_received}
        />
        <label htmlFor="attending">Guest is Attending: </label>
        <input
          id="attending"
          type="checkbox"
          onChange={handleAttendingChange}
          checked={guest.is_attending}
        />
        <label htmlFor="party">Number of Guests Attending: </label>
        <input
          id="party"
          value={guest.party_total}
          type="number"
          min="0"
          step="1"
          max="10"
          onChange={handlePartyChange}
          placeholder="number in party"
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit Changes
        </button>
      </form>
      <Link to={`/guests/${id}`}>
        <button>Nevermind</button>
      </Link>
    </div>
  );
}
