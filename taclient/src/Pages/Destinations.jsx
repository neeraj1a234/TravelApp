import React, { useContext, useEffect, useState } from 'react';
import { destinationGet } from '../Services/destinationGet';
import "../Styles/Destinations.css";
import { bookDestinationPost } from '../Services/bookDestinationPost';
import { AdminContext } from '../Context/AdminProvider';
import { removeDestinationDelete } from '../Services/removeDestinationDelete';
import { updateDestinationPut } from '../Services/updateDestinationPut';
 // 🔑 Import your update service

export default function Destinations() {
  const [alldestination, setAlldestination] = useState([]);
  const [bookDestination, setBookDestination] = useState({
    destination: "",
    bookedBy: "user1",
  });

  const { isAdmin } = useContext(AdminContext);

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: "",
    description: "",
    location: "",
    priceRange: "",
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const desData = await destinationGet();
    if (desData && desData.Destinations) {
      setAlldestination(desData.Destinations);
    } else {
      console.error("Error fetching destinations:", desData);
    }
  };

  const handleBook = async () => {
    // const bookDes = await bookDestinationPost(bookDestination);
    // if (bookDes) {
    //   console.log(bookDes);
    // }
    console.log("Destination selected for booking:", destination);
  setSelectedDestination(destination);
  setShowModal(true);
  };

  const handleRemoveDes = async (destinationId) => {
    const result = await removeDestinationDelete(destinationId);
    if (result) {
      alert(result.message || "Deleted successfully");
      fetchDestinations(); 
    }
  };

  const handleUpdateDes = async (desId, updatedData) => {
    const result = await updateDestinationPut(desId, updatedData);
    if (result) {
      alert(result.message || "Updated successfully");
      setShowUpdateModal(false);
      fetchDestinations(); 
    }
  };

  const openUpdateModal = (destination) => {
    setSelectedDestination(destination);
    setUpdateData({
      name: destination.name,
      description: destination.description,
      location: destination.location,
      priceRange: destination.priceRange,
    });
    setShowUpdateModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDestination(null);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedDestination(null);
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="destination-container">
      <h3 className="destination-title">Destinations</h3>
      <ul className="destination-list">
        {alldestination.map((dest, index) => (
          <li key={index} className="destination-item">
            <h4 className="destination-name">{dest.name}</h4>
            <p><strong>{dest.description}</strong></p>
            <p><strong>Location:</strong> {dest.location}</p>
            <p><strong>Price Range:</strong> {dest.priceRange}</p>
            {isAdmin ? (
              <>
                <button className="book-btn" onClick={() => openUpdateModal(dest)}>Update</button>
                <button className="book-btn" onClick={() => handleRemoveDes(dest._id)}>Delete</button>
              </>
            ) : (
              <button className="book-btn" onClick={() => handleDesBook(dest)}>Book</button>
            )}
          </li>
        ))}
      </ul>

      {/* Booking Modal */}
      {showModal && selectedDestination && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            <p><strong>Location:</strong> {selectedDestination.location}</p>
            <p><strong>Price Range:</strong> ₹{selectedDestination.priceRange}</p>
            <label>
              Select Date:
              <input type="date" />
            </label>
            <br />
            <button className="confirm-btn" onClick={handleBook}>Confirm Booking</button>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateModal && selectedDestination && (
        <div className="modal-overlay" onClick={closeUpdateModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeUpdateModal}>X</button>
            <h2>Update Destination</h2>
            <label>
              Name:
              <input type="text" name="name" value={updateData.name} onChange={handleUpdateInputChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={updateData.description} onChange={handleUpdateInputChange} />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={updateData.location} onChange={handleUpdateInputChange} />
            </label>
            <label>
              Price Range:
              <input type="text" name="priceRange" value={updateData.priceRange} onChange={handleUpdateInputChange} />
            </label>
            <br />
            <button className="confirm-btn" onClick={() => handleUpdateDes(selectedDestination._id, updateData)}>Confirm Update</button>
          </div>
        </div>
      )}
    </div>
  );
}
