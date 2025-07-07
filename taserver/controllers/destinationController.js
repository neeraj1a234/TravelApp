const { getDb } = require("../config/db")

// show All Destination
const allDestinations = async (req, res) => {
    try {
        const db = getDb();
        const destinations = await db.collection('hotels').find({}).toArray();
        if (!destinations) {
            return res.status(401).json({ message: 'No Destinations Found' });
        }
        console.log(destinations)
        return res.status(200).json({message:'All Destinations',Destinations : destinations})
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
// Add Destination
const addDestination = async (req, res) => {
    try {
        const db = getDb();
        const {name,description,location,priceRange,images} = req.body;
        const newDestination = await db.collection('hotels').insertOne({name,description,location,priceRange,images,booklist:[]});
        res.status(200).json({message:'Destination Added Succesfully' ,destination : name })
    } catch(error){
      res.status(500).send('Failed to add Destination');
    }
}
// Book Destination
const bookDestination = async (req,res) => {
    try {
        const db = getDb();
        const {destination,bookedBy} = req.body;
        const booking = await db.collection('bookings').insertOne({destination,bookedBy})
        res.status(200).json({message:`${destination} Booked Succesfully by ${bookedBy}` })
    } catch (error) {
        res.status(500).send('Failed to Book Destination');
    }
}
// remove Destination
const { ObjectId } = require("mongodb");
const removeDestination = async (req,res) => {
    const db = getDb();
    const removeId = req.params.id;
    console.log("Deleting ID:", removeData);
    const result = await db.collection('hotels').deleteOne({ _id: new ObjectId(removeId)});
    res.status(200).json({ message: "Deleted", result })
}

// update Destination
const updateDestination = async (req, res) => {
    const db = getDb();
    const updateId = req.params.id;
     const { name, description, location, priceRange, images } = req.body;
    console.log("updating ID:", updateId);
      const result = await db.collection("hotels").updateOne(
      { _id: new ObjectId(updateId) },
      { $set: { name, description, location, priceRange, images } }
    );
    res.status(200).json({ message: "Destination updated successfully" });
}
module.exports = {allDestinations,addDestination,bookDestination,removeDestination,updateDestination}