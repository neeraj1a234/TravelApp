const { getDb } = require("../config/db");
const { tokenGenerator } = require("../utils/tokenGenerator");

//Login
const userLogin = async (req, res) => {
  try {
    const db = getDb();

    const { username, password } = req.body;
    console.log("Body received:", { username, password });

    const user = await db.collection("users").findOne({ name: username });
    console.log("User found:", user);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
// generate token
const payload = {
  email:user.email,
  isAdmin:user.isAdmin
}
console.log("payload",payload)
const token = tokenGenerator(payload)
////////////////
    return res.status(200).json({ message: "Login successful", token , Admin : user.isAdmin});
  } catch (error) {
    console.error("Login error:", error); 
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Signup
const userSignup = async (req, res) => {
  try {
    console.log("postSignup")
    const db = getDb();
    const {name,email,password} = req.body;
    const newUser = await db.collection("users").insertOne({name,email,password,isAdmin:false});
    console.log(newUser)
    res.status(200).json({message:'Signup Succesfull',User : newUser});
} catch (error) {
   console.error("Signup Error:", error);
   res.status(500).send('Failed to insert user');
}
}

const adminLogin =async(req, res) => {
  try {
    console.log("admin login page");
    const { username, password } = req.body;
    console.log("Body received:", { username, password });
    const admin = await db.collection("users").findOne({ name: username,isAdmin:true });
    if (!admin) return res.status(401).json({ message: "Admin not found" });

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({ message: "Admin login successful", admin });
} catch (error) {
   res.status(500).json({ message: "Internal server error" });
}
  }
  


module.exports = { userLogin,userSignup,adminLogin };













































// const { getDb } = require("../config/db");


// // Login
// const userLogin = async (req,res) => {
//     try {
//         const db = getDb()
//         if (!db) return res.status(500).json({ message: "DB not connected" });
        
//         const {username,password} = req.body;
//         const user = await db.collection('Users').findOne({name : {$eq : username}});
//         if (!user) {
//         return res.status(401).json({ message: 'User not found' });
//         }
//         if (password != user.password) {
//         return res.status(401).json({ message: 'Invalid password' });
//         }
//         return res.status(200).json({ message: "Login successful", user });
//     } catch (error) {
//         console.error("Login error:", error);
//          return res.status(500).json({ message: 'Internal server error' });
// }
// }


// const { getDb } = require("../config/db");

// const userLogin = async (req, res) => {
//   try {
//     const db = getDb();
//     if (!db) {
//       console.log("DB not connected");
//       return res.status(500).json({ message: "DB not connected" });
//     }

//     const { username, password } = req.body;
//     console.log("Received:", username, password); // 👈 log incoming data

//     const user = await db.collection('users').findOne({ name: username });
//     console.log("Found user:", user); // 👈 log what you find

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     if (password !== user.password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     return res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     console.error("Login error:", error); // 👈 print full error
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };


// module.exports = {userLogin}



