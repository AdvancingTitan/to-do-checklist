import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const todayTasks = ["test0"];
const workTasks = ["test1"];

app.use('/', express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("pages/today.ejs", {
        tTasks: todayTasks,
        wTasks: workTasks
    });
});

app.post("/submit", (req, res) => {
    todayTasks.push(req.body["newUserTask"]);
    console.log(todayTasks);

    res.render("pages/today.ejs", {
        tTasks: todayTasks,
        wTasks: workTasks
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});