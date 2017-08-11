'use strict'

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/*", (req, res) => {
    try {
        let file = `./web/${req.originalUrl}`;
        let fileExists = fs.existsSync(file);
        if (fileExists) {
            return res.status(200).sendFile(file, { root: __dirname });
        } else {
            return res.status(404).send("File not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal server error");
    }
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
});