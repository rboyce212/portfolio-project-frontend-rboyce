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
      name_firstt: guest.first,
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
    e.proventDefault();
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
        <label htmlFor="addone">Street Address: </label>
        <input
          id="addone"
          value={guest.addOne}
          type="text"
          onChange={handleTextChange}
          placeholder="street address"
          required
        />
        <label htmlFor="addtwo">Street Address (cont.): </label>
        <input
          id="addtwo"
          value={guest.addTwo}
          type="text"
          onChange={handleTextChange}
          placeholder="street continued"
          required
        />
        <label htmlFor="cityzip">City, State Zipcode: </label>
        <input
          id="cityzip"
          value={guest.cityZip}
          type="text"
          onChange={handleTextChange}
          placeholder="city, ST zip"
          required
        />
        <label htmlFor="addconfirm">Address is Confirmed: </label>
        <input
          id="addconfirm"
          type="checkbox"
          onChange={handleAddConfirmChange}
          checked={guest.addConfirm}
        />
        <label htmlFor="ismailed">Invite is Mailed: </label>
        <input
          id="ismailed"
          type="checkbox"
          onChange={handleIsMailedChange}
          checked={guest.isMailed}
        />
        <label htmlFor="rsvp">RSVP is Received: </label>
        <input
          id="rsvp"
          type="checkbox"
          onChange={handleRsvpChange}
          checked={guest.rsvp}
        />
        <label htmlFor="attending">Guest is Attending: </label>
        <input
          id="attending"
          type="checkbox"
          onChange={handleAttendingChange}
          checked={guest.attending}
        />
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
        <button type="submit">Add New Guest</button>
      </form>
      <br />
      <Link to={`/guests`}>
        <button>View All Guests</button>
      </Link>
    </div>
  );
}
