const express = require("express");

const app = express();

app.use(express.json());

// app.get('/', (req, res)=> {
//     res.status(200).send('Hi!')
// })

app.get("/", (req, res) => {
	// console.log(req.params);
	console.log(req.query);
	res.status(200).send("Successfully accessed");
});
//* //localhost:7000/bella/?age=37

http: app.listen(7000, () => {
	console.log(`server is running on port 7000`);
});
