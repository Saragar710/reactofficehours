const express = require("express");
const app = express;

const PORT = process.env.PORT || 3000;
const router = require("/routes")


const mockProfile = {
    name: "Bootcamp",
    viewCount:600
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", router)

//MVC
//VIEWs (API,HTML)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", router)

//CRUD
//GET
// app.get("/api/profile", (req, res) => {
//     res.json(mockProfile)
// })

// //Create Profile
// app.post("/api/profile", (req, res) => {
//     res.json(mockProfile)
// })



// app.get("/", (req,res) => res.send(`HTML is under construction..`))

// app.get("/css/app.css", (req, res) => {
//     res.sendFile(__dirname + `/public/css/app.css`)
// })
// app.get("/css/app.css", (req, res) => {
//     res.sendFile(__dirname + `/public/images/vite.svg`)
// })
app.use(express.static("public"))

app.listen(PORT, () => console.log('Server is listening on ${PORT}'))