import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function Guests() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/guests`);
        const data = await response.json();
        setGuests(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(guests);

  return (
    <div>
      <h2>Guest Invitations:</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Street Address</th>
            <th scope="col">Address (cont.)</th>
            <th scope="col">City, ST Zip</th>
            <th scope="col">Address is Confirmed?</th>
            <th scope="col">Invitation is Mailed?</th>
            <th scope="col">RSVP is Received?</th>
            <th scope="col">Is Attending?</th>
            <th scope="col">Total Attending</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(guests) &&
            guests.map((item) => (
              <tr key={item.id} className="list">
                <td className="table-secondary">
                  <Link to={`/guests/${item.id}`}>{item.name_last}</Link>
                </td>
                <td className="table-secondary">{item.name_first}</td>
                <td className="table-secondary">{item.street_address_one}</td>
                <td className="table-secondary">{item.street_address_two}</td>
                <td className="table-secondary">{item.city_state_zip}</td>
                <td className="table-secondary">{item.address_is_confirmed}</td>
                <td className="table-secondary">{item.invite_is_mailed}</td>
                <td className="table-secondary">{item.rsvp_is_received}</td>
                <td className="table-secondary">{item.is_attending}</td>
                <td className="table-warning">{item.party_total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
