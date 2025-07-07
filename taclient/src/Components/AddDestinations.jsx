import React, { useState } from 'react'
import { addDestinationPost } from '../Services/addDestinationPost';
import "../Styles/AddDestination.css"

export default function AddDestinations() {
    const [desdata,setdesdata] = useState({
        name: '',
        description: '',
        location: '',
        priceRange: '',
        images: ''
    })
    const dataHandler = (value,key) => {
        let temp = {...desdata};
        temp[key] = value;
        setdesdata(temp)
    }
    const addDesData = async() => {
        const addData = await addDestinationPost(desdata);
        if (addData) {
            console.log(addData)
        }
    }
  return (
    <div className="add-container">
        <h2 className="add-title">Add a New Destination</h2>
        <input type="text" className="add-input" placeholder='Name' onChange={(e)=>{dataHandler(e.target.value,"name")}}/>
        <input type="text" className="add-input" placeholder='Description'  onChange={(e)=>{dataHandler(e.target.value,"description")}}/>
        <input type="text" className="add-input" placeholder='Location' onChange={(e)=>{dataHandler(e.target.value,"location")}}/>
        <input type="text" className="add-input" placeholder='PriceRange' onChange={(e)=>{dataHandler(e.target.value,"priceRange")}}/>
        <input type="text" className="add-input" placeholder='images' onChange={(e)=>{dataHandler(e.target.value,"images")}}/>
        <button className="add-button" onClick={()=>{addDesData()}}>Add</button>
    </div>
  )
}
