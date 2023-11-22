import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function AddGuestForm() {
  const navigate = useNavigate();
  const [guest, setGuest] = useState({
    last: "",
    first: "",
    addOne: "",
    addTwo: "",
    cityZip: "",
    addConfirm: false,
    isMailed: false,
    rsvp: false,
    attending: false,
    party: "0",
  });

  const addGuest = () => {
    const guestData = {
      name_last: guest.last,
      name_first: guest.first,
      street_address_one: guest.addOne,
      street_address_two: guest.addTwo,
      city_state_zip: guest.cityZip,
      address_is_confirmed: guest.addConfirm,
      invite_is_mailed: guest.isMailed,
      rsvp_is_received: guest.rsvp,
      is_attending: guest.attending,
      party_total: guest.party,
    };
    try {
      fetch(`${API}/guests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guestData),
      })
        .then((res) => res.json())
        .then(() => navigate("/guests"));
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setGuest({ ...guest, [id]: value });
  };

  const handleAddConfirmChange = () => {
    setGuest({ ...guest, addConfirm: !guest.addConfirm });
  };

  const handleIsMailedChange = () => {
    setGuest({ ...guest, isMailed: !guest.isMailed });
  };

  const handleRsvpChange = () => {
    setGuest({ ...guest, rsvp: !guest.rsvp });
  };

  const handleAttendingChange = () => {
    setGuest({ ...guest, attending: !guest.attending });
  };

  const handlePartyChange = (e) => {
    const { value } = e.target;
    const partyValue = value === guest.party ? "" : value;
    setGuest({ ...guest, party: partyValue });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addGuest();
  };

  return (
    <div className="newguest">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="last">Last Name: </label>
        <input
          id="last"
          value={guest.last}
          type="text"
          onChange={handleTextChange}
          placeholder="last name"
          required
        />
        <label htmlFor="first">First Name: </label>
        <input
          id="first"
          value={guest.first}
          type="text"
          onChange={handleTextChange}
          placeholder="first name"
          required
        />
        <br />
        <br />
        <label htmlFor="addOne">Street Address: </label>
        <input
          id="addOne"
          value={guest.addOne}
          type="text"
          onChange={handleTextChange}
          placeholder="street address"
          required
        />
        <label htmlFor="addTwo">Street Address (cont.): </label>
        <input
          id="addTwo"
          value={guest.addTwo}
          type="text"
          onChange={handleTextChange}
          placeholder="street continued"
        />
        <br />
        <br />
        <label htmlFor="cityZip">City, State Zipcode: </label>
        <input
          id="cityZip"
          value={guest.cityZip}
          type="text"
          onChange={handleTextChange}
          placeholder="city, ST zip"
          required
        />
        <br />
        <br />
        <label htmlFor="addConfirm">Address is Confirmed: </label>
        <input
          id="addConfirm"
          type="checkbox"
          onChange={handleAddConfirmChange}
          checked={guest.addConfirm}
        />
        <br />
        <label htmlFor="isMailed">Invite is Mailed: </label>
        <input
          id="isMailed"
          type="checkbox"
          onChange={handleIsMailedChange}
          checked={guest.isMailed}
        />
        <br />
        <label htmlFor="rsvp">RSVP is Received: </label>
        <input
          id="rsvp"
          type="checkbox"
          onChange={handleRsvpChange}
          checked={guest.rsvp}
        />
        <br />
        <label htmlFor="attending">Guest is Attending: </label>
        <input
          id="attending"
          type="checkbox"
          onChange={handleAttendingChange}
          checked={guest.attending}
        />
        <br />
        <br />
        <label htmlFor="party">Number of Guests Attending: </label>
        <input
          id="party"
          value={guest.party}
          type="number"
          min="0"
          step="1"
          max="10"
          onChange={handlePartyChange}
          placeholder="number in party"
        />
        <br />
        <button id="newguest" className="btn btn-primary" type="submit">
          Add New Guest
        </button>
      </form>
      <Link to={`/guests`}>
        <button className="btn btn-primary">Back to All Guests</button>
      </Link>
    </div>
  );
}
