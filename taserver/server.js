const express = require('express');
const cors = require('cors');
const { connectDb } = require('./config/db');

const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/destination' , require ('./routes/destinationRoutes'));

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server listening on http://localhost:${port}`);
  });
});




















// const express = require('express');
// const cors = require('cors');
// const { connectDb } = require('./config/db');

// const app = express();
// const port = 5000;

// // ✅ Order is important: middleware first
// app.use(express.json());
// app.use(cors());


// app.post('/test', (req, res) => {
//   console.log("✅ /test POST route hit");
//   console.log("Body received:", req.body);
//   res.json({ message: "Test route working" });
// });


// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });


// // ✅ Routes after middleware
// app.use('/api/auth', require('./routes/authRoutes'));

// connectDb().then(() => {
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// });

















// const express = require('express');
// const { connectDb } = require('./config/db');
// const app = express();
// const cors = require('cors');

// const port = 5000;

// app.use(express.json());
// app.use(cors());


// app.use('/api/auth',require('./routes/authRoutes'));

// connectDb().then(()=>{
//     app.listen(port, () => {
//         console.log(`Example app listening on port ${port}`)
//     })
// }) 