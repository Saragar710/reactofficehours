const express = require("express");
const app = express;

const PORT = process.env.PORT || 3000;

const mockProfile = {
    name: "Bootcamp",
    viewCount:600
}
//MVC
//VIEWs (API,HTML)
app.get("/api/profile", (req,res) => {
    res.json(mockProfile)
})


app.get()
app.get("/", (req,res) => res.send(`HTML is under construction..`))

app.listen(PORT, () => console.log('Server is listening on ${PORT}'))