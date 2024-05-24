const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3005;
const bodyparser = require('body-parser')
const JWTSignin = require('./JWTSigninService.js')
app.use(cors());
app.use(bodyparser.json());




app.post("/signin", JWTSignin);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  