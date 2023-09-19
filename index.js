import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const todayTasks = ["test0"];
const workTasks = ["test1"];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("pages/today.ejs", {
        tTasks: todayTasks,
        wTasks: workTasks,
        dNames: dayNames,
        mNames: monthNames
    });
});

app.post("/submit", (req, res) => {
    todayTasks.push(req.body["newUserTask"]);
    console.log(todayTasks);

    res.render("pages/today.ejs", {
        tTasks: todayTasks,
        wTasks: workTasks,
        dNames: dayNames,
        mNames: monthNames
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});