const express = require("express");
const app = new express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const boardModel = require("./model");

const cors = require('cors');
app.use(cors());

mongoose
    .connect(`${process.env.MONGODB_URL}/test`)
    .then(() => console.log("Connected! to MongoDB"));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`working on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send({
        status: "OK",
        message: "You probably landed here by mistake.",
    });
});

app.post("/addBoard", async (req, res) => {
    let newBoard = new boardModel();

    newBoard.title = req.body.title;
    newBoard.description = req.body.description;

    try {
        await newBoard.save();
    } catch (err) {
        console.log(err);

        res.send({
            status: "FAILED",
            message:
                "We are experiencing some technical difficulties. Please try again later.",
        });
    }

    res.send({
        status: "OK",
        board: newBoard
    });
});
