import React, { use, useEffect, useState } from 'react';
import { destinationGet } from '../Services/destinationGet';
import "../Styles/Destinations.css"
import { bookDestinationPost } from '../Services/bookDestinationPost';


export default function Destinations() {
  const [alldestination, setAlldestination] = useState([]);
  const [bookDestination,setBookDestination] = useState({
    destination:"des1",
    bookedBy:"user1"
  })

  useEffect(() => {
    const destinations = async () => {
      const desData = await destinationGet();
      if (desData && desData.Destinations) {
        setAlldestination(desData.Destinations);
      } else {
        console.error('Error fetching destinations:', desData);
      }
    };

    destinations();
  }, []);

  const handleBook = async() => {
    const bookDes = await bookDestinationPost(bookDestination);
    if (bookDes) {
      console.log(bookDes)
    }
  };
  ///////////////////////
const [selectedDestination, setSelectedDestination] = useState(null);
const [showModal, setShowModal] = useState(false);

const handleDesBook = (destination) => {
  setSelectedDestination(destination);
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
  setSelectedDestination(null);
};
///////////////////////////
  return (
    <div className="destination-container">
      <h3 className="destination-title">Destinations</h3>
      <ul className="destination-list">
        {alldestination.map((dest, index) => (
          <li key={index} className="destination-item">
            <h4 className="destination-name">{dest.name}</h4>
            <p><strong>{dest.description}</strong> </p>
            <p><strong>Location:</strong> {dest.location}</p>
            <p><strong>Price Range:</strong> ₹{dest.priceRange}</p>
            <button className="book-btn" onClick={() => handleDesBook(dest)}>
              Book
            </button>
            <button className="book-btn">
              Update
            </button>
            <button className="book-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>


   {showModal && selectedDestination && (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <h2>{selectedDestination.name}</h2>
        <p>{selectedDestination.description}</p>
        <p><strong>Location:</strong> {selectedDestination.location}</p>
        <p><strong>Price Range:</strong> ₹{selectedDestination.priceRange}</p>
        {/* Booking options */}
        <label>
          Select Date:
          <input type="date" />
        </label>
        <br />
        <button className="confirm-btn">Confirm Booking</button>
      </div>
    </div>
  )}

  
    </div>
  );
}
