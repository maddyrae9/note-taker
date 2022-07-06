const express = require("express");
const fs = require ("fs");

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;


//incoming array data
app.use(express.urlencoded({ extended: true }));
//public folder file path
app.use(express.static("public"));
//incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


//should return the notes.html
app.get("/notes"), (req, res) => {
    res.sendFile(path.join(__dirname, "/develop/public/index.html"));
}
app.listen(PORT, () =>
    console.log('App listening at http://localhost:${PORT}')
);