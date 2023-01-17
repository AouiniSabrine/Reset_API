const express = require('express');
const app = express();
const connectDB = require("./config/Rest_auth_DB")
connectDB()
app.use("/api/users", require("./routes/user"));
app.listen(5000, () => {
    console.log('Server started on port 5000');
});

