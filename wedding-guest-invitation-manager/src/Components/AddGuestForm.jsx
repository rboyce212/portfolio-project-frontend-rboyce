import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function AddGuestForm() {
  const [click, setClick] = useState(false);
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

  //     function handleAddOneChange(e) {
  //         setGuests({
  //             ...guests,
  //             [e.target.id]: e.target.value,
  //         });
  //     }

  //   const handleTextChange = (e) => {
  //     const { id, value } = e.target;
  //     setGuest({ ...guest, [id]: value });
  //   };

  function handleLastChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }

  function handleFirstChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }

  function handleAddOneChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }

  function handleAddTwoChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }

  function handleCityZipChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }

  //   const handleAddConfirmChange = () => {
  //     setGuest({ ...guest, addConfirm: !guest.addConfirm });
  //   };

  //   const handleIsMailedChange = () => {
  //     setGuest({ ...guest, isMailed: !guest.isMailed });
  //   };

  //   const handleRsvpChange = () => {
  //     setGuest({ ...guest, rsvp: !guest.rsvp });
  //   };

  //   const handleAttendingChange = () => {
  //     setGuest({ ...guest, attending: !guest.attending });
  //   };

  function handleAddConfirmChange(e) {
    if (click) {
      setClick(true);
      setGuest({
        ...guest,
        addConfirm: true,
      });
    } else {
      setClick(false);
      setGuest({
        ...guest,
        addconfirm: false,
      });
    }
  }

  function handleRsvpChange(e) {
    if (click) {
      setClick(true);
      setGuest({
        ...guest,
        rsvp: true,
      });
    } else {
      setClick(false);
      setGuest({
        ...guest,
        rsvp: false,
      });
    }
  }

  function handleIsMailedChange(e) {
    if (click) {
      setClick(true);
      setGuest({ ...guest, isMailed: true });
    } else {
      setClick(false);
      setGuest({ ...guest, isMailed: false });
    }
  }

  function handleAttendingChange(e) {
    if (click) {
      setClick(true);
      setGuest({
        ...guest,
        attending: true,
      });
    } else {
      setClick(false);
      setGuest({
        ...guest,
        attending: false,
      });
    }
  }

  function handlePartyChange(e) {
    setGuest({
      ...guest,
      [e.target.id]: e.target.value,
    });
  }
  //   } = (e) => {
  //     const { value } = e.target;
  //     const partyValue = value === guest.party ? "" : value;
  //     setGuest({ ...guest, party: partyValue });
  //   };

  //   const handleOnChange(id, value) {
  //     setGuests({ ...guests, [id]: value });
  //   }

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
          onChange={handleLastChange}
          placeholder="last name"
          required
        />
        <label htmlFor="first">First Name: </label>
        <input
          id="first"
          value={guest.first}
          type="text"
          onChange={handleFirstChange}
          placeholder="first name"
          required
        />
        <label htmlFor="addOne">Street Address: </label>
        <input
          id="addOne"
          value={guest.addOne}
          type="text"
          onChange={handleAddOneChange}
          placeholder="street address"
          required
        />
        <label htmlFor="addTwo">Street Address (cont.): </label>
        <input
          id="addTwo"
          value={guest.addTwo}
          type="text"
          onChange={handleAddTwoChange}
          placeholder="street continued"
        />
        <label htmlFor="cityZip">City, State Zipcode: </label>
        <input
          id="cityZip"
          value={guest.cityZip}
          type="text"
          onChange={handleCityZipChange}
          placeholder="city, ST zip"
          required
        />
        <label htmlFor="addConfirm">Address is Confirmed: </label>
        <input
          id="addConfirm"
          type="checkbox"
          onChange={(e) => handleAddConfirmChange}
          checked={guest.addConfirm}
        />
        <label htmlFor="isMailed">Invite is Mailed: </label>
        <input
          id="isMailed"
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
