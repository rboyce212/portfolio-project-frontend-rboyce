import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function Guests() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`${API}/guests`)
          .then((res) => res.json())
          .then((res) => {
            setGuests(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Guest Invitations:</h1>
      <table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Street Address</th>
            <th>Address (cont.)</th>
            <th>City, ST Zip</th>
            <th>Address is Confirmed?</th>
            <th>Invitation is Mailed?</th>
            <th>RSVP is Received?</th>
            <th>Is Attending?</th>
            <th>Total Attending</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((item) => {
            <tr key={item.id} className="list">
              <td>
                <Link to={`/guests/${item.id}`}>{item.name_last}</Link>
              </td>
              <td>{item.name_first}</td>
              <td>{item.street_address_one}</td>
              <td>{item.street_address_two}</td>
              <td>{item.city_state_zip}</td>
              <td>{item.address_is_confirmed}</td>
              <td>{item.invite_is_mailed}</td>
              <td>{item.rsvp_is_received}</td>
              <td>{item.is_attending}</td>
              <td>{item.party_total}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
